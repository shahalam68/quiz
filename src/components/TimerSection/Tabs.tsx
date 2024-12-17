import React from "react";

const Tabs = () => {
  const tabsItem = [
    "বাংলাদেশ",
    "আন্তর্জাতিক বিষয়াবলি",
    "গণিত",
    "খেলাধুলা",
    "সাধারণ জ্ঞান",
    "ইতিহাস",
  ];

  return (
    <>
      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center items-center gap-2 px-2 sm:gap-[6px]">
        {tabsItem.map((item, index) => (
          <div
            key={index}
            className="text-white px-4 md:px-7 md:py-4 py-2 font-bold text-xs sm:text-sm bg-[#d32535] rounded-sm text-center"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Leaderboard Button */}
      <div className="flex justify-center mt-4 px-4">
        <button className="bg-[#28a745] text-white py-2 md:py-2    md:px-20 rounded-md text-sm sm:text-lg w-full max-w-[300px]">
          Leaderboard
        </button>
      </div>
    </>
  );
};

export default Tabs;
