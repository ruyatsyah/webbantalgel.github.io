import React from 'react'
import BenefitIcon from '../assets/img/benefit.png';
import Ring from '../assets/img/ring.png';

const Benefit = () => {
  return (
    <div className='bg-[#E1F2FA]'>
       <div className="container mx-auto px-[118px] pb-10 lg:pb-[143px]">
        <h1 className="text-[35px] py-3 lg:py-10 lg:text-[45px] font-medium text-center 2xl:text-[50px] lg:pt-[109px]">Benefit For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] ">You</span></h1>
        <p className="text-center ">Lorem ipsum dolor sit amet consectetur. Turpis venenatis tortor tortor <br/> gravida pretium pulvinar. Lacus urna nibh adipiscing erat non.</p>
            
            <div className='flex flex-1'>
                <div className='absolute left-5 mt-16 z-10 2xl:ml-48'>
                <img src={Ring} className='h-[140px] w-[133px] '/>
                </div>
                <div className='absolute mt-12 left-12 z-20 2xl:ml-48'><img src={Ring} className='h-[140px] w-[133px]'/>
                </div>
            </div>
           
        <div class="flex flex-wrap place-content-center">
            <div className='text-center '>
                <img src={BenefitIcon} className=' h-[84px] w-[px] mx-auto mb-2 mt-12'></img>
                <p>Lorem ipsum dolor sit amet <br/> consectetur. Turpis venenatis tortor <br/> tortor gravida pretium pulvinar.</p>
                <h1 className='text-[24px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] mt-3'>Premium Material</h1>
            </div>
            <div className='text-center lg:mx-auto'>
                <img src={BenefitIcon} className=' h-[84px] w-[px] mx-auto mb-2 mt-12'></img>
                <p>Lorem ipsum dolor sit amet <br/> consectetur. Turpis venenatis tortor <br/> tortor gravida pretium pulvinar.</p>
                <h1 className='text-[24px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] mt-3'>Best Quality</h1>
            </div>
            <div className='text-center '>
                <img src={BenefitIcon} className=' h-[84px] w-[px] mx-auto mb-2 mt-12'></img>
                <p>Lorem ipsum dolor sit amet <br/> consectetur. Turpis venenatis tortor <br/> tortor gravida pretium pulvinar.</p>
                <h1 className='text-[24px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] mt-3'>Low Price</h1>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Benefit
