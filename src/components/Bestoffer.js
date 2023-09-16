import React from "react";
import Bestimg from "../assets/img/bestoffer.png";
import Rectangle from "../assets/img/rectangle.png";
import Best from "../assets/img/best1.png";
import Best2 from "../assets/img/best-2.png";
import Best3 from "../assets/img/best-3.png";

const Bestoffer = () => {
  return (
    <div className="container mx-auto">
      <div className="px-10 lg:px-[118px] my-10 ">
        <h1 className=" text-center text-[30px] font-medium mb-16 lg:mb-6 lg:-mr-28">
          Best{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
            Offer
          </span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 ">
            <img
              src={Best2}
              className="absolute -z-20 -mt-96 left-0 lg:-mt-20 lg:z-20 2xl:w-[189.76px] 2xl:h-[182.74px]"
            />
            <img
              src={Best}
              className="absolute ml-[200px] w-[117px] h-[103px] rounded-xl -mt-16 lg:w-[217px] lg:h-[203px] lg:rounded-[50px] lg:ml-[240px] lg:-mt-5 z-10 2xl:ml-72"
            />
            <div className="flex justify-center items-center">
              <img
                src={Bestimg}
                className="w-[300px] h-[280px] lg:w-[432px] lg:h-[403px] rounded-[50px] lg:mt-24"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="flex">
              <div className="flex w-full font-medium py-2 justify-center lg:w-[261px] lg:text-[25px] lg:py-4 mt-10 bg-[#E1F2FA] rounded-lg lg:mt-0">
                <h1 className="text-[#969696] mr-3 line-through">Rp 50.000</h1>
                <h1>Rp 29.000</h1>
              </div>
            </div>
            <div>
              <h1 className="text-[25px] font-medium py-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
                  300+
                </span>{" "}
                users have experienced the good effects.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Turpis venenatis tortor
                tortor gravida pretium pulvinar.
              </p>
            </div>
            <div className="flex mt-5">
              <img src={Rectangle} className="mr-5 h-5 w-5" />
              <p className="-mt-1">
                Lorem ipsum dolor sit amet consectetur. Turpis venenatis tortor
                .
              </p>
            </div>
            <div className="flex mt-5">
              <img src={Rectangle} className="mr-5 h-5 w-5" />
              <p className="-mt-1">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex mt-5">
              <img src={Rectangle} className="mr-5 h-5 w-5" />
              <p className="-mt-1">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex mt-5">
              <img src={Rectangle} className="mr-5 h-5 w-5" />
              <p className="-mt-1">
                Lorem ipsum dolor sit amet consectetur turpis .
              </p>
            </div>
            <button className="w-full lg:w-[147px] mt-8 px-6 mb-5 py-[10px] bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] rounded-lg text-white">
              Checkout
            </button>
            <img
              src={Best3}
              className="absolute right-0 -z-30 -mt-96 lg:z-30 lg:-mt-56 2xl:w-[225px] 2xl:h-[358px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestoffer;
