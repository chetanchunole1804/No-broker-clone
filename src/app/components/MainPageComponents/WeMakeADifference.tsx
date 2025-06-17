import React from 'react';
import { WeMakeADiff } from '@/app/components/MainPageComponents/Data';

function WeMakeADifference() {
  return (
    <div className='py-[40px] hidden md:block'>
      <div className='flex justify-between items-center'>
        <div className='h-[1px] relative w-[32%] bg-slate-200'>
          <span className='w-4 h-4 top-[-6px] left-[100%] rounded-full border absolute border-red-600'></span>
        </div>
        <div className='text-2xl md:text-3xl text-[#787676] font-sans font-normal text-center'>
          We Make A Difference
        </div>
        <div className='h-[1px] relative w-[32%] bg-slate-200'>
          <span className='w-4 h-4 top-[-6px] right-[100%] rounded-full border absolute border-red-600'></span>
        </div>
      </div>

      <div className='flex flex-wrap justify-center md:justify-between mt-[40px] px-4 md:px-[10%] text-center'>
        {WeMakeADiff.map((item, index) => (
          <div key={index} className='flex flex-col items-center text-center p-6 md:p-14 w-full sm:w-1/2 md:w-1/3'>
            <div>
              <div className='border-[2px] border-[#fd3752] rounded-full text-[#fd3752] text-[30px] md:text-[40px] h-[120px] md:h-[170px] w-[120px] md:w-[170px] leading-[120px] md:leading-[170px] mb-[15px] font-sans'>
                {item.val}
              </div>
            </div>
            <p className='text-sm md:text-base text-[#464646] font-sans'>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeMakeADifference;