import React, { useState } from "react";
import Image from "next/image";

const ProvidingAvailbility = () => {
  const [isPaintingDisabled, setIsPaintingDisabled] = useState(false);

  const handlePaintingChange = () => {
    setIsPaintingDisabled(!isPaintingDisabled);
  };

  return (
    <div>
      <div className="border bg-gray-100 px-2 py-4">
        <div className="flex mt-2">
          <div className="mr-4">
            <p className="font-semibold mb-1">
              Freshly Painted House gets Rented
            </p>
            <p className="font-semibold">out 73% faster</p>
          </div>
          <Image
            src="https://assets.nobroker.in/nb-new/public/Home-Services/painting.jpg"
            alt="House Painting"
            width={80}
            height={64}
            className="w-20 h-16 rounded-md"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="flex bg-gray-300 rounded-full px-1 text-[10px] items-center">
            <Image
              src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
              alt="Check"
              width={12}
              height={12}
              className="w-3"
            />{" "}
            <p>Price Match Guarantee</p>
          </span>
          <span className="flex bg-gray-300 rounded-full px-1 text-[10px] items-center">
            <Image
              src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
              alt="Check"
              width={12}
              height={12}
              className="w-3"
            />{" "}
            <p>1 Year warranty</p>
          </span>
        </div>
        <p className="mt-2">
          Get Professional Painting Starting at{" "}
          <span className="font-semibold">₹ 5/sqft</span>
        </p>
        <div className="flex gap-2  mt-4 justify-center">
          <button className="bg-gray-50 border py-2 px-2 rounded font-semibold">
            Tell me the price{" "}
          </button>
          <button 
            className="border py-2 px-2 rounded font-semibold cursor-pointer"
            style={{ 
              backgroundColor: isPaintingDisabled ? "#009587" : "#f9fafb",
              color: isPaintingDisabled ? "white" : "black"
            }}
            onClick={handlePaintingChange}
          >
            I do not want Painting
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProvidingAvailbility;
