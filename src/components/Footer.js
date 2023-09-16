import React from "react";
import Iglogo from "../assets/img/skill-icons_instagram.png";
import Fblogo from "../assets/img/logos_facebook.png";
import Shoppeelogo from "../assets/img/shophee.png";
import Phoneicon from "../assets/img/phone-call.png";
import Mail from "../assets/img/mail.png";
import Midtrans from "../assets/img/midtrans.png";
import Ring from "../assets/img/ring.png";

const Footer = () => {
  return (
    <div className="px-10 lg:px-[118px] py-20 bg-gradient-to-r from-[#E1F2FA] via-[#E1F2FA] to-[#D9D9D9]-50 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-28">
          <di className="">
            <h1 className="text-[25px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] ">
              News Latter
            </h1>
            <div className="flex my-5">
              <input
                className="px-4 py-2 drop-shadow-sm w-[165px]"
                placeholder="Your Email"
              />
              <button className="px-2 py-2 bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] text-white drop-shadow-sm">
                Subscribe
              </button>
            </div>
            <h1 className="text-[25px] font-medium mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] ">
              Social Media
            </h1>
            <div className="flex">
              <img src={Iglogo} className="" />
              <img src={Fblogo} className="px-5" />
              <img src={Shoppeelogo} className="" />
            </div>
          </di>
          <div className="">
            <h1 className="text-[25px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
              Information
            </h1>
            <div className="text-[18px] font-medium">
              <a>
                <h1 className="mt-4 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
                  Beranda
                </h1>
              </a>
              <a>
                <h1>Product</h1>
              </a>
              <a>
                <h1>Testimoni</h1>
              </a>
              <a>
                <h1>Contact</h1>
              </a>
            </div>
          </div>
          <div className="">
            <h1 className="text-[25px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] ">
              Help
            </h1>
            <h1 className="mt-4 font-medium">Contact Us</h1>
            <div className="flex mt-3">
              <img src={Phoneicon} />
              <h1 className="ml-3 font-medium">+6286241652713</h1>
            </div>
            <div className="flex mt-3">
              <img src={Mail} />
              <h1 className="ml-3 font-medium">bantalgel@gmail.com</h1>
            </div>
          </div>
          <div className=" ">
            <h1 className="text-[25px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
              Payment
            </h1>
            <div className="mt-5 px-4 py-2 border w-32 rounded-lg">
            <img src={Midtrans} className="h-4" />
            </div>
          </div>
        </div>
        <img src={Ring} className="absolute right-12 -mt-20 w-48 2xl:mr-32" />
        <img src={Ring} className="absolute right-2 -mt-24 w-48 2xl:mr-32" />
      </div>
    </div>
  );
};

export default Footer;
