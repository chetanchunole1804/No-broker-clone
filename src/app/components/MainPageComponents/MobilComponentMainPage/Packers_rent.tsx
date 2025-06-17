import Image from 'next/image'
import React from 'react'
import lowestPrice from '../../../../../public/assets/lowestPrice-m.png'

const Packers_rent = () => {
  return (
    <div >
         <div className="flex md:flex-row  gap-6 items-center  md:hidden px-5 py-2 ">
      {/* Background Image Section */}
     

      {/* Text Content Section */}
      <div className="mt-4 t">
        <h1 className="text-lg font-semibold text-gray-800">Packers & Movers</h1>
        <p className="text-gray-600 mt-2 text-sm">
            Guaranteed on-time, safe delivery at great prices
        </p>
        <Image className='w-28 mt-3' src={lowestPrice} alt="" width={112} height={60} />
        <h2 className="text-blue-500 mt-4 cursor-pointer hover:underline">
          Explore →
        </h2>
      </div>


      <div className="w-[180px] h-[140px] overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg")',
            backgroundPositionX: '-210px',
            backgroundPositionY: '-51px',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'scroll',
          }}

        
        ></div>
      </div>
    </div>
    </div>
  )
}

export default Packers_rent