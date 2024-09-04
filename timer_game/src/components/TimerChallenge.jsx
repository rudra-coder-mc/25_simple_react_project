import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [remaingTime, setRemaingTime] = useState(targetTime * 1000);

  const timerIsActive = remaingTime > 0 && remaingTime < targetTime * 1000;

  if (remaingTime <= 0) {
    clearInterval(timer.current);
    setRemaingTime(targetTime * 1000);
    dialog.current.showModal();
  }
  function handleReset() {
    setRemaingTime(targetTime * 1000);
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setRemaingTime((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    console.log("stop");
    dialog.current.showModal();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remaingTime={remaingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {/* Time is running... / Timer inactive */}
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
