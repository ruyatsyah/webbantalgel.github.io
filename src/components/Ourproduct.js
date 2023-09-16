import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product1 from "../assets/img/product-1.png"
import Product2 from "../assets/img/product-2.png"
import Product3 from "../assets/img/product-3.png"

const Ourproduct = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
   <div className='bg-[#F8F8F8] py-10 lg:py-24'>
    <div className='container mx-auto'>

     <div className='text-center'>
      <h1 className='text-[35px] font-medium'>Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]'>Product</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur. Turpis venenatis tortor <br/> tortor gravida pretium pulvinar. Lacus urna nibh adipiscing erat non.</p>
    </div>
    <Carousel responsive={responsive} className='px-[118px] mt-10 h-[300px]'>
        <div className='card w-[239px] h-[276px] bg-white drop-shadow-lg'>
            <img src={Product1} className='w-[239px] h-[276px]' />
        </div>
        <div className='w-[239px] h-[276px] bg-white drop-shadow-lg'>
            <img src={Product2} className='w-[239px] h-[276px]' />
        </div>
        <div className='w-[239px] h-[276px] bg-white drop-shadow-lg'>
            <img src={Product3} className='w-[239px] h-[276px]' />
        </div>
        <div className='card w-[239px] h-[276px] bg-white drop-shadow-lg'>
            <img src={Product1} className='w-[239px] h-[276px]' />
        </div>
        <div className='w-[239px] h-[276px] bg-white drop-shadow-lg'>
            <img src={Product2} className='w-[239px] h-[276px]' />
        </div>
        <div className='w-[239px] h-[276px] bg-white drop-shadow-lg'>
            <img src={Product3} className='w-[239px] h-[276px]' />
        </div>
        <div className='card w-[239px] h-[276px] bg-white drop-shadow-lg'>
            <img src={Product1} className='w-[239px] h-[276px]' />
        </div>
        <div className='w-[239px] h-[276px] bg-white drop-shadow-lg'>
            <img src={Product2} className='w-[239px] h-[276px]' />
        </div>
        <div className='w-[239px] h-[276px] bg-white drop-shadow-lg'>
            <img src={Product3} className='w-[239px] h-[276px]' />
        </div>
    </Carousel>;
    </div>
   </div>
  )
}

export default Ourproduct
