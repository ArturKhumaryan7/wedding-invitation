import { useEffect, useState } from "react";


export const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const drawDate = new Date("2024-10-13 00:00:00").getTime();

  const timeBetween = drawDate - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const showSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const showMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const showHours = hours < 10 ? `0${hours}` : hours;

  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <div className="single-countdown-item-1">
        <span className="number-countdown">{days}</span>
        <span className="title-countdown">Օր</span>
      </div>
      <div className="single-countdown-item">
        <span className="number-countdown">{showHours}</span>
        <span className="title-countdown">Ժամ</span>
      </div>
      <div className="single-countdown-item">
        <span className="number-countdown">{showMinutes}</span>
        <span className="title-countdown">Րոպե</span>
      </div>
      <div className="single-countdown-item">
        <span className="number-countdown">{showSeconds}</span>
        <span className="title-countdown">Վայրկյան</span>
      </div>
    </div>
  );
};
