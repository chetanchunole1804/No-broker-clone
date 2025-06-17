import Image from 'next/image'
import React from 'react'

function OneStopShopForPayment() {
  return (
    <div className='border-t-[5px] border-solid border-[#f2f2f2] md:hidden'>
        
        <div className='m-[4%]'>

        <header className='flex justify-between items-center mb-[18px]'>
  <div className='flex items-center text-[16px] sm:text-[18px] font-semibold'>
    One-stop-shop for all Payments
  </div>
  <div className='text-[12px] sm:text-[14px] font-medium text-green-700' role='button'>
    See All
  </div>
</header>

            <main className='flex'>
                <div className='w-[45%] h-[196px] bg-[#e9f8f1] p-5px relative pl-[8px] pt-[10px] rounded mr-[3%]'>
                    <div className='text-[14px] font-medium mr-[3%] mb-[4px] '>Rent Payment</div>
                    <div className='text-[10px] leading-4'>Trusted by 1Lac+ users  <br />with secure system</div>
                    <Image src={'https://assets.nobroker.in/nb-new/public/Home/newOfferCard.svg'} alt='img' width={70} height={22} 
                    className='block pt-[6px]'
                    ></Image>
                    <Image src={'https://assets.nobroker.in/nb-new/public/Home/arrowIcon.svg'} alt='img' width={22} height={12} 
                    className='bg-[#B0D0BD] p-[1px] mt-[6px] px-[6px] rounded-3xl '
                    ></Image>
                    <div className='flex absolute  right-0 bottom-0 w-[147px] h-[100px]'
                    style={{
                        backgroundImage:"url('https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg')",
                        backgroundPositionX:'-215px',
                        backgroundPositionY:'130px'
                    }}
                    ></div>
                </div>
                {/* 2nd block  */}
                <div className='flex flex-col w-[55%]'>
                    
                    <div className='w-full h-[94px] bg-[#eaebf8] p-[5px] relative pl-[8px] pt-[10px] rounded mb-[9px]'>
                        <div className=' text-[12px] font-medium mr-[3%] mb-[3px] '>
                            <div className='leading-none'>
                            Maintenance &  <br />
                            Fee Payment
                            </div>
                        </div>
                        <div className='text-[10px] leading-4'>24/7 instant transfer*</div>
                        <Image src={'https://assets.nobroker.in/nb-new/public/Home/arrowIcon.svg'} alt='img' width={22} height={12} 
                        className='bg-[#B0D0BD] p-[1px] mt-[6px] px-[6px] rounded-3xl '
                        ></Image>
                        <div className='flex absolute  right-0 bottom-0 w-[60px] h-[84px]'
                    style={{
                        backgroundImage:"url('https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg')",
                        backgroundPositionX:'-395px',
                        backgroundPositionY:'123px'
                    }}
                    ></div>

                    </div>
                    <div className='w-full h-[94px] bg-[#eaebf8] p-[5px] relative pl-[8px] pt-[10px] rounded mb-[9px]'>
                        <div className=' text-[12px] font-medium mr-[3%] mb-[3px] '>
                            <div className='leading-none'>
                            Utility Bill<br />
                            Payment
                            </div>
                        </div>
                        <div className='text-[10px] leading-4'>Faster & hassle-free</div>
                        <Image src={'https://assets.nobroker.in/nb-new/public/Home/arrowIcon.svg'} alt='img' width={22} height={12} 
                        className='bg-[#B0D0BD] p-[1px] mt-[6px] px-[6px] rounded-3xl '
                        ></Image>
                        <div className='flex absolute  right-0 bottom-0 w-[70px] h-[90px]'
                    style={{
                        backgroundImage:"url('https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg')",
                        backgroundPositionX:'-480px',
                        backgroundPositionY:'130px'
                    }}
                    ></div>

                    </div>
                    
                </div>
            </main>

        </div>





    
    </div>
  )
}

export default OneStopShopForPayment