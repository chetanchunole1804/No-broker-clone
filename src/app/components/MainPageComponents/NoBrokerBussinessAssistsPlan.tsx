import Image from 'next/image';
import { NoBrokerBussiness } from '@/app/components/MainPageComponents/Data';
import React from 'react';

function NoBrokerBusinessAssistPlan() {
  return (
    <div className='bg-[#F4F4F4] py-[40px] hidden md:block'>
      <div className='flex justify-between items-center'>
        <div className='h-[1px] relative w-[25%] bg-slate-200'>
          <span className='w-4 h-4 top-[-6px] right-[-15px] rounded-full border absolute border-red-600'></span>
        </div>
        <div className='text-3xl text-[#787676] font-sans font-normal text-center'>
          NoBroker Business Assist Plan For Builders
        </div>
        <div className='h-[1px] relative w-[25%] bg-slate-200'>
          <span className='w-4 h-4 top-[-6px] left-[-15px] rounded-full border absolute border-red-600'></span>
        </div>
      </div>

      <div className='flex mt-[40px] justify-center items-center mx-4 '>
        {NoBrokerBussiness.map((item, index) => (
          <div key={index} className='flex justify-center'>
            <Image src={item.img} alt={item.title} width={300} height={200} />
          </div>
        ))}

        <div className='text-left ml-[120px]'>
          <h2 className='text-[#787676] text-lg mb-4'>
            Get in touch with us to Sell or Rent Your Projects
          </h2>
          <button className='bg-[#fd3752] text-white px-[24px] py-[12px] font-medium'>
            Enquire Now
          </button>
          <p className='text-[#787676] '>
            For Builder Enquiries: +91 91080 50400
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoBrokerBusinessAssistPlan;