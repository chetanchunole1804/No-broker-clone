import React from 'react';

function RelecationService() {
    return (
        <div className='md:hidden border-t-[5px] border-solid border-[#f2f2f2]'>
            <div className='px-[20px] py-[10px]'>
                <div className='flex flex-row justify-between'>
                    {/* content  */}
                    <div className='mt-auto mb-auto font-sans w-[68%] h-[11%]'>
                        <div className='text-[14px] font-semibold leading-5 mb-[10px]'>
                            Relocation Services for Corporates
                        </div>
                        <p className='leading-5 text-[12px]'>
                            Home search relocation services for your employees is easier now than ever before
                        </p>
                        <div>
                            <span className='text-[14px] text-[#209586] font-semibold'>Explore</span>
                            <span className='inline-block w-[16px] bg-[#209586] h-[1px] align-middle ml-[7px] relative'>
                                <span className='border-t-[1px] border-r-[1px] border-solid border-[#209586] w-[5px] h-[5px] absolute left-[10px] top-[-2px] transform rotate-45'></span>
                            </span>
                        </div>
                    </div>

                    {/* image  */}
                    <div className='grid place-content-center w-[116px] h-[116px]'
                        style={{
                            backgroundImage: "url('https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg')",
                            backgroundPositionX: '-513px',
                            backgroundPositionY: '-62px'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default RelecationService;