import React from 'react'
import {UseNobroker} from '@/app/components/MainPageComponents/Data'
import Image from 'next/image'

const MainPageBottom = () => {
  return (
    <div className='mt-12'>
    <div className="flex justify-between items-center">
      <div className="h-[1px] relative w-[35%] bg-slate-200">
        <span className="w-8 h-8 top-[-15px] right-[-33px] rounded-full border absolute border-red-600"></span>
      </div>
      <div className="text-2xl text-[#787676] font-medium">Why Use NoBroker</div>
      <div className="h-[1px] relative w-[35%] bg-slate-200">
        <span className="w-8 h-8 -top-[15px] -left-[30px] rounded-full border absolute border-red-600"></span>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {UseNobroker.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center p-14  ">
          <Image src={item.img} alt={item.title}  className="w-16 h-16 mb-4 object-cover" />
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-base text-gray-600">{item.des}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default MainPageBottom