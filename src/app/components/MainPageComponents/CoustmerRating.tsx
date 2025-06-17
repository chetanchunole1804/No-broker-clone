import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CoustmerRate } from '@/app/components/MainPageComponents/Data';
import Image from 'next/image';

function CoustmerRating() {
  return (
    <div className='bg-[#334a5c] text-[#fff] p-[40px] font-sans hidden md:block'>
      <div className='text-3xl text-center'>Our Customers Love Us</div>
      
      <div className='my-[30px] text-center'>
        <iframe
          src="https://www.youtube.com/embed/0ChlgxhXVws"
          className='inline h-[320px] w-[560px]'
        ></iframe>
      </div>

      {/* Rating Data Carousel */}
      <div className="w-full relative"> 
        <Carousel
          className="w-full"
          opts={{
            align: "start", 
            slidesToScroll: 2, 
          }}
        >
          <CarouselContent className='flex'>
            {CoustmerRate.map((item, index) => (
              <CarouselItem key={index} className='basis-1/3 flex justify-center'>
                <div className='bg-white text-black p-4  w-[95%] shadow-md flex flex-col items-start text-center'>
                <div className=' flex mb-4'>
                  <Image
                    src={item.img || "https://via.placeholder.com/50"} // Default placeholder image if img is empty
                    alt={item.name}
                    width={50}
                    height={50}
                    className='rounded-full '
                  />
                  <div className='pl-3'>
                  <div className='font-sans mt-2'>{item.name}</div>
                  <div className='flex'>
                  <Image src={item.star} alt='rating' width={12} height={2} />
                  <Image src={item.star} alt='rating' width={12} height={2} />
                  <Image src={item.star} alt='rating' width={12} height={2} />
                  <Image src={item.star} alt='rating' width={12} height={2} />
                  <Image src={item.star} alt='rating' width={12} height={2} />
                  </div>
                  </div>
                  </div>
                  <h3 className='mt-3 font-bold text-gray-800 text-start text-[15px]'>{item.heading}</h3>
                  <p className='mt-2 text-start text-sm'>{item.des}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>

      <div className='text-center underline mt-6'>
        <a href="#">More Testimonials</a>
      </div>
    </div>
  );
}

export default CoustmerRating;