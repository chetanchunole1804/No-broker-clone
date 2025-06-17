import React from 'react';
import { legalService } from '../Data';

const Legal_services = () => {
  return (
    <div className="bg-white p-6 md:hidden block">
      <h1 className="text-xl text-[#464646] font-semibold mb-6">Legal Services</h1>

      {/* Container for Services */}
      <div className="flex justify-between items-center gap-4">
        {legalService.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  "
          >
            <div
              className="w-14 h-14 rounded-full bg-[#F8F8F8]"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: item.img_position,
                backgroundSize: 'auto',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>

            {/* Title */}
            <div className="text-xs text-center font-semibold text-[#464646] mt-4">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legal_services;
