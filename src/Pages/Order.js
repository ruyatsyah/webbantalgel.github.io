import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Order = () => {
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
            <a href="#" className="text-[26px] font-light">
              Dashboard
            </a>
            <hr className="my-5" />
            <a href="#" className="text-[26px] text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
              Order
            </a>
            <hr className="my-5" />
            <a href="#" className="text-[26px] font-light">
              Address
            </a>
            <hr className="my-5" />
            <a
              href="#"
              className="text-[26px] font-light"
            >
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
          <h1 className="text-[26px] lg:pt-2 mb-6 text-[16px]">Payment Info</h1>
          <div className="w-full bg-slate-200 p-2 rounded-lg">
            <p className="text-[12px]">
              Kamu belum memilih metode pembayaran silahkan klik tombol dibawah
              untuk memilih metode pembayaran diinginkan
            </p>
          </div>

          <button className="p-2 bg-slate-500 mt-2 rounded-lg text-white text-[12px]">
            Pilih Metode pembayaran
          </button>
          <hr className="mt-2" />
          <h1 className="font-bold mt-2 text-[12px]">Detail Pesaan</h1>
          <hr className="mt-2" />
          <div className="flex">
            <div className="w-1/3 text-[12px] mt-2">
              <h1>Invoice</h1>
              <h1>Tanggal Order</h1>
              <h1>Status</h1>
              <h1>Tanggal Tagihan</h1>
            </div>
            <div className="w-2/3 text-[12px] mt-2">
              <h1>123455677</h1>
              <h1>21-08-2023 | 21:00</h1>
              <h1>Belum memilih pembayaran</h1>
              <h1>Rp. 300000</h1>
            </div>
          </div>
          <hr className="mt-2" />
          <hr className="mt-2" />
          <div>
            <h1 className="font-bold mt-2 text-[12px]">Alamat Pengiriman</h1>
          </div>
          <hr className="mt-2" />
          <div className="flex">
            <div className="w-1/3 text-[12px] mt-2">
              <h1>Nama</h1>
              <h1>Alamat</h1>
              <h1></h1>
              <h1>Telepon</h1>
            </div>
            <div className="w-2/3 text-[12px] mt-2">
              <h1>123455677</h1>
              <h1>21-08-2023 | 21:00</h1>
              <h1>Belum memilih pembayaran</h1>
              <h1>Rp. 300000</h1>
            </div>
          </div>
          <hr className="mt-2" />
          <hr className="mt-2" />
          <div className="flex justify-between">
            <div className="w-1/2 text-[12px] mt-2">
              <h1 className="font-bold">Produk Pesanan</h1>
              <h1>Bantal Gel xl</h1>
              <h1>Qty:1</h1>
              <h1>Rp. 300.000</h1>
            </div>
            <div className="w-1/2 text-[12px] mt-2">
              <h1 className="font-bold">Ringkasan Pembayaran</h1>
              <div className="flex">
                <div className="">
                  <h1>Jumlah Produk</h1>
                  <h1>Harga</h1>
                  <h1>Ongkos Kirim</h1>
                  <h1>Kode Unik</h1>
                  <h1>Total Belanja</h1>
                </div>
                <div className="ml-10">
                  <h1>1</h1>
                  <h1>:Rp.299.000</h1>
                  <h1>:Rp.54.000</h1>
                  <h1>:Rp.249</h1>
                  <h1>:Rp.353.249</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Order;
