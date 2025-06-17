import Image from 'next/image';
import React from 'react';

function NoBrokerForNri() {
  return (
    <div className='bg-[#eae9f5] md:hidden font-sans'>
      {/* Title */}
      <div className='font-semibold text-[16px] pt-[20px] pl-[16px]'>
        NoBroker For NRIs
      </div>

      {/* Scrollable Cards */}
      <div className='pb-[20px]'>
        <div className='pl-[16px] overflow-x-scroll gap-3 flex mt-[10px] pb-[20px]' style={{scrollbarWidth:'none'}}>
          {/* Card 1 */}
          <div className='p-3.5 rounded-xl flex flex-col justify-between flex-shrink-0 min-w-[145px] gap-2 pt-[20px] pl-[16px] bg-white'>
            <div
              className='grid place-content-center w-[38px] h-[38px]'
              style={{
                backgroundImage: "url('https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg')",
                backgroundPositionX: '-40px',
                backgroundPositionY: '110px',
              }}
            ></div>
            <div className='text-[14px]'>
              End-to-End Property <br /> Management Services
            </div>
          </div>

          {/* Card 2 */}
          <div className='p-3.5 rounded-xl flex flex-col justify-between flex-shrink-0 min-w-[145px] gap-2 pt-[20px] pl-[16px] bg-white'>
            <div
              className='grid place-content-center w-[38px] h-[38px]'
              style={{
                backgroundImage: "url('https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg')",
                backgroundPositionX: '-110px',
                backgroundPositionY: '110px',
              }}
            ></div>
            <div className='text-[14px]'>
              24*7 Support on <br /> Intl. phone number
            </div>
          </div>

          {/* Card 3 */}
          <div className='p-3.5 rounded-xl flex flex-col justify-between flex-shrink-0 min-w-[145px] gap-2 pt-[20px] pl-[16px] bg-white'>
            <div
              className='grid place-content-center w-[38px] h-[38px]'
              style={{
                backgroundImage: "url('https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg')",
                backgroundPositionX: '-178px',
                backgroundPositionY: '110px',
              }}
            ></div>
            <div className='text-[14px]'>
              Personal Field Assistant <br /> at your Property
            </div>
          </div>

          {/* Card 4 - Explore More */}
          <div className='flex flex-col flex-shrink-0 gap-2 rounded-xl text-12 p-3.5 bg-white'>
            <div className='w-8 ar-1 br-50 block place-content-center relative'>
              <div className='rounded-full bg-[#666bb2] h-[38px] w-[38px]'>
                <Image
                  src={'https://assets.nobroker.in/nb-new/public/Home/RevampIcons/arrowNext.png'}
                  alt='arrow'
                  width={18}
                  height={16}
                  className='relative left-[10px] top-[10px]'
                />
              </div>
            </div>
            <div className='text-[12px] font-normal'>Explore More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoBrokerForNri;