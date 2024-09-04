import React, { forwardRef, useRef } from "react";

const ResultModal = ({ targetTime, remaingTime, onReset }, ref) => {
  // const dialog = useRef();

  const userLost = remaingTime <= 0;
  const formattedRemainingTime = (remaingTime / 1000).toFixed(2);
  const score = Math.round((1 - remaingTime / (targetTime * 1000)) * 100);

  return (
    <>
      <dialog ref={ref} className="result-modal">
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>
          the target time was <span>{targetTime} seconds.</span>
        </p>
        <p>
          You stopped the timer with{" "}
          <span>{formattedRemainingTime} seconds left.</span>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
      {/* <h1>{result}</h1> */}
    </>
  );
};

export default forwardRef(ResultModal);
