import React from 'react';
import InstantCash from "../../../../../public/assets/instacash-home-banner-new_m.webp";
import Image from 'next/image';

const InstantCashComponent = () => {
  return (
    <div className="">
    <div className='p-4 bg-[#F2F2F2] block md:hidden'>
      <div className=' rounded-lg relative max-h-40 overflow-hidden'>
        <Image src={InstantCash} height={200} width={300} alt="" />

        <div className=" absolute top-0 p-3 flex flex-col gap-1 ">
          <h1 className='text-base  font-semibold'>Get Upto <span className='text-[#2A9A8C] '>₹ 5Lakhs</span> </h1>
          <h1 className='font-semibold text-sm'>Instant Cash!</h1>
          <div className="flex flex-col gap-1 mt-2">
          <div className="w-fit px-3 py-1 font-semibold text-sm rounded-md text-white  flex  bg-[#2A9A8C]">Withdraw Now</div>
          <h2 className='text-[10px]'>Safe.Secure.Quick</h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InstantCashComponent;
