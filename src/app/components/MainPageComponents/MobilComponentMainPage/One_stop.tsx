import Image from 'next/image'
import React from 'react'

const One_stop = () => {
  return (
    <div>
      <div className="p-4">
        <div className="flex justify-between items-center ">
        <h1 className='text-base'>One-stop-shop for all Payments</h1>
        <h1 className='text-xs'>See All</h1>
      </div>
      
      <div className="">
        <div className="w-[50%]">
          <h1>Rent Payment</h1>
          <p>Trusted by 1Lac+users with secure system</p>
          <Image src="https://assets.nobroker.in/nb-new/public/Home/newOfferCard.svg" width={80} height={30} alt="" />
        </div>
        <div className="w-[50%]">
          <div className="h-[50%]"></div>
          <div className="h-[50%]"></div>
        </div>

      </div>

      </div>
    </div>
  )
}

export default One_stop