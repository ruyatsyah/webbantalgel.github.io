import React from 'react'
import BgGel from '../assets/img/gel_bg.png';
import BgGelRight from '../assets/img/gel_bg_right.png';

const Testimonial = () => {
  return (
    <div className='bg-[#F8F8F8]'>
        <div className='container mx-auto'>

        <div className='px-10 grid grid-col-1 place-items-center'> 
            <div>
            <h1 className='text-[25px] pt-10 lg:text-[30px] font-medium  2xl:text-[50px] lg:pt-[109px]'><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] '>300+</span> users have experienced the <br/> good effect </h1>
            <p className='mt-[16px]'>Lorem ipsum dolor sit amet consectetur. Turpis venenatis tortor <br/> tortor gravida pretium pulvinar.</p>
        <div>
            <img src={BgGel} className='hidden absolute -left-2 -mt-52 -z-5 lg:w-[340px] lg:h-[340px] lg:-mt-16 lg:block  2xl:w-[440px] 2xl:h-[440px] lg:-z-5 2xl:ml-0 2xl:-mt-52 2xl:-z-5'></img>
        </div>
            </div>
        </div>
        <div>
            <img src={BgGelRight} className='absolute mt-96 right-0 -mt-52 -z-5 lg:w-[600px] lg:h-[539.11px] lg:-mt-16  2xl:w-[440px] 2xl:h-[440px] 2xl:h-[939.11px] 2xl:w-[734.4px] 2xl:-mt-64'></img>
        </div>
    <div className="flex flex-wrap lg:flex-nowrap gap-4 pb-[36px] px-10 lg:px-[118px] mt-12 ">
        <div className='px-12 py-8 bg-gradient-to-r from-[#D8F0FE] to-[#B1FCFF] rounded-lg drop-shadow-lg lg:basis-1/3'>
            <h1 className='text-[80px] -mt-3 font-normal font-serif -mt-auto'>“</h1>
            <p className='-mt-16'>Lorem ipsum dolor sit amet consectetur. Turpis venenatis tortor tortor gravida pretium pulvinar. Lacus urna nibh adipiscing erat non.</p>
            <h1 className='text-[24px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] mt-3'>Saiful Apriana</h1>
        </div>
        <div className='px-12 py-8 bg-white rounded-lg drop-shadow-lg lg:basis-1/3'>
            <h1 className='text-[80px] -mt-3 font-normal font-serif'>“</h1>
            <p className='-mt-16'>Lorem ipsum dolor sit amet consectetur. Turpis venenatis tortor tortor gravida pretium pulvinar. Lacus urna nibh adipiscing erat non.</p>
            <h1 className='text-[24px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] mt-3'>Saiful Apriana</h1>
        </div>
        <div className='px-12 py-8 bg-white rounded-lg drop-shadow-lg lg:basis-1/3'>
            <h1 className='text-[80px] -mt-3 font-normal font-serif'>“</h1>
            <p className='-mt-16'>Lorem ipsum dolor sit amet consectetur. Turpis venenatis tortor tortor gravida pretium pulvinar. Lacus urna nibh adipiscing erat non.</p>
            <h1 className='text-[24px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] mt-3'>Saiful Apriana</h1>
        </div>
       
    </div>
        </div>
    </div>
  )
}

export default Testimonial
