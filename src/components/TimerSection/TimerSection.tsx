import React from "react";
import { TimerSectionProps } from "../../types/types"; // import the type
import CountdownTimer from "./CountdownTimer";
import Tabs from "./Tabs";

const TimerSection: React.FC<TimerSectionProps> = ({ timerSectionProps }) => {
  return (
    <div className="md:px-[380px]">
      {timerSectionProps.map((section, index) => (
        <div key={index}>
          <div className="text-center my-8 ">
            <h2 className="text-2xl font-bold ">{section.title}</h2>
          </div>
          <CountdownTimer targetDate={section.targetDate} />
          <div className="text-center my-9 space-y-2">
            <h2 className="text-2xl font-bold">
              এন্ট্রি ফি: {section.coin} কয়েন।
            </h2>
            <h2 className="text-lg font-bold">সময়: 10 সেকেন্ড।</h2>
            <h2 className="text-lg font-bold">
              কুইজ খেলার জন্য একটি বিভাগ নির্বাচন করুন।
            </h2>
          </div>
          <Tabs />
          <hr className="my-8" />
        </div>
      ))}
    </div>
  );
};

export default TimerSection;
