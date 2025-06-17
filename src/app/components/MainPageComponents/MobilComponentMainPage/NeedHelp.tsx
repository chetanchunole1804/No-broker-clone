import Image from 'next/image'
import React from 'react'

function NeedHelp() {
  return (
    <div className='md:hidden'>
        <a className='mb-[65px] items-center border-y-[5px] border-solid border-[#f2f2f2] flex py-[5px] px-[20px] '>
            {/* content  */}
            <div className='flex-basis-[90%] w-[90%] h-[7.4%]'>
                <h6 className='text-[#464646] text-[16px] leading-5 mb-4 mt-4  '>Need help?</h6>
                <p className='text-[13px] leading-6 mt-2 text-[#9b9b9b]'>Chat with our team for assistance</p>
            </div>

            {/* Image  */}
            <Image src={'https://assets.nobroker.in/nb-new/public/AssistanceChatIcon.svg'} alt='need help' width={34} height={60} className='inline-block'  ></Image>

        </a>
    </div>
  )
}

export default NeedHelp