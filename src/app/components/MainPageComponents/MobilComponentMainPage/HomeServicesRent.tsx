import Image from 'next/image';
import React from 'react';
import nbcile from '../../../../../public/assets/nbseal.svg'
import {serviceBuy_2 , serviceBuy_1} from "@/app/components/MainPageComponents/Data"




const HomeServicesRent = () => {
  return (
    
    <div className="px-4 mb-4 block md:hidden bg-[#FCFAF9]">
      <header className="flex justify-between">
        <h1 className="font-semibold text-lg">Home Services</h1>
        <h2 className="text-sm cursor-pointer hover:underline">See All</h2>
      </header>
      <div className="mt-6 flex flex-wrap justify-between gap-4 ">
        {serviceBuy_1.map((service,index) => (
          <div
            key={index}
            className={`w-[47%] h-24 overflow-hidden relative rounded-tl-3xl rounded-br-3xl  border border-[#D3BBB2] HomeBoxShado  rounded-md ${service.bgColor}`}
          >
            <Image
              className="w-full h-full object-cover"
              src={service.img}
              alt={service.name}
            />
            <div className="text-sm absolute z-20 top-0 p-2">
              <h1 className="font-semibold w-14 tracking-wide">{service.name}</h1>
            </div>
            <div className="bg-green-500 absolute text-[8px] tracking-wider px-3 gap-2 py-1 z-20 text-white font-semibold flex justify-center items-center rounded-r-full bottom-4">
              <Image src={nbcile} alt="" width={24} height={24} /> {service.name}
            </div>
            <div className="bg-gradient-to-r from-white to-transparent absolute top-0 w-full h-full z-10"></div>
          </div>
        ))}
      </div>

      <div className="py-5 flex flex-nowrap overflow-x-auto gap-4">
  {serviceBuy_2.map((service,index) => (
    <div
      key={index}
      className="w-20 rounded-br-2xl rounded-tl-2xl rounded-md border border-[#D3BBB2] HomeBoxShado h-28"
    >
      <div className="w-full p-[5px] justify-center flex flex-col items-center">
        <div className="w-[68px] rounded-br-2xl rounded-tl-2xl rounded-md overflow-hidden">
          <Image
            src={service.img}
            alt={service.name}
            className="w-full h-auto object-cover"
          />
        </div>
        <h1 className="text-xs text-center mt-1 font-medium">{service.name}</h1>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default HomeServicesRent;
