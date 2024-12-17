import React from "react";
import footrlogo from "../../assets/gamebd-logo-transparent.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaRss } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="py-16 bg-black flex flex-col justify-center items-center gap-3 ">
      <Image src={footrlogo} alt="Footer Logo" width={200} height={90} />
      <h2 className="text-[#666] font-normal">Play to Win.</h2>
      <div className="flex justify-center gap-2">
        <div className="p-[10px] bg-[#111]  rounded-sm">
          <FaFacebookF className="text-base text-white  " />
        </div>
        <div className="p-[10px] bg-[#111]  hover:bg:[#dc3545] rounded-sm">
          <FaTwitter className="text-base text-white  " />
        </div>
        <div className="p-[10px] bg-[#111] hover:bg:[#dc3545] rounded-sm">
          <FaLinkedinIn className="text-base text-white  " />
        </div>
        <div className="p-[10px] bg-[#111] hover:bg:[#dc3545] rounded-sm">
          <FaPinterest className="text-base text-white  " />
        </div>
        <div className="p-[10px] bg-[#111] hover:bg:[#dc3545] rounded-sm">
          <FaRss className="text-base text-white  " />
        </div>
        <div className="p-[10px] bg-[#111] hover:bg:[#dc3545] rounded-sm">
          <FaYoutube className="text-base text-white  " />
        </div>
      </div>
      <h2 className="text-[#666]">© All Copyright Reserved to -<span className="text-white text-xl"><Link href='/'> GameBD</Link></span></h2>
    </div>
  );
};

export default Footer;
{
  /* <FaFacebookF /> */
}
