import React from 'react'
import Mobile_assets from "../../../../../public/assets/mobile_assets.svg"
import Image from 'next/image'

const PostFreeAd = () => {
  return (
    <div className='w-full mt-4'>
        <div className="w-full  md:hidden  rounded-xl bg-[#4F3B2D] flex justify-between p-4 mt text-white  ">
  <div className="">
   <h1 className=" font-semibold">Looking for Tenats/ Buyers ?</h1>
   <h3 className="text-xs">🗲 Faster & Verified Tenants/Buyers</h3>
   <h3 className="text-xs">🗲 Pay Zero brokerage</h3>
   <div className="px-3 py-2 mt-3 rounded-lg text-sm text-white font-semibold w-fit bg-[#FD3752]">Post FREE Property Ad</div>
  </div>
  <div className="w-[50px] overflow-hidden  object-cover">
  <Image src={Mobile_assets} className=" " alt="" width={200} height={200} />
  
  </div>
</div>
    </div>
  )
}

export default PostFreeAd