"use client";
import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

// import { Button } from "./Styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
//   console.log(visible);

  return (
    <button
    className={`px-3 py-2 rounded ${visible ? "inline-block" : "hidden"} bg-[rgba(41,41,49,0.9)] hover:bg-[#dc3545]`}
    >
    
      <IoIosArrowUp className="text-white text-xl" onClick={scrollToTop} />
    </button>
  );
};

export default ScrollButton;
