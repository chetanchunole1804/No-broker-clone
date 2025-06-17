import React,{useState} from 'react'
import Image from 'next/image'

const MessageReceived = () => {
    const [isVisible, setIsVisible] = useState(true)
    const handleClose = () => {
        setIsVisible(false);
      };
  return isVisible ? (
    <div className='flex bg-black bg-opacity-40 justify-center items-center w-screen h-screen  top-0 left-0 z-10 fixed'>
        <div className='w-96 h-52 bg-white rounded-lg relative p-5 text-[#837783]'>
            <Image src="https://assets.nobroker.in/nb-new/public/Common/payment-success.svg" alt="" className='mx-auto w-10 pt-7'
            ></Image>
            <span className=' rotate-45 text-4xl absolute top-8 right-5 cursor-pointer' onClick={handleClose}>+</span>
            <p className='font-semibold text-center pt-5'>You would have received a message on your WhatsApp & Push Notification</p>
        </div>
    </div>
  ):null;
}

export default MessageReceived