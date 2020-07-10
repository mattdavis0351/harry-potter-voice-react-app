import React from "react";

export function AudioButton(props) {
  function handleClick(e) {
    const audioEl = document.getElementById(props.elId);
    audioEl.play();
  }
  return (
    <div>
      <button onClick={handleClick}>I play a sound file</button>
      <audio id={props.elId}>
        <source src={props.audioSrc}></source>
      </audio>
    </div>
  );
}
