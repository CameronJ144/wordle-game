import './WordleGrid.css';
import { useState, useEffect, useCallback } from "react";
import Keyboard from './Keyboard';
import { validWords } from './Words';
import checkColors from './CheckColors';

let word = "";

export default function WordleGrid({ pause, setPaused, showHtp, onFinish }) {
  const [grid, setGrid] = useState(Array(6).fill("").map(() => Array(5).fill("")));
  const [colorGrid, setColorGrid] = useState(Array(6).fill(null));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  const handleKeyPress = useCallback((event) => {
    if (pause === false) {
      const letter = String(event.key).toUpperCase();
      if (letter === "BACKSPACE" || letter === "DELETE") {
        if (currentCol > 0) {
          const newGrid = [...grid];
          newGrid[currentRow] = [...newGrid[currentRow]];
          newGrid[currentRow][currentCol - 1] = "";
          word = word.slice(0, -1);
          setGrid(newGrid);
          setCurrentCol(currentCol - 1);
        }
        return;
      }

      if (letter === "ENTER") {
        if (currentRow < 6) {
          if (currentCol === 5) {
            if (validWords.includes(word.toLowerCase())) {
              const result = checkColors(word);
              const colors = result.colors;
              const isFinished = result.finished;
              const newColorGrid = [...colorGrid];
              newColorGrid[currentRow] = colors;
              setColorGrid(newColorGrid);

              if (!isFinished) {
                // If this was NOT the final attempt, advance to next row.
                if (currentRow < 5) {
                  word = "";
                  const newGrid = [...grid];
                  newGrid[currentRow] = [...newGrid[currentRow]];
                  newGrid[currentRow][currentCol] = "";
                  setCurrentCol(0);
                  setGrid(newGrid);
                  setCurrentRow(currentRow + 1);
                } else {
                  // All 6 rows used and answer incorrect -> finish the game
                  if (typeof onFinish === "function") onFinish();
                  return;
                }
              } else {
                // Correct answer -> finish the game
                if (typeof onFinish === "function") onFinish();
                return;
              }
            } else {
              console.log("put valid word");
            }
          } else {
            console.log("must fill every box");
          }
        }
        return;
      }

      if (/^[A-Z]$/.test(letter) && currentCol < 5) {
        const newGrid = [...grid];
        newGrid[currentRow] = [...newGrid[currentRow]];
        newGrid[currentRow][currentCol] = letter;
        setGrid(newGrid);
        word += letter;
        setCurrentCol(currentCol + 1);
      }
    }
  }, [currentCol, currentRow, grid, colorGrid, pause, onFinish]);

  const handleButtonClick = (letter) => {
    handleKeyPress({ key: letter });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <>
      <div id="wordle-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              colIndex < 5 && (
                <div
                  key={colIndex}
                  className={`textbox ${colorGrid[rowIndex] ? colorGrid[rowIndex][colIndex] : ""}`}
                >
                  {cell}
                </div>
              )
            ))}
          </div>
        ))}
      </div>
      <Keyboard onButtonClick={handleButtonClick} />
    </>
  );
}