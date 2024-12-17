"use client";
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO 8601 format or valid date string
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate: string): TimeLeft {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  }

  const renderCircle = (value: number, max: number, label: string) => {
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / max) * circumference;

    return (
        <div style={{ textAlign: "center", margin: "0 5px" }}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60" // Adjusted to minimize padding
          >
            <circle
              cx="30"
              cy="30"
              r={radius}
              stroke="#ffbfca"
              fill="transparent"
              strokeWidth="5"
            />
            <circle
              cx="30"
              cy="30"
              r={radius}
              stroke="#ff69b4"
              fill="transparent"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.5s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy="0.3em"
              fontSize="18" // Reduced font size
            fontWeight="700"
              fill="#ff69b4"
            >
              {value}
            </text>
          </svg>
          <p style={{ fontSize: "12px", color: "#ff0080", fontWeight: "400" }}>
            {label}
          </p>
        </div>
      );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", }}>
      {renderCircle(timeLeft.days, 30, "Days")}
      {renderCircle(timeLeft.hours, 24, "Hours")}
      {renderCircle(timeLeft.minutes, 60, "Minutes")}
      {renderCircle(timeLeft.seconds, 60, "Seconds")}
    </div>
  );
};

export default CountdownTimer;
