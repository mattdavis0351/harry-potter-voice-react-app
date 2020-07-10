import React from "react";

export function SpeechButton(props) {
  function handleClick(e) {
    e.preventDefault();
    const synth = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance(props.say);
    synth.speak(msg);
    console.log(e.target);
  }

  return <button onClick={handleClick}>I speak</button>;
}
