import React, { useEffect, useRef, useState } from "react";

const Timer = ({ titlecolor, boxcolor, spancolor, color }) => {
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");
  const [days, setDays] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDate = new Date("May 22, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDate - now;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setSeconds(s);
        setMinutes(m);
        setHours(h);
        setDays(d);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {};
  }, []);

  return (
    <>
      <div className="timer">
        <h3 className="timer__title">
          <span style={{ color: titlecolor }}>Coming</span> 4 Nov 2020
        </h3>
        <div className="timer__content">
          <div
            style={{ backgroundColor: boxcolor }}
            className="timer__box days"
          >
            <h3 style={{ color: color }}>{days}</h3>
            <span style={{ color: spancolor }}>days</span>
          </div>
          <div
            style={{ backgroundColor: boxcolor }}
            className="timer__box hours"
          >
            <h3 style={{ color: color }}>{hours}</h3>
            <span style={{ color: spancolor }}>hours</span>
          </div>
          <div
            style={{ backgroundColor: boxcolor }}
            className="timer__box minutes"
          >
            <h3 style={{ color: color }}>{minutes}</h3>
            <span style={{ color: spancolor }}>min</span>
          </div>
          <div
            style={{ backgroundColor: boxcolor }}
            className="timer__box seconds"
          >
            <h3 style={{ color: color }}>{seconds}</h3>
            <span style={{ color: spancolor }}>sec</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
