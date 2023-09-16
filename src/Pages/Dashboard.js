import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const login = [
  {
    title:"Address",
    link: "/Address"
  }
]

const Login = () => {
  const Navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
}

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex px-10 flex-wrap lg:px-[118px] 2xl:container mx-auto">
        <div className="w-full lg:w-1/2 py-2 lg:pb-20 lg:pr-[180px]">
          <div>
            <h1 className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
              My Account
            </h1>
            <hr className="my-5" />
            <a href="#" className="text-[26px]  text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
              Dashboard
            </a>
            <hr className="my-5" />
            {login.map((link, index) => (
            <a onClick={() => Navigate('/Address')} key={index} href={link.link}  className="text-[26px] font-light">{link.title}</a>
            ))}
            <hr className="my-5" />
            <a href="#" className="text-[26px] font-light">Account Detail</a>
            <hr className="my-5" />
            <a href="#" className="text-[26px] font-light">Logout</a>
            <hr className="my-5" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 pb-10">
          <div className="lg:pt-2">
          <h1 className="text-[26px] font-light text-[#000000]">WELCOME BACK TO BANTALGEL</h1>
          <h1 className="py-5 text-[23px] font-normal">Hallo Saeful Apriana </h1>
          <p className="text-[26px] font-light text-[#000000]">
            From your account dashboard you can view your recent orders, manage
            yout shipping and billing addresses, and edit your password and
            account details
          </p>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright/>
    </div>
  );
};

export default Dashboard;
