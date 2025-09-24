import './Htp.css'
export default function Htp({onClose}) {
    const paraArray = [
        "Guess the word in 6 tries.",
        "Each guess must be a valid 5 real letter word found on the dictionary. Hit the enter button to submit.",
        "After each guess, the color of the tiles will change to show how close your guess was to the word."
    ];
    const exampleTextArray = [
        "",
        "Green means correct letter & position.",
        "Yellow means correct letter wrong position.",
        "Grey means letter not included."
    ];
    const exampleWordArray = [
        ['W','O','R','D','S'],
        ['V','I','V','I','D'],
        ['S','O','L','U','S']
    ];
    return (
        <div className="contained">
            <div className="htp-container">
                <div className="removeWrapper">
                    <div className="removeDiv" onClick={() => onClose && onClose()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                </div>
                <div className="htpstyle">
                    <h1>How To Play</h1>
                </div>
                <div className="explanation">
                    {paraArray.map((e, index) => (
                        <p key={index}>{e}</p>
                    ))}
                </div>
                <div className="Examples">
                    {exampleWordArray.map((word, i) => (
                        <div key={i}>
                            <div className="example-word">
                                {word.map((letter, j) => (
                                    <span key={j} className="example-letter" id={(i === 0 && j === 0 ? "green" : "") + (i === 1 && j === 2 ? "yellow" : "") + (i === 2 && j === 4 ? "grey" : "")}><b>{letter}</b></span>
                                ))}
                            </div>
                            {exampleTextArray[i+1] && (
                                <p className="example-text">{exampleTextArray[i+1]}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}