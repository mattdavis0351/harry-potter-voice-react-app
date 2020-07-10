import React from "react";
import "./App.css";

import { SpeechButton } from "./components/SpeechButton";
import { AudioButton } from "./components/AudioButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpeechButton say="You clicked the button" />
        <AudioButton
          elId="one"
          audioSrc="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
        />
      </header>
    </div>
  );
}

export default App;
