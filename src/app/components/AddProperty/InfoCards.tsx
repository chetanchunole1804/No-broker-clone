import React from "react";
import Image from "next/image";

const InfoCards: React.FC = () => {

  const intrusted = ()=>{
    
  }
  return (
    <div className="w-[16%] bg-white sm:block hidden p-3 text-sm">
      <div className="border-[2px] border-gray-100 flex flex-col justify-center text-center p-2 pt-4">
        <h4 className="font-semibold mb-1">Rental Agreement</h4>
        <p className="font-extralight">Home Delivered</p>
        <Image
          src="https://assets.nobroker.in/nb-new/public/Pyp-Form/rentalAgreement.png"
          alt="bnm"
          width={100}
          height={100}
          className="w-24 my-3"
        > </Image>
        <p className=" leading-relaxed">No need to visit Government office</p>
        <button className="py-2 w-24 mx-auto rounded-sm text-white px-1 bg-[#009587]">
          Get It Now
        </button>
      </div>
      <div className="border-[2px] border-gray-100 flex flex-col justify-center text-center p-1 pt-4 mt-3">
        <h4 className="text-[#425d78] text-[17px]">Get Tenants Faster</h4>
        <p className="mt-5">
          Subscribe to our owner plans and find Tenants quickly and with ease
        </p>
        <div className="flex flex-col items-center justify-center py-5">
          <Image
            src="https://assets.nobroker.in/nb-new/public/Pyp-Form/privacyLogo.svg"
            alt="sdf"
            className="w-10"
          > </Image>
          <p className="text-xs text-[#425d78] mb-3">Privacy</p>
          <Image
            src="https://assets.nobroker.in/nb-new/public/Pyp-Form/promotedListing.svg"
            alt="sdf"
            className="w-10"
            width={40}
            height={40}
          />
          <p className="text-xs text-[#425d78] mb-3">Promoted Listing</p>
          <Image
            src="https://assets.nobroker.in/nb-new/public/Pyp-Form/facebookLogo.svg"
            alt="sdf"
            className="w-10"
            width={40}
            height={40}
          />
          <p className="text-xs text-[#425d78] mb-3">Social Marketing</p>
          <Image
            src="https://assets.nobroker.in/nb-new/public/Pyp-Form/rentConsultation.svg"
            alt="sdf"
            className="w-10"
            width={40}
            height={40}
          />
          <p className="text-xs text-[#425d78] mb-3">Price Consultation</p>
        </div>
        <button className="py-2 w-24 mx-auto rounded-sm text-white px-1 bg-[#009587] mb-3" onClick={intrusted}>Show Intrest</button>
      </div>
    </div>
  );
};

export default InfoCards;
