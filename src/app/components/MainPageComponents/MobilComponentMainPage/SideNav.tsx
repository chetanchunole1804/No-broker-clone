"use Client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { snData, snData2 } from './Data'
import jsonData from './Data.json'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'



const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};
function SideNav() {

    const [shuffledData, setShuffledData] = useState<typeof snData>([]);
    const [progress, setProgress] = useState<number>();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setShuffledData(shuffleArray(snData)); // Shuffle and store data
    }, []);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(percentage);
        }
    };

    const visible = expanded ? snData2 : snData2.slice(0, 4);

    return (
        <div className=' md:hidden fixed top-0 left-0 h-screen bg-black/70 z-40 w-full'>
            <div className='w-full h-[100%] bg-white  relative  shadow-[1px_2px_0_#000]'>
                {/* header  */}
                <div className=' p-[18px] bg-[#fd3752] '>
                    <div>
                        <div className=' items-center flex relative r-[7px] rounded-[100%] p-[4px]  '>
                            <div className=' bg-[#fff] rounded-full block p-[4px] h-[34px] w-[34px] '>
                                <Image src={"https://assets.nobroker.in/nb-new/public/MaterialIcons/accountCircle.svg"} alt='' width={26} height={26}
                                    className=' align-middle inline-block  '
                                ></Image>
                            </div>
                            <div className=' ml-[7px] text-[#fff] text-[18px] '>Login/SignUp</div>
                            <Image src={"https://assets.nobroker.in/nb-new/public/Home/loginNext.svg"} alt='' width={7} height={12}
                                className='absolute right-[3px] align-middle inline-block max-w-[100%] h-auto '
                            ></Image>
                        </div>

                        <div className="flex items-center bg-white rounded-sm mt-5 p-[5px] pr-2 relative w-[100%]  ">
                            <div>
                                <Image src={"https://assets.nobroker.in/nb-new/public/Home/PYP.svg"} alt='' width={32} height={29} ></Image>
                            </div>
                            <div className=' ml-[7px] text-[14px] font-medium '>Post your property</div>
                            <div className='bg-black rounded-sm text-white text-xs ml-1 px-2' >FREE</div>
                            <Image src={"https://assets.nobroker.in/nb-new/public/Home/Next.svg"} alt='' width={7} height={12}
                                className='absolute right-[16px] align-middle inline-block max-w-[100%] h-auto text-red '
                            ></Image>
                        </div>
                    </div>
                </div>
                {/* body  */}
                <div className=''>
                    <div>
                        {/* 1st part  */}
                        <div className=' border border-gray-300/70 rounded-md m-3 transition-height duration-1000 ease-in-out overflow-auto grow '>
                            <div className='p-2 flex flex-row  '>
                                <div className=' flex items-end justify-end flex-col flex-3 font-normal '>
                                    <div className=' w-full text-[15px] font-normal text-gray-700 '>
                                        Because
                                        <span className=' text-[#53b590] font-medium ' > Your Home</span>
                                    </div>
                                    <div className=' w-full text-[15px] font-normal text-gray-700 leading-5 '>Deserves The Best.</div>
                                </div>
                                <div className=' flex items-end flex-col text-[9px] ml-auto mr-0 '>
                                    <Image src={"https://assets.nobroker.in/nb-new/public/Home/USP_icon.svg"} alt='' width={20} height={20}
                                        className='align-middle inline-block'
                                    ></Image>
                                    <span>
                                        <span className='font-semibold'>3Lacs+ </span>
                                        Services
                                    </span>
                                    <span>
                                        booked in
                                        <span className='font-semibold'> last 3 months</span>
                                    </span>
                                </div>
                            </div>
                            {/* video part  */}
                            <div className=' w-full overflow-hidden relative '>
                                <div className=' w-full whitespace-nowrap transform translate-x-0 transition-all ease-out '>
                                    {shuffledData.map((item, index) => (
                                        <div key={index} className="w-full whitespace-normal inline-block align-top p-2 py-0">
                                            <div className="relative text-center mb-5">
                                                <div className="bg-cover bg-center cursor-pointer bg-no-repeat h-[12rem] w-full rounded-lg">
                                                    <div>
                                                        <video
                                                            className="h-[13.5rem] w-full transition-all duration-500 opacity-100"
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                            src={item.image}
                                                            onTimeUpdate={handleTimeUpdate}
                                                            ref={index === 0 ? videoRef : undefined}
                                                        ></video>
                                                        <div className="bg-red-600 rounded-md absolute bottom-11 z-10 h-1" style={{ width: `${progress}%` }}></div>
                                                        <div className="flex justify-center">
                                                            <div className="bg-white rounded-lg h-1 absolute bottom-11 w-full"></div>
                                                        </div>
                                                        <div className="flex right-0 bottom-0 left-0 rounded-b-lg px-2 justify-between absolute items-center h-[43px] opacity-50 bg-black blur-[1px]"></div>
                                                        <div className="flex right-0 bottom-0 left-0 rounded-b-lg px-2 justify-between absolute items-center h-[42px]">
                                                            <div className="text-white text-semibold text-[14px] flex">
                                                                <span>
                                                                    <Image
                                                                        src="https://assets.nobroker.in/nb-new/public/Home/newServicesIcons/hs_pnm_compressed.webp"
                                                                        alt=""
                                                                        width={25}
                                                                        height={50}
                                                                        loading="lazy"
                                                                        className="mr-2 rounded h-[25px] w-[25px]"
                                                                    />
                                                                </span>
                                                                <span className="font-semibold">{item.title}</span>
                                                            </div>
                                                            <button className="flex justify-center w-16 items-center text-white text-[12px] rounded-md font-medium px-2 py-1.5 bg-[#009587]">
                                                                {item.add}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* 3rd part  */}
                            <div className='flex flex-wrap bg-white  '>
                                {visible.map((item, index) => (
                                    <div key={index} className=' w-[25%] relative '>
                                        <div className=' rounded-xl flex flex-col items-center py-[14px] px-[8px] h-[100%]  '>
                                            <div className=' w-14 h-14 justify-center items-center flex rounded-[50%] bg-[#f0f4fc]  '>
                                                <div className=' w-[30px] h-[30px] relative '
                                                    style={{
                                                        backgroundImage: 'url(https://assets.nobroker.in/nb-new/public/Home/newServicesIcons/sideNavHsSpriteOptimized.svg)',
                                                        backgroundSize: '330px',
                                                        backgroundPosition: item.position, // value comes from data.js and it will change accordingly
                                                        cursor: 'pointer',
                                                        zoom: 1,
                                                        backgroundRepeat: 'no-repeat',
                                                    }}
                                                ></div>
                                            </div>
                                            <div className=' text-[12px] text-center px-0 pt-3 leading-[14px] text-[#4d4b4b] font-medium '>{item.name}</div>
                                        </div>
                                        {item.headP && (
                                            <div className=' flex justify-center px-1 rounded-lg mx-auto absolute left-0 right-0 bg-[#fae8cb] w-fit top-[8px] '>
                                                <div className=' flex text-center font-medium text-[#4b4b4b] text-[9px] tracking-normal '>
                                                    {item.headP}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {/* 4th part ( button which go up and down and only show 4 value of above content in first time of loading)  */}
                            <div className=' flex justify-center items-center relative bg-[#009587] rounded-r-[5px] rounded-l-[5px] h-[30px] w-[100%] font-semibold ' onClick={() => setExpanded(!expanded)}>
                                <span className='text-white text-sm tracking-normal mr-1 text-left'>{expanded ? 'Show less' : `+${snData2.length - 4} More Services`}</span>
                            </div>
                        </div>
                        {/* 2nd part accordian  */}
                        <div>
                            <Accordion type="single" collapsible>
                                {jsonData[0].snData3.map((section, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="bg-gray-100 font-semibold my-1 px-5 py-3 relative">
                                            {section.title}
                                        </AccordionTrigger>
                                        {section.content.map((item, subIndex) => (
                                            <AccordionContent key={subIndex} className="px-[15px]">
                                                <div className="flex text-[16px] py-[6px] relative">
                                                    {/* Image */}
                                                    <div
                                                        style={{
                                                            backgroundImage:
                                                                "url(https://assets.nobroker.in/nb-new/public/Home/new_nav_menu_sprite.svg)",
                                                            backgroundPosition: item.position,
                                                            marginRight: "15px",
                                                            backgroundRepeat: "no-repeat",
                                                            width: "30px",
                                                            height: "26px"
                                                        }}
                                                    ></div>
                                                    {/* Content */}
                                                    <div>
                                                        {item.name}
                                                        {/* Show "New" tag only if 'fiels' exists */}
                                                        {item.fields && (
                                                            <sup className="bg-[#f4a63f] rounded-[20px] text-white text-xs ml-2 py-0.5 px-2 absolute top-0">
                                                                {item.fields}
                                                            </sup>
                                                        )}
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        ))}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav