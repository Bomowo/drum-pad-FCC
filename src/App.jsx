import {useState} from 'react'

function App() {
  const [display, setDisplay] = useState(' ')

  function pressKeyboard (e) {
    const keyPressed = e.code
    const audio = document.getElementById(keyPressed[keyPressed.length-1].toUpperCase());

    if(audio !== null ) {
      setDisplay(audio.parentElement.id)
      audio.play()
    }

  }

  function clickOnPad (e) {
    const audio = e.target.children[0]
    setDisplay(e.target.id)
    audio.play();
  }

  return (
    <div className='drum-container' onKeyDown={pressKeyboard} tabIndex='0'> 
      <div id="display">{display}</div>
      <div id="drum-machine" className="drum-machine">
          <div className="drum-pad" id="Heater-1" onClick={clickOnPad}>
            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            Q
          </div>
          <div className="drum-pad" id="Heater-2" onClick={clickOnPad}>
            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            W
          </div>
          <div className="drum-pad" id="Heater-3" onClick={clickOnPad}>
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            E
          </div>
          <div className="drum-pad" id="Heater-4" onClick={clickOnPad}>
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            A
          </div>
          <div className="drum-pad" id="Heater-6" onClick={clickOnPad}>
          <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
          S
          </div>
          <div className="drum-pad" id="Dsc-Oh" onClick={clickOnPad}>
          <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
          D</div>
          <div className="drum-pad" id="Kick-n-hat" onClick={clickOnPad}>
          <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
          Z</div>
          <div className="drum-pad" id="Kick" onClick={clickOnPad}>
          <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
          X</div>
          <div className="drum-pad" id="Cev-H2" onClick={clickOnPad}>
          <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
          C</div>
      </div>
    </div>
  )
}

export default App
