import React from 'react'
import Navbar from '../components/Navbar';
import Iconminus from '../assets/img/minus.png';
import Iconplus from '../assets/img/plus.png';
import Checkoutimage from "../assets/img/checkout.png";
import Checkout2 from "../assets/img/galery-checkout.png";
import Deskripsi from '../components/Deskripsi';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';


const Checkout = () => {
  return (
      <div>
        <Navbar/>
        <div className='flex flex-wrap lg:px-[118px] place-content-start 2xl:container mx-auto'>
        <div className='w-full lg:w-1/2 lg:place-content-start'>   
            <div className='px-10 lg:pr-10 lg:px-0'>
            <img src={Checkoutimage} className='w-full rounded-lg border'/>
            </div>
            <div className='flex place-content-start px-10 lg:px-0'>
                <button><img src={Checkout2} className='w-[77px] h-[81px] border mt-5 rounded-lg'/></button>
                <button><img src={Checkout2} className='w-[77px] h-[81px] border mt-5 rounded-lg mx-3'/></button>
                <button><img src={Checkout2} className='w-[77px] h-[81px] border mt-5 rounded-lg'/></button>
            </div>
        </div>
        <div className='w-full lg:w-1/2 px-10 mt-10'>
            <h1 className='text-[26px] font-medium'>Bantal Gel</h1>
           <div className='flex'>
            <h1 className='text-[25px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]'>Rp.29.000</h1>
            <h1 className='text-[25px] mx-5 font-medium line-through text-[#969696]'>Rp.29.000</h1>
            <h1 className='text-[16px] font-medium py-1 px-3 text-white bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]'>30%</h1>
           </div>
           <h1 className='text-[26px] mt-5 lg:mt-8'>Jumlah</h1>
           <div>
            <button><img src={Iconminus} className='mt-3 -mb-3 py-2 px-2 bg-[#EAEAEA] rounded-l-lg'/></button>
            <input  className=' w-12 px-2 py-3 rounded-lg border -mt-2'/>
            <button><img src={Iconplus} className=' py-2 px-2 -mb-3 bg-[#EAEAEA] rounded-r-lg'/></button>
           </div>
           <div className="text-center lg:text-start 2xl:py-10">
            <button className="w-full lg:w-[147px] mt-8 px-6 mb-5 py-[10px] bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] rounded-lg text-white">
                Pesan
            </button>
            <div>
                <h1 className='text-[10px] font-medium'>Bantalgel | Berat : 300 gr | Stok 200</h1>
            </div>
           </div>
        </div>
      </div>
      <Deskripsi/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Checkout
