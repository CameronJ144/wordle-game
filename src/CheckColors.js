import {selectedWord} from './Words';
export let finished = false;
export default function checkColors(word) {
    let correct = 0;
    let selectedWordDict = {}, wordDict = {};
    let selectedWordUpper = selectedWord.toUpperCase();
    let letterColorArray = [];
    for(let i=0;i<word.length;i++){
        selectedWordDict[selectedWordUpper[i]] = 0;
        wordDict[word[i]] = 0;
    }
    for(let i=0;i<word.length;i++){
        selectedWordDict[selectedWordUpper[i]] += 1;
        wordDict[word[i]] += 1;
    }
    for(let i=word.length-1;i>=0;i--){
        if(word[i] !== selectedWordUpper[i]){
            if(selectedWordUpper.includes(word[i])){
                if(wordDict[word[i]] !== selectedWordDict[word[i]]){
                    wordDict[word[i]] -= 1;
                    letterColorArray.push("grey");
                }else{
                    letterColorArray.push("yellow");
                }
            }else{
                letterColorArray.push("grey")
            }
        }else{
            letterColorArray.push("green");
            correct++;
        }
    }
    if(correct === 5){
        finished = true;
    }
    return {colors: letterColorArray.reverse(), finished};
}