import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='min-h-[200px]'>
      <div className='footer_container'>
        {/* last 2nd part  */}
        <div className='border-[1px] border-solid border-[#4646463d] flex p-[30px] flex-wrap bg-[#ededed]  
                flex-col sm:flex-row text-center'>

          <div className='w-full sm:w-[50%] text-center pb-4 sm:pb-0 sm:pr-4'>
            <div className='font-semibold text-[18px]'>Find Property</div>
            <div>Select from thousands of options, without brokerage.</div>
            <a href="#" className='py-[3px] px-[20px] no-underline text-white inline-block mt-[15px] bg-[#464646] rounded-md'>Find Now</a>
          </div>

          <div className='w-full sm:w-[50%] text-center sm:border-l-[1px] border-t-[1px] sm:border-t-0  border-[#4646463c] pt-4 sm:pt-0 sm:pl-4'>
            <div className='font-semibold text-[18px]'>List Your Property</div>
            <div>For Free. Without any brokerage.</div>
            <a href="#" className='py-[3px] px-[20px] no-underline text-white inline-block mt-[15px] bg-[#464646] rounded-md'>Free Posting</a>
          </div>

        </div>
        {/* last main footer */}
        <div className="pt-[30px] border-t-[1px] border-solid">
          {/* Links Section */}
          <div className="flex flex-wrap justify-center text-center px-4">
            <div className="cursor-pointer m-[10px] sm:m-[20px] text-[16px] sm:text-[18px] no-underline text-[#464646]">About Us</div>
            <a href="#" className="cursor-pointer m-[10px] sm:m-[20px] text-[16px] sm:text-[18px] no-underline text-[#464646]">Careers</a>
            <a href="#" className="cursor-pointer m-[10px] sm:m-[20px] text-[16px] sm:text-[18px] no-underline text-[#464646]">Terms & Conditions</a>
            <a href="#" className="cursor-pointer m-[10px] sm:m-[20px] text-[16px] sm:text-[18px] no-underline text-[#464646]">Privacy Policy</a>
            <a href="#" className="cursor-pointer m-[10px] sm:m-[20px] text-[16px] sm:text-[18px] no-underline text-[#464646]">Testimonials</a>
            <a href="#" className="cursor-pointer m-[10px] sm:m-[20px] text-[16px] sm:text-[18px] no-underline text-[#464646]">Sitemap</a>
            <div className="cursor-pointer m-[10px] sm:m-[20px] text-[16px] sm:text-[18px] no-underline text-[#464646]">FAQs</div>
          </div>

          {/* Divider Line (Only on Medium Screens and Above) */}
          <hr className="hidden md:block my-[25px] mx-[10%] md:mx-[20%]" />

          {/* App Download Section */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-[10px]">
            <a href="#" className="my-0">
              <Image src="https://assets.nobroker.in/nb-new/public/Common/android_download.svg" width={108} height={34} alt="" loading="lazy" />
            </a>
            <a href="#" className="my-0">
              <Image src="https://assets.nobroker.in/nb-new/public/Common/IOS_download.svg" width={108} height={34} alt="" loading="lazy" />
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-[20px]">
            <a href="#" className="rounded-[100%] py-[7px] px-[9px] bg-[#e8e8e8]">
              <Image src="https://assets.nobroker.in/nb-new/public/Common/social/facebook.svg" alt="" width={19} height={19} loading="lazy" />
            </a>
            <a href="#" className="rounded-[100%] py-[7px] px-[9px] bg-[#e8e8e8]">
              <Image src="https://assets.nobroker.in/nb-new/public/Common/social/twitter.svg" alt="" width={19} height={19} loading="lazy" />
            </a>
            <a href="#" className="rounded-[100%] py-[7px] px-[9px] bg-[#e8e8e8]">
              <Image src="https://assets.nobroker.in/nb-new/public/Common/social/instagram.svg" alt="" width={19} height={19} loading="lazy" />
            </a>
            <a href="#" className="rounded-[100%] py-[7px] px-[9px] bg-[#e8e8e8]">
              <Image src="https://assets.nobroker.in/nb-new/public/Common/social/linkedin.svg" alt="" width={19} height={19} loading="lazy" />
            </a>
            <a href="#" className="rounded-[100%] py-[7px] px-[9px] bg-[#e8e8e8]">
              <Image src="https://assets.nobroker.in/nb-new/public/Common/social/youtube.svg" alt="" width={19} height={19} loading="lazy" />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-center py-[20px] text-sm sm:text-base">
            © 2013-25 NoBroker Technologies Solutions Pvt. Ltd.
          </div>

        </div>
        <div className='h-[80px]'></div>

      </div>
    </div>
  )
}

export default Footer