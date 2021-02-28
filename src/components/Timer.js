import React from "react";

const Timer = () => {
  return (
    <>
      <div className="timer">
        <h3 className="timer__title">
          Coming <span>4 Nov 2020</span>
        </h3>
        <div className="timer__content row">
          <div className="timer__box days">
            <h3>47</h3>
            <span>days</span>
          </div>
          <div className="timer__box hours">
            <h3>07</h3>
            <span>hours</span>
          </div>
          <div className="timer__box minutes">
            <h3>56</h3>
            <span>min</span>
          </div>
          <div className="timer__box seconds">
            <h3>14</h3>
            <span>sec</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
