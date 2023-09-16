import React from "react";
import PeopleHome from "../assets/img/photo-home.png";
import Youtube from "../assets/img/youtube.png";
import Ring from "../assets/img/ring.png";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap px-5 lg:px-[118px]">
        <div className="lg:basis-1/2">
          <h1 className="font-medium text-[35px] lg:mt-[53px] lg:text-[45px] 2xl:text-[50px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] ">
              Bantal gel </span>
            adalah solusi masalah pinggang dan tulang belakang.
          </h1>
          <p className="mt-8 font-normal sm:text-[17px] lg:text-[24px]">
            Lorem ipsum dolor sit amet consectetur ipsumconsectetur ipsum dolor
            sit amet.
          </p>
        </div>
        <div className="bsis-1/2">
          <div className="absolute lg:right-[25px] 2xl:mr-36 z-20">
            <img className="lg:w-[580px] lg:h-[533px]" src={PeopleHome} />
          </div>
          <div className="absolute mt-60 lg:absolute lg:-bottom-16 lg:right-96 lg:-mr-16 z-40 2xl:top-52 2xl:mr-16">
            <button>
              <img className="lg:w-[300px] lg:h-[200px]" src={Youtube} />
            </button>
          </div>
        </div>
        <div className="flex flex-1 pt-[389px]">
          <div className="absolute left-5 mt-16 z-10 2xl:ml-48">
            <img src={Ring} className="h-[140px] w-[133px] " />
          </div>
          <div className="absolute mt-12 left-12 z-20 2xl:ml-48">
            <img src={Ring} className="h-[140px] w-[133px]" />
          </div>
        </div>
      </div>
      <div className="mx-10 text-center lg:text-start lg:ml-[118px] -mt-9 2xl:py-10">
        <button className="w-full lg:w-[147px] mt-8 px-6 mb-5 py-[10px] bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] rounded-lg text-white">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Hero;
