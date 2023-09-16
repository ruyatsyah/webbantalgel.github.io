import React from "react";
import Sharelogo from "../assets/img/share.png";

const Deskripsi = () => {
  return (
    <div className="px-10 lg:px-[118px] 2xl:container mx-auto">
      <div>
        <div className="flex justify-between mt-8">
          <div>
            <h1 className="text-[20px] lg:text-[26px]">Deskripsi</h1>
          </div>
          <div className="flex px-3 py-2 border rounded-lg -mt-2">
            <button><img src={Sharelogo} className="mr-3 h-5 " /></button>
            <button><h1 className="-mt-1">Share</h1></button>
          </div>
        </div>
        <hr className="mt-2" />
        <p className="mt-2">
          Menggunakan bahan cotton 100% yang akan sangat lembut dan haluss tidak
          membuat panas dan gatalDetail ukuran naomi cardigan :P. Badan :
          50Lebar : 50P. Lengan : 74cm from center back
        </p>
      </div>
      <div>
        <div className="flex justify-between mt-5">
          <div>
            <h1 className="text-[20px] lg:text-[26px] ">How To Care</h1>
          </div>
        </div>
        <hr className="mt-2" />
        <ul className="list-disc ml-4 mt-2">
          <li>Et minim ex ut in ut occaecat anim eu.</li>
          <li>Et minim ex ut in ut occaecat anim eu.</li>
          <li>Et minim ex ut in ut occaecat anim eu.</li>
          <li>Et minim ex ut in ut occaecat anim eu.</li>
        </ul>
      </div>
      <div>
        <h1 className="text-[20px] lg:text-[26px] mt-3">Review Pelanggan</h1>
        <div class="grid grid-cols-1 gap-4 mt-3 mb-8">
          <div class="col-span-2">
            <div class="bg-slate-100 p-4 border rounded-t-lg">
                <h1>Berikan Rating</h1>
            </div>

            <div class=" p-4 rounded-b-lg border">
                <h1>Pilih Rating</h1>
                <input placeholder="Nama Lengkap" className="w-full p-2 mt-3 border rounded-lg"/>
                <textarea placeholder="Tulis Review" className="w-full mt-3 p-2 border rounded-lg"/>
                <button className="w-full lg:w-[147px] text-white p-[10px] mt-2 mb-1 bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] rounded-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deskripsi;
