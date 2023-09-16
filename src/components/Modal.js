import React from 'react'
import Bca from "../assets/img/BCA.png";
import Midtrans from "../assets/img/midtrans.png";
import Permatabank from "../assets/img/permatabank.png";
import Bi from "../assets/img/bankindonesia.png";
import Mandiri from "../assets/img/mandiri.png";
import Visa from "../assets/img/visa.png";
import Mastercard from "../assets/img/master.png";
import Jbcbank from "../assets/img/jbcbank.png";
import Qris from "../assets/img/qris.png";
import Gopay from "../assets/img/gopay.png";
import Ovo from "../assets/img/ovologo.png";
import Linkaja from "../assets/img/linkaja.png";
import Dana from "../assets/img/dana.png";

const Modal = ({isVisible, onClose}) => {
    if ( !isVisible ) return null;
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-black bg-opacity-25 '>
        <div className='px-5 w-full lg:w-1/3'>
            <div className=' bg-slate-100 py-5 rounded-lg'>
            <div className=' px-5'>
                <div className='flex justify-between'>
                <h1 className='text-[12px] font-medium'>Total</h1>
                <h1 className='text-[12px]'>pilih dalam: 23:59:29</h1>
                </div>
                <div>
                    <div className='flex justify-between'>
                    <h1 className='text-[25px] font-medium -mt-2'>Rp. 300.000</h1>
                    <a href='#' className='text-[12px] font-medium'>Detail Pesanan</a>
                    </div>
                    <h1 className='text-[10px] font-medium mb-3'>Order ID #12345698</h1>
                </div>
                </div>
                <div className='bg-white px-5 pt-3'>
                <h1 className='text-[#A4A4A4] font-medium'>Semua Metode Pembayaran</h1>
               <div>
               <h1 className='mt-3'>Virtual Account</h1>
                <div className='flex mt-2'>
                    <div className='flex justify-between'>
                        <button className='mr-5 py-2 mr-3'>
                            <img src={Bca} className='h-3'/>
                        </button>
                        <button className=' px-1 py-2 mr-3'>
                            <img src={Mandiri} className='h-4 -mt-1.5'/>
                        </button>
                        <button className=' px-2 py-2'>
                            <img src={Permatabank} className='h-5 -mt-2.5'/>
                        </button>
                        <button className=' px-2 py-2'>
                            <img src={Bi} className='h-5 -mt-1'/>
                        </button>
                    </div>
                </div>
                <hr/>
                <h1 className='mt-1'>Kartu Kredit/debit</h1>
                <div className='flex mt-3'>
                    <button className='mr-2'>
                    <img src={Visa} className='h-3'/>
                    </button>
                    <div className='px-2 '>
                    <img src={Mastercard} className='h-4 mt-1'/>
                    </div>
                    <div className='px-2 '>
                    <img src={Jbcbank} className='h-5'/>
                    </div>
                </div>
                <hr className='mt-2'/>
                <h1 className='mt-2'>Gopay</h1>
                <div className='flex mt-3'>
                    <div className='mr-3 py-2'>
                    <img src={Gopay} className='h-6'/>
                    </div>
                    <div className='px-1 py-2'>
                    <img src={Qris} className='h-3 mt-2'/>
                    </div>
                </div>
                <hr/>
                <h1 className='mt-2'>Qris</h1>
                <div className='flex mt-3'>
                    <div className='py-2 mr-3'>
                    <img src={Qris} className='h-3'/>
                    </div>
                    <div className='py-2 mr-3'>
                    <img src={Dana} className='h-3'/>
                    </div>
                    <div className='py-2 mr-3'>
                    <img src={Ovo} className='h-3'/>
                    </div>
                    <div className='px-2 py-2'>
                    <img src={Linkaja} className='h-5 -mt-1'/>
                    </div>
                </div>
               </div>
                <hr/>
                <div className='mt-8'>
                <select dir="rtl">
                    <option>ID</option>
                    <option>Eglish</option>
                </select>
                </div>
                <button onClick={() => onClose()}>close</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Modal
