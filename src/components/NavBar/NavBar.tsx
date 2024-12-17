"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/gamebd-logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import footrlogo from "../../assets/gamebd-logo-transparent.png";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div className="  px-3 bg-black py-2 border-b-[3px] border-[#dc3545]">
            <div className="flex justify-between">
              <Image
                src={footrlogo}
                alt=""
                style={{ width: 200, height: 90 }}
              />
              <button onClick={() => handleOpen()}>
                <GiHamburgerMenu className="text-3xl text-white" />
              </button>
            </div>
            {isOpen && (
              <>
                <div className="text-white flex flex-col gap-4 font-bold text-sm pt-2">
                  <Link href="/">HOME</Link>
                  <Link href="/leaderboard">LEADERBOARD</Link>
                  <Link href="/buy-coin">BUY COIN</Link>
                  <Link href="/how-to-play">HOW TO PLAY</Link>
                  <Link href="/help">HELP</Link>
                  <Link href="/contact">CONTACT</Link>
                  <Link href="/login">LOG IN</Link>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center pt-2">
            <div className="w-[60%]">
              <Image src={logo} alt="" style={{ width: 200, height: 90 }} />
            </div>
          </div>
          <div className="bg-black flex justify-center border-b-[3px] border-[#dc3545] mt-2 ">
            <div className=" w-[60%] flex justify-start py-5 space-x-8  text-white font-bold ">
              <Link href="/">HOME</Link>
              <Link href="/leaderboard">LEADERBOARD</Link>
              <Link href="/buy-coin">BUY COIN</Link>
              <Link href="/how-to-play">HOW TO PLAY</Link>
              <Link href="/help">HELP</Link>
              <Link href="/contact">CONTACT</Link>
              <Link href="/login">LOG IN</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
