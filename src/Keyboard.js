import './keyboard.css';
let keyboard1 = ["Q","W","E","R","T","Y","U","I","O","P"]
let keyboard2 = ["A","S","D","F","G","H","J","K","L",]
let keyboard3 = ["ENTER","Z","X","C","V","B","N","M","DELETE"]; //alphabet for buttons
export default function Keyboard({onButtonClick}) {
  return (
    <div id="container">
      <div className="keyboard">
        {keyboard1.map(letter => (
          <button className="key" key={letter} onClick={() => onButtonClick(letter)}>{letter}</button>
        ))}
      </div>
      <div className="keyboard">
        {keyboard2.map(letter => (
          <button className="key" key={letter} onClick={() => onButtonClick(letter)}>{letter}</button>
        ))}
      </div>
      <div className="keyboard">
        {keyboard3.map(letter => (
          <button
            className={letter === "ENTER" || letter === "DELETE" ? "wordkey" : "key"}
            key={letter}
            onClick={() => onButtonClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
export const keyboard = keyboard1 + "," + keyboard2 + "," + keyboard3;