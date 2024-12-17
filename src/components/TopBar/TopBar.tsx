import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";
import coin from "../../assets/gold-coin.png";

const TopBar = () => {
  return (
    <>
      <div className="bg-[#292931] pt-3 pb-5 ">
        <div className="md:w-[60%] lg:w-[60%] mx-auto flex flex-col md:flex-row lg:flex-row justify-start pl-3 space-y-3">
          <div className="w-1/2">
            <FaUser className="text-white md:text-4xl text-3xl" />
          </div>
          <div className="w-1/2 ">
            <Image
              className="md:-mt-5 "
              src={coin}
              alt="Gold Coin"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
