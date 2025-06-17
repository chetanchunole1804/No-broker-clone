import React from "react";
import { Assisted_Plans_m } from "../Data";

const Assisted_Plan = () => {
  return (
    <div className="p-5 bg-[#EAE9F5] block md:hidden">
      <h1 className="text-xl tracking-wide font-semibold mb-6">Assisted Plans</h1>

      <div className="flex flex-nowrap overflow-auto  items-start gap-6">
        {Assisted_Plans_m.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-start bg-white p-4 rounded-lg shadow-md ${
              index === Assisted_Plans_m.length - 1 ? "h-32  w-32" : "h-32 w-auto"
            }`}
          >
            {/* Dynamic Background Icon */}
            <div
              className="w-10 h-10"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: item.img_position,
                backgroundSize: "auto",
                backgroundRepeat: "repeat",
              }}
            ></div>

            {/* Title */}
            <h1 className="text-xs text-gray-700 w-40 mt-4">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assisted_Plan;
