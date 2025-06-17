import React from "react";
import Image from "next/image";
import { rentServices } from "@/app/components/MainPageComponents/Data";

const RentServices = () => {
  return (
    <div className="md:block hidden">
      {/* Header Section */}
      <div className="w-full justify-center items-center p-4 bg-[#384D6C]">
        <div className="flex justify-center items-center gap-2">
          <p className="text-white text-sm font-thin">
            Discover premium rental services with NoBroker
          </p>
        </div>
      </div>

      {/* Rent Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
        {rentServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3  bg-white  transition-shadow"
          >
            <Image
              src={service.img}
              width={60}
              height={60}
              alt={service.name}
              className="mb-2"
            />
            <p className="text-sm font-medium text-gray-700">{service.name}</p>
          </div>
        ))}
        <h2 className="text-[#000000]">3 Lacs + Services booked in last 3 months | 4.5</h2>
      </div>
    </div>
  );
};

export default RentServices;
