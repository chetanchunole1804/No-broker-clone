import React from "react";
import Image from "next/image";

interface ProgressBarProps {
  progress: number; // Progress percentage
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="sm:block hidden ">
      <div className="flex justify-between bg-white px-5 py-2">
        <Image
          src="https://assets.nobroker.in/nb-new/public/Pyp-Form/resale_logo.png"
          alt="Logo"
          width={120}
          height={40}
        />
        <div className="flex gap-5 items-center relative">
          {/* Static background bar */}
          <div className="relative w-64 h-1 bg-gray-300 overflow-hidden">
            {/* Dynamic progress bar */}
            <div
              style={{ width: `${progress}%`, transition: "width 0.7s" }}
              className="bg-teal-600 h-full"
            ></div>
          </div>
          <span className="text-sm">{progress}% Done</span>
          <button className="bg-[#fd3751] py-2 px-3 rounded-sm text-sm text-white font-medium">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
