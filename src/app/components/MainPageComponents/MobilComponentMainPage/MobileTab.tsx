import Image from 'next/image'
import React from 'react'

function MobileTab() {
    return (
        <div className=' md:hidden '>
            {/* bottom tab component  */}

            <div className=' fixed bottom-0 w-full h-[70px] flex items-center justify-around pt-[10px] pb-[5px] z-11 '
                style={{
                    backgroundImage: 'url(https://assets.nobroker.in/nb-new/public/Home/newHomeIcons/bottomBar.svg)',
                    backgroundSize: 'inherit',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* plus icon  */}
                <div className='fixed left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 bg-[#fb3652] rounded-full shadow-lg shadow-black/16 pl-2 py-2 right-0 w-[50px] h-[50px] '>
                    <Image src={"https://assets.nobroker.in/nb-new/public/Home/newHomeIcons/homePlus.svg"} alt='' width={34} height={34} className=' align-middle inline-block transition-all duration-200 ease-linear transform rotate-0'
                    />
                </div>

                {/* left navigate  */}

                <div className=' flex flex-row items-center z-1 gap-[30px] '>

                    <div className='flex justify-center flex-col items-center'>
                        <div className=' h-[25px] w-[25px] '
                            style={{
                                backgroundImage: 'url(https://assets.nobroker.in/nb-new/public/Home/newHomeIcons/NBIconHomeNew.svg)',
                                backgroundPosition: '-18px -325px',
                            }}
                        ></div>
                        <p className='text-[12px] m-0'>Property</p>
                    </div>

                    <div className='flex justify-center flex-col items-center'>
                        <div className=' h-[25px] w-[25px] '
                            style={{
                                backgroundImage: 'url(https://assets.nobroker.in/nb-new/public/Home/newHomeIcons/NBIconHomeNew.svg)',
                                backgroundPosition: '-60px -295px',
                            }}
                        ></div>
                        <p className='text-[12px] m-0'>Property</p>
                    </div>
                </div>

                {/* right navigate  */}
                <div className=' flex flex-row items-center z-1 gap-[30px] '>

                    <div className='flex justify-center flex-col items-center'>
                        <div className=' h-[25px] w-[25px] '
                            style={{
                                backgroundImage: 'url(https://assets.nobroker.in/nb-new/public/Home/newHomeIcons/NBIconHomeNew.svg)',
                                backgroundPosition: '-97px -295px',
                            }}
                        ></div>
                        <p className='text-[12px] m-0'>Rent Pay</p>
                    </div>

                    <div className='flex justify-center flex-col items-center'>
                        <div className=' h-[25px] w-[25px] '
                            style={{
                                backgroundImage: 'url(https://assets.nobroker.in/nb-new/public/Home/newHomeIcons/NBIconHomeNew.svg)',
                                backgroundPosition: '-143px -295px',
                            }}
                        ></div>
                        <p className='text-[12px] m-0'>Plans</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MobileTab