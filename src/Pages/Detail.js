import React, { Fragment, useState } from "react";
import Checkoutimage from "../assets/img/checkout.png";
import Bca from "../assets/img/BCA.png";
import Midtrans from "../assets/img/midtrans.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Modal from "../components/Modal";

const Detail = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <Navbar />
      <Fragment>
      <div className=" bg-[#A4A4A4]/5 pb-3">
      <div className="px-5 lg:px-[118px] 2xl:container mx-auto">
        <div className="w-full pt-3">
          <div className="flex rounded-xl bg-white drop-shadow-sm">
            <div className="p-3">
              <img src={Checkoutimage} className="h-32 rounded-xl"></img>
            </div>
            <div className="ml-3 mt-1">
              <h1 className="text-[25px] font-medium">Bantal Gel</h1>
              <h1 className="text-[25px] text-[#A4A4A4]">
                AL SIZE -300 gr | Qty : 2
              </h1>
              <h1 className="text-[25px] mt-4 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
                Rp. 29.000{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className=" mt-3">
          <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2 pr-1.5">
              <div className="rounded-xl bg-white drop-shadow-sm">
                <div className="w-full  px-5 pt-3">
                  <h1 className="text-[#A4A4A4]">Name</h1>
                  <input
                    placeholder="Name"
                    className="w-full p-2 mt-1 border rounded-xl bg-[#EFEFEF]/20"
                  />
                </div>
                <div className="w-full  px-5 pt-3  ">
                  <h1 className="text-[#A4A4A4]">No Whatsapp</h1>
                  <input
                    placeholder="No Whatsapp"
                    className="w-full p-2 mt-1 border rounded-xl bg-[#EFEFEF]/20"
                  />
                </div>
                <div className="w-full  px-5 pt-3  ">
                  <h1 className="text-[#A4A4A4]">Kode Pos</h1>
                  <input
                    placeholder="Kode Pos"
                    className="w-full p-2 mt-1 border rounded-xl bg-[#EFEFEF]/20"
                  />
                </div>
                <div className="w-full  px-5 pt-3  ">
                  <h1 className="text-[#A4A4A4]">Kabupaten</h1>
                  <input
                    placeholder="Kabupaten"
                    className="w-full p-2 mt-1 border rounded-xl bg-[#EFEFEF]/20"
                  />
                </div>
                <div className="w-full  px-5 pt-3  ">
                  <h1 className="text-[#A4A4A4]">Kecamatan</h1>
                  <input
                    placeholder="Kecamatan"
                    className="w-full p-2 mt-1 border rounded-xl bg-[#EFEFEF]/20"
                  />
                </div>
                <div className="w-full  px-5 pt-3 pb-5">
                  <label className="text-[#A4A4A4]">Pilih Kurir:</label>
                  <div className="mt-1 px-2 border rounded-xl bg-[#EFEFEF]/40">
                  <select className="w-full p-2 bg-[#EFEFEF]/20">
                    <option className="text-[#A4A4A4]">J&T Express</option>
                  </select>

                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pl-1.5">
              <div className="rounded-xl bg-white drop-shadow-sm mt-3 lg:mt-0">
                <div className="w-full  px-5 pt-3">
                  <h1 className="text-[#A4A4A4]">Pilih Metode Pembayaran</h1>
                  <div className="flex pt-2 pb-6">
                    <button>
                    <img
                      src={Bca}
                      className="mr-2 px-6 py-3 border rounded-lg drop-shadow-md"
                    />
                    </button>
                    <button className="border py-3 px-4 rounded-lg drop-shadow-md">
                    <img src={Midtrans} className="h-4" />
                    </button>
                  </div>
                </div>
                </div>
                <div className="rounded-xl bg-white drop-shadow-sm mt-3 lg:mt-3">
                <div className="w-full  px-5 pt-3 pb-3">
                  <div className="flex justify-between ">
                    <h1>Sub Total</h1>
                    <h1>Rp. 29.000</h1>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h1>Biaya Ongkir</h1>
                    <h1>Rp. 8.000</h1>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h1>Potongan</h1>
                    <h1>Rp. 29.000</h1>
                  </div>
                  <hr className="mt-1"/>
                  <div className="flex justify-between mt-2 font-bold">
                    <h1 >Total</h1>
                    <h1>Rp. 29.000</h1>
                  </div>
                </div>
              </div>
                <button 
                 type="button" className="w-full lg:w-full mt-3 py-[10px] bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] rounded-lg text-white"
                 onClick={() => setShowModal(true)}>
                  Pesan Sekarang
                </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Modal isVisible={showModal} onClose={()=> setShowModal(false)}/>
      </Fragment>
      <Footer/>
      <Copyright/>
    </div>
  );
};

export default Detail;
