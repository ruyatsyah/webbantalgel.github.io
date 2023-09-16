import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Address = () => {
  return (
    <div>
      <Navbar />
      <div className="flex px-10 flex-wrap lg:px-[118px] 2xl:container mx-auto">
        <div className="w-full lg:w-2/5 py-2 lg:pr-24">
          <div>
            <h1 className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
              My Account
            </h1>
            <hr className="my-5" />
            <a
              href="#"
              className="text-[26px] font-light"
            >
              Dashboard
            </a>
            <hr className="my-5" />
            <a href="#" className="text-[26px] text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
              Address
            </a>
            <hr className="my-5" />
            <a href="#" className="text-[26px] font-light">
              Account Detail
            </a>
            <hr className="my-5" />
            <a href="#" className="text-[26px] font-light">
              Logout
            </a>
            <hr className="my-5" />
          </div>
        </div>
        <div className="w-full lg:w-3/5 pb-10">
            <h1 className="text-[26px] lg:pt-2 mb-6">Billing & Shiping address</h1>
            <div className="flex justify-between">
                <input placeholder="Name"className="w-1/2 px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl mr-5"/>
                <input placeholder="Nomor Whatsapp" className="w-1/2 px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl"/>
            </div>
            <div className="flex justify-between mt-3">
                <input placeholder="Name"className="w-1/2 px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl mr-5"/>
                <input placeholder="Nomor Whatsapp" className="w-1/2 px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl"/>
            </div>
            <textarea className="w-full px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl mt-3 h-28" placeholder="Alamat"/>
            <div className="flex justify-between mt-3">
                <div className="w-1/2 px-2 bg-[#EFEFEF]/40 border rounded-xl mr-5">
                  <select placeholder="Kabupaten/Kota"className="w-full text-[#A4A4A4] bg-[#EFEFEF]/20 rounded-xl py-3">
                  <option value="kabupaten">Kabupaten/Kota</option>
                  </select>
                </div>
                <div className="w-1/2 bg-[#EFEFEF]/40 border rounded-xl px-2">
                  <select placeholder="Kabupaten/Kota"className="w-full text-[#A4A4A4] bg-[#EFEFEF]/20 rounded-xl py-3">
                  <option value="kecamatan">Kecamatan</option>
                  </select>
                </div>
                
            </div>
            <button className="w-full lg:w-1/3 py-3 lg:px-6 mt-3 bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] rounded-lg text-white">
                Save Address
            </button>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Address;
