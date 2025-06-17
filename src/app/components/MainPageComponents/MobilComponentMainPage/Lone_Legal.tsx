import React from 'react'

import { Loans_Legal } from '../Data'
import Image from 'next/image'

const Lone_Legal = () => {
  return (
    <div>
        <div className=" bg-[#E2E9EF] block md:hidden py-2">
            <h1 className=' py-4 pl-3  text-[#1F205F] font-semibold text-lg'>Lone and Legal Services</h1>

            <div className="grid grid-cols-2 w-full items-center justify-center p-2 place-items-center  ">
                {Loans_Legal.map((item,index)=>(
                    <div key={index} className=" w-[90%] rounded-md  bg-[#F7F9FD] ">
                    <Image src={item.img} alt="" width={200} height={150} />
                    <div className=" bg-white rounded-md">
                    <h1 className=' text-sm px-3 py-1 font-semibold'>{item.title}</h1>
                    <p className=' text-[10px] px-3 py-2'>{item.des}</p>
                    </div>
                </div>
                ))}
                
                
            </div>
        </div>
    </div>
  )
}

export default Lone_Legal