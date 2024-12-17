"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  // Function to toggle button visibility based on scroll position
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  // Attach the scroll event listener on mount and clean it up on unmount
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      // Cleanup event listener
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`px-3 py-2 rounded ${visible ? "inline-block" : "hidden"} bg-[rgba(41,41,49,0.9)] hover:bg-[#dc3545]`}
    >
      <IoIosArrowUp className="text-white text-xl" />
    </button>
  );
};

export default ScrollButton;
