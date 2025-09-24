import { useState, useEffect } from 'react';
import { selectedWord } from './Words';
export default function Finished() {
  const [overlayVisible, setOverlayVisible] = useState(true);
  useEffect(() => {
    if (overlayVisible) {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'rgb(16,16,16)';
    }
    return () => {
      document.body.style.backgroundColor = 'rgb(16,16,16)';
    };
  }, [overlayVisible]);

  const handleClose = () => {
    setOverlayVisible(false);
  };

  return (
    <>
      {overlayVisible && (
        <div id="finished-container">
          <div id="finished-div">
            <div id="div1" onClick={handleClose} style={{ cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </div>
            <h2>
              Thanks for Playing!
              <br />
              You have finished!
            </h2>
          </div>
        </div>
      )}

      <div id="word-container">
        <div id="wordBox">
          <strong>{selectedWord.toUpperCase()}</strong>
        </div>
      </div>
    </>
  );
}