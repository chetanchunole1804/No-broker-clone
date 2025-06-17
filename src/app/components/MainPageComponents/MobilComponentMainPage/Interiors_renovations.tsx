import Image from 'next/image';
import React from 'react';

const InteriorsRenovations = () => {
  return (
<div className="flex flex-col bg-[#E2E9EF] md:hidden">

    <h1 className='text-[#1F205F] font-semibold text-lg py-2 pl-4'>Interiors & Renovations</h1>
    
    <div className="flex  items-center gap-4 p-6 ">
      {/* First Image */}

      
      <div className=" bg-white  rounded-lg">
      <div className="w-full h-full flex rounded-lg bg-[#F7F9FD] justify-center">
        <Image
          src="https://assets.nobroker.in/nb-new/public/Home/homeInterior.png"
          width={200}
          height={200}
          alt="Home Interior 1"
        />
      </div>
      <div className="p-2  rounded-lg px-3 flex gap-2 h-24 flex-col">
      <h1 className='text-sm font-semibold'>Home Renovation</h1>
      <h2 className='text-xs'>Remodel to your fantasy home</h2>
      </div>
      </div>

      {/* Second Image */}
      <div className="bg-white rounded-lg">
      <div className="w-full h-full rounded-lg bg-[#F7F9FD] flex justify-center">
        <Image
          src="https://assets.nobroker.in/nb-new/public/Home/homeRennovation.png"
          width={200}
          height={200}
          alt="Home Interior 2"
        />
      </div>
      <div className="p-2  rounded-lg px-3 flex gap-2 h-24 flex-col">
      <h1 className='text-sm font-semibold'>Home Interior</h1>
      <h2 className='text-xs'>Stuning designs @ best price</h2>
      </div>
      </div>

    </div>
    </div>

  );
};

export default InteriorsRenovations;
