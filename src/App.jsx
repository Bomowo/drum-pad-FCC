

function App() {

  function pressKeyboard (e) {
    const audio = document.getElementById(e.key.toUpperCase());

    if(audio !== null ) {
      console.log(`playing ${e.key.toUpperCase()}`)
      audio.play()
    }

  }

  function clickOnPad (e) {
    const audio = e.target.children[0]
    audio.play();
  }

  return (
    <div id="drum-machine" className="drum-machine" onKeyDown={pressKeyboard} tabIndex='0'>
      <div className="drum-pad" onClick={clickOnPad}>
        <audio id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        Q</div>
        <div className="drum-pad" onClick={clickOnPad}>
        <audio id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        W</div>
        <div className="drum-pad" onClick={clickOnPad}>
        <audio id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        E</div>
        <div className="drum-pad" onClick={clickOnPad}>
        <audio id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        A</div>
        <div className="drum-pad" onClick={clickOnPad}>
        <audio id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        S</div>
        <div className="drum-pad" onClick={clickOnPad}>
        <audio id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
        D</div>
        <div className="drum-pad" onClick={clickOnPad}>
        <audio id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        Z</div>
        <div className="drum-pad" onClick={clickOnPad}>
        <audio id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        X</div>
        <div className="drum-pad" onClick={clickOnPad}>
        <audio id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
        C</div>

    </div>
  )
}

export default App
