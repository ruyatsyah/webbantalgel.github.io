import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

const AccountDetail = () => {
  return (
    <div>
      <Navbar/>
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
            <a href="#" className="text-[26px] font-light">
              Address
            </a>
            <hr className="my-5" />
            <a href="#" className="text-[26px] text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">
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
            <h1 className="text-[26px] lg:pt-2 mb-6">Account Detail & Password</h1>
           
            <div className="flex justify-between mt-3">
                <div className='w-1/2 mr-5'>
                <h1 className='text-[#A4A4A4] mb-2'>Name</h1>
                <input  className="w-full px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl mr-5"/>
                </div>
                <div className='w-1/2'>
                <h1 className='text-[#A4A4A4] mb-2'>Username</h1>
                <input className="w-full px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl"/>
                </div>
            </div>
            <div className="flex justify-between mt-3">
                <div className='w-1/2 mr-5'>
                <h1 className='text-[#A4A4A4] mb-2'>Email</h1>
                <input className="w-full px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl mr-5"/>
                </div>
                <div className='w-1/2'>
                <h1 className='text-[#A4A4A4] mb-2'>Nomor Whatsapp</h1>
                <input className="w-full px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl"/>
                </div>
            </div>
            <div className="flex justify-between mt-3">
                <div className='w-1/2 mr-5'>
                <h1 className='text-[#A4A4A4] mb-2'>Password Lama</h1>
                <input className="w-full px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl mr-5"/>
                <p className='text-[#A4A4A4] text-[10px] mt-1'>Kosongkan Jika Tidak ingin Mengubah Password</p>
                </div>
                <div className='w-1/2'>
                <h1 className='text-[#A4A4A4] mb-2'>Password Baru</h1>
                <input className="w-full px-3 py-3 bg-[#EFEFEF]/20 border rounded-xl"/>
                <p className='text-[#A4A4A4] text-[10px] mt-1'>Kosongkan Jika Tidak ingin Mengubah Password</p>
                </div>
            </div>
            <button className="w-full lg:w-1/3 py-3 lg:px-6 mt-3 bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] rounded-lg text-white">
                Save Changes
            </button>
        </div>
      </div>
      <Footer/>
      <Copyright />
    </div>
  )
}

export default AccountDetail
