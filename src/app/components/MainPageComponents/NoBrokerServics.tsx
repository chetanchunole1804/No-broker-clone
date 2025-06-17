import React from 'react';
import { Nobrokerserv } from '@/app/components/MainPageComponents/Data';


function NoBrokerServics() {
  return (
    <div className='px-[40px] py-[30px]'>
      {/* heading */}
      <div className='font-semibold text-[22px] pb-5 '>NoBroker services</div>

      {/* content */}
      <div className=' md:flex md:justify-between '>
        {Nobrokerserv.map((category, index) => (
          <div key={index} className='w-48pe md:w-full'>
            <div className='heading-6 mb-[15px]'>{category.category}</div>
            <div className='md:flex md:flex-wrap flex flex-wrap'>
              {category.titles.map((title, idx) => (
                <a
                  key={idx}
                  href="#"
                  className='py-0.5 md:px-2 px-1 no-underline md:text-[17px] text-[12px] bg-[#e8e8e8] rounded-4 cursor-pointer mr-[8px] md:mr-[15px] mb-[15px]'
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default NoBrokerServics;
