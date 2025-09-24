import './Htp.css';
import { selectedWord } from './Words';

export default function Hint({ onClose }) {
  const word = (selectedWord || '').toString();
  let vowels = 0;
  let consonants = 0;
  const vowelsSet = new Set(['A','E','I','O','U']);

  for (let i = 0; i < word.length; i++) {
    const ch = (word[i] || '').toUpperCase();
    if (ch >= 'A' && ch <= 'Z') {
      if (vowelsSet.has(ch)) vowels += 1;
      else consonants += 1;
    }
  }

  return (
    <div className="contained">
      <div className="htp-container" id="text-container">
        <div className="removeWrapper">
          <div className="removeDiv" onClick={() => onClose && onClose()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>
        <div className="hint-text">
          <p>{`There ${vowels === 1 ? 'is' : 'are'} ${vowels} vowel${vowels === 1 ? '' : 's'}.`}</p>
          <p>{`There ${consonants === 1 ? 'is' : 'are'} ${consonants} consonant${consonants === 1 ? '' : 's'}.`}</p>
          <p>{`The first letter of the word is ${ (word[0] || '').toUpperCase() }.`}</p>
        </div>
      </div>
    </div>
  );
}