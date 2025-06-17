import React from "react";
import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className="sm:hidden bg-[#fd3751] h-14 flex items-center justify-around text-white fixed w-full top-0">
      <Image
        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/ArrowBackIOSWhite.svg"
        alt="back"
        width={24}
        height={24}
      />
      <div className="flex gap-3 items-center">
        <span className="bg-white text-[#fd3751] rounded-full px-3 py-1 font-mono font-extrabold test-xl">1</span>
        <p className="font-medium text-lg">Property Details</p>
      </div>
      <div></div>
    </div>
  );
};

export default MobileHeader;
