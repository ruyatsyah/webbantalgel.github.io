import React from "react";

const ContactUs = () => {
  return (
    <div className="px-10 my-10 py-10 lg:px-[118px] bg-[#E1F2FA]">
        <div className="container mx-auto">

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <h1 className="text-[25px] font-medium py-10 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2F91DC] to-[#40F8FF]">Contact Us</h1>
          <h1 className="text-[25px] lg:text-[35px] font-medium">
            Do you wan to talk with us? <span className="font-normal">Just drop us a line and we will schedule
            a respond or call :</span>
          </h1>
          <p className="pt-6">
            Lorem ipsum dolor sit amet consectetur. Turpis venenatis tortor
            tortor gravida pretium pulvinar. amet consectetur. Turpis venenatis
            tortor tortor gravida pretium pulvinar.
          </p>
        </div>
        <div className="w-full mt-5 lg:mt-36 lg:w-2/5 lg:ml-24">
            <input className="px-4 py-3 w-full drop-shadow-sm rounded-sm" placeholder="Your Email"/>
            <br/>
            <textarea className="px-4 py-3 drop-shadow-sm mt-3 w-full h-[147px] rounded-sm" placeholder="Message"/>
            <br/>
            <button className="mt-2 px-6 w-full mb-5 py-[10px] bg-gradient-to-r from-[#2F91DC] to-[#40F8FF] rounded-sm text-white">
                Send
            </button>

        </div>
      </div>
        </div>
    </div>
  );
};

export default ContactUs;
