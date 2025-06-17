import React from 'react';

function Toolsandinsights() {
  return (
    <div className='border-solid border-[5px] border-[#f2f2f2] md:hidden'>
      <div className='py-[1rem] relative'>
        {/* Fixed Section */}
        <div className='flex flex-col absolute items-center text-center justify-center px-8 gap-3.5'>
          <div
            className='w-[40px] h-[40px]'
            style={{
              backgroundImage: "url('https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg')",
              backgroundPositionX: '-244px',
              backgroundPositionY: '-255px',
              transform: 'scale(1)',
              backgroundRepeat: 'initial',
            }}
          ></div>
          <div className='uppercase text-[12px] mb-[8px] font-semibold'>
            Tools & <br /> Insights
          </div>
        </div>

        {/* Scrollable Content */}
        <div className='pl-28 pr-3 flex flex-nowrap overflow-x-scroll scrollbar-hide' style={{ scrollbarWidth: 'none' }}>
          {/* Card 1 */}
          <div className='pr-4 rounded-md bg-white flex-shrink-0'>
            <div className='pt-[4px] pb-[15px] px-3 rounded-xl flex flex-col w-44 h-full z-0 relative bg-[#f5f8fb]'>
              <div className='flex justify-between items-center pb-1'>
                <div>Home Loan <br /> Eligibility</div>
                <div
                  className='flex-shrink-0 h-[48px] w-[48px]'
                  style={{
                    backgroundImage: "url('https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg')",
                    backgroundPositionX: '-410px',
                    backgroundPositionY: '-345px',
                    transform: 'scale(0.9)',
                  }}
                ></div>
              </div>
              <div className='text-[10px] default-color pb-[15px]'>
                Check your eligibility Instantly
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='pr-4 rounded-md bg-white flex-shrink-0'>
            <div className='pt-[4px] pb-[15px] px-3 rounded-xl flex flex-col w-44 h-full z-0 relative bg-[#f5f8fb]'>
              <div className='flex justify-between items-center pb-1'>
                <div>Property <br /> Alerts</div>
                <div
                  className='flex-shrink-0 h-[48px] w-[48px]'
                  style={{
                    backgroundImage: "url('https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg')",
                    backgroundPositionX: '-110px',
                    backgroundPositionY: '-252px',
                    transform: 'scale(0.9)',
                  }}
                ></div>
              </div>
              <div className='text-[10px] default-color pb-[15px]'>
                Get tailor-made property recommendations
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolsandinsights;