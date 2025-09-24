import './App.css';
import Nav from './Nav';
import WordleGrid from './WordleGrid';
import Htp from './Htp';
import Hint from './Hint';
import StartScreen from './StartScreen';
import Finished from './Finished';
import { useState } from 'react';
import { selectedWord } from './Words';

function App() {
  const [pause, setPaused] = useState(true);
  const [showHtp, setShowHtp] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showFinished, setShowFinished] = useState(false);

  const openHtp = () => { setShowHtp(true); setPaused(true); };
  const closeHtp = () => { setShowHtp(false); setPaused(false); };
  const openHint = () => { setShowHint(true); setPaused(true); };
  const closeHint = () => { setShowHint(false); setPaused(false); };

  const openFinished = () => { setShowFinished(true); setPaused(true); };
  const closeFinished = () => { setShowFinished(false); setPaused(false); };

  return (
    <div>
      <Nav setPaused={setPaused} setShowHtp={openHtp} setShowHint={openHint} />
      <WordleGrid pause={pause} setPaused={setPaused} showHtp={showHtp} onFinish={openFinished}
      />

      {/* overlays */}
      {pause && !showHtp && !showHint && !showFinished && (
        <StartScreen onClose={() => setPaused(false)} />
      )}
      {showHtp && <Htp onClose={closeHtp} />}
      {showHint && <Hint onClose={closeHint} />}
      {showFinished && <Finished onClose={closeFinished} />}
    </div>
  );
}
console.log(selectedWord)
export default App;