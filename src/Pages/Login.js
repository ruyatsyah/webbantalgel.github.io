import React from "react";
import Navbar from "../components/Navbar";
import Gellogin from "../assets/img/gel-login.png";
import GoogleLogo from "../assets/img/googlelogo.png";
import ArrowLeft from "../assets/img/arrow-left.png";
import ArrowRight from "../assets/img/arrow-right.png";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const login = [
  {
    title:"Sign In",
    link: "/Dashboard"
  }
]

const Login = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <img src={Gellogin} className="absolute w-full lg:-mt-[100px] 2xl:-mt-[100px] -z-10 lg:w-1/2 lg:max-h-full" />
          <div className="w-full mt-80 lg:mt-36 text-white">

          <h1 className="text-[35px] px-10 font-medium lg:ml-[118px] lg:px-0 mr-16 2xl:text-[45px] 2xl:mt-[460px] 2xl:pl-[118px]"><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">Bantal gel </span> adalah solusi masalah pinggang dan tulang belakang.</h1>
          <p className="text-[18px] px-10  font-medium lg:ml-[118px] lg:px-0 mr-16 2xl:pl-[118px]">We are always ready to help you on vacation throughout Indonesia</p>
          <div className="flex justify-center lg:justify-start lg:ml-[118px] mt-5 lg:mt-10 2xl:pl-[118px]"> 
            <button><img src={ArrowLeft} className="mr-5"/></button>
            <button><img src={ArrowRight}/></button>
          </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:mt-4 2xl:pr-[118px]">
          <h1 className="text-center mt-20 lg:-mt-5 text-[25px] 2xl:text-[40px] font-semibold 2xl:mt-20">
            Hello Again!
          </h1>
          <p className="text-center mt-5 text-[#A4A4A4] lg:mt-5 2xl:mt-8">
            Welcome back! please register to be <br /> able to access all
            features
          </p>
          <div className="px-10 lg:px-28 2xl:px-48">
          
            <div className="mt-5 2xl:mt-5">
              <input
                placeholder="Email"
                className="w-full py-2 2xl:py-3 px-4 rounded-lg bg-[#EFEFEF]/20 border"
              />
            </div>
            <div className="mt-3 lg:mt-5 2xl:mt-5">
              <input
                placeholder="Password"
                className="w-full py-2 2xl:py-3 px-4 rounded-lg bg-[#EFEFEF]/20 border"
              />
            </div>
            
            <div className="flex text-sm justify-between text-[#A4A4A4] mt-3 px-5">
            <div className="flex">
            <input type="checkbox" className="mr-3" /><p>Remember Me</p>
            </div>
              <a href="#" className="text-[#3F96DC]">
                Forget Password
              </a>
            </div>
            {login.map((link, index) => (
            <button onClick={() => navigate('/Dashboard')} key={index} href={link.link}   className="w-full mt-6 lg:mt-8 text-center text-white font-medium py-2 2xl:py-3 bg-gradient-to-r from-[#3092DD] to-[#40F8FF] rounded-lg">
              {link.title}
            </button>
            ))}
            <div className="mt-2 lg:mt-5 2xl:mt-5">
              <button className="flex justify-center mt-4 w-full py-2 2xl:py-2 px-4 rounded-lg bg-[#EFEFEF]/20 border">
                <img src={GoogleLogo} className="h-6 2xl:h-8 2xl:w-8 mr-3" />
                <h1 className=" text-[#A4A4A4]">Sign Up With Google</h1>
              </button>
            </div>
            <p className="text-[#A4A4A4] py-5 lg:py-3 text-center lg:mt-10 2xl:mt-60">Already have an Account? <a href="#" className="text-[#3F96DC]">Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
