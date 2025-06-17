import React from 'react'

function FinacialService() {
  return (
    <div className='md:hidden border-t-[5px] border-solid border-[#f2f2f2] '>
        <section className='py-6 px-4 bg-white'>
            <span className='text-[16px] font-semibold'>Financial Services</span>
            <div className='grid grid-cols-4 mt-5'>
                <div  className='main flex flex-col gap-2 items-center text-center relative'>
                    <div className='h-14 w-14 rounded-full grid place-content-center bg-[#f8f8f8]'>
                        <div className=' w-[49px] h-[49px]'
                        style={{
                            backgroundImage:"url('https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg')",
                            backgroundPositionX:'-50px',
                            backgroundPositionY:'-176px',
                            backgroundRepeat:'no-repeat'
                        }}
                        ></div>
                    </div>
                    <div className='text-[12px] font-medium'>Rent <br />Payment</div>
                    <div className='top-[-8px] bg-[#fae8cb] w-max flex justify-center px-1 rounded-lg mx-auto absolute left-0 right-0 '>
                        <div className='text-[8px] text-[#4b4b4b] font-semibold'>
                        Most used
                        {/*  */}
                        
                        <b></b>
                        </div>
                    </div>
                </div>

                <div  className='main flex flex-col gap-2 items-center text-center relative'>
                    <div className='h-14 w-14 rounded-full grid place-content-center bg-[#f8f8f8]'>
                        <div className=' w-[49px] h-[49px]'
                        style={{
                            backgroundImage:"url('https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg')",
                            backgroundPositionX:'-106px',
                            backgroundPositionY:'-178px',
                            backgroundRepeat:'no-repeat'
                        }}
                        ></div>
                    </div>
                    <div className='text-[12px] font-medium'>Utility Bill  <br />Payment</div>
                    
                </div>

                <div  className='main flex flex-col gap-2 items-center text-center relative'>
                    <div className='h-14 w-14 rounded-full grid place-content-center bg-[#f8f8f8]'>
                        <div className=' w-[49px] h-[49px]'
                        style={{
                            backgroundImage:"url('https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg')",
                            backgroundPositionX:'-161px',
                            backgroundPositionY:'-178px',
                            backgroundRepeat:'no-repeat'
                        }}
                        ></div>
                    </div>
                    <div className='text-[12px] font-medium'>Maintenance  <br />Bill Payment</div>
                    
                </div>

                <div  className='main flex flex-col gap-2 items-center text-center relative'>
                    <div className='h-14 w-14 rounded-full grid place-content-center bg-[#f8f8f8]'>
                        <div className=' w-[49px] h-[49px]'
                        style={{
                            backgroundImage:"url('https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg')",
                            backgroundPositionX:'-214px',
                            backgroundPositionY:'-174px',
                            backgroundRepeat:'no-repeat'
                        }}
                        ></div>
                    </div>
                    <div className='text-[12px] font-medium'>Fees</div>
                    
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default FinacialService