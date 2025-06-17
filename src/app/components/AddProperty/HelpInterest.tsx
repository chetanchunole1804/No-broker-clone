import React,{useState} from 'react'
import Image from 'next/image'

const HelpInterest = () => {

    const [intrest, setIntrest] = useState(true);

    const handleChange = ()=>{
        setIntrest(false)
    }
  return (
    <div className='w-full bg-[#feebd2] py-2 text-sm flex items-center justify-center rounded-md'>
        {intrest ? <div className='flex gap-4 items-center'>
            <Image src="https://www.nobroker.in/nb-new/public/Post-Your-Property/callback.svg" alt="Image" className='w-5' width={20} height={20}></Image>
            <p>Don&apos;t want to fill all the details? Let us help you!</p>
            <button onClick={handleChange} className='text-[#009587] border rounded-sm border-[#009587] py-2 px-4 font-semibold'>I&apos;m Interested</button>
        </div>
            :
         <div className='flex gap-1 items-center'>
            <Image src="https://www.nobroker.in/nb-new/public/Post-Your-Property/tick.svg" alt="Image" className='w-9 mr-5' width={36} height={36}></Image>
            <p>Thank you for the interest.<span className='font-semibold'>Our agent will give you a call shortly.</span></p>
        </div>}
    </div>
  )
}

export default HelpInterest