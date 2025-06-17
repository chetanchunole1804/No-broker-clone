import React from 'react'

function PropertyManagementService() {
  return (
    <div className='md:hidden border-t-[5px] border-solid border-[#f2f2f2] '>
        <div className='px-[20px] pt-[10px] pb-[10px]'>
            <div className='flex flex-row-reverse justify-between'>
                {/* content  */}
                <div className='mt-auto mb-auto font-sans '>
                    <div className='text-[16px] font-semibold leading-5 mb-[10px]'>Property Management Services</div>
                    <p className='leading-5 text-[14px] mb-[10px] '>From inspection to tenant placement, We make renting your property a breeze</p>
                    <div>
                        <span className='text-[14px] text-[#209586] font-semibold'>Explore</span>
                        <span className='inline-block w-[16px] bg-[#209586] h-[1px] align-middle ml-[7px] relative'>
                            <span className=' border-t-[1px] border-r-[1px] border-solid border-[#209586] w-[5px] h-[5px] absolute left-[10px] top-[-2px] transform rotate-45'></span>
                        </span>
                    </div>
                </div>

                {/* image  */}
                <div>
                    <div className='h-[116px] w-[116px] place-content-center grid'
                    style={{
                        backgroundImage:"url('https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg')",
                        backgroundPositionX:'-373px',
                        backgroundPositionY:'-53px'
                    }}
                    ></div>

                </div>


            </div>
        </div>

    </div>
  )
}

export default PropertyManagementService