import React, { useState } from "react";
import Image from "next/image";

interface TimeScheduleProps {
    label: string; // Label for the picker
    onTimeSelect: (time: string) => void; // Callback to send the selected time back to the parent
  }

const TimeSchedule: React.FC<TimeScheduleProps> = ({ label, onTimeSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleselectTime = () => {
    setShowDropdown((prev) => !prev)
  };


  const times = Array.from({ length: 48 }, (_, index) => {
    const hours = Math.floor(index / 2);
    const minutes = index % 2 === 0 ? "00" : "30";
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHours}:${minutes} ${period}`;
  });

  const handleItemClick = (time: string) => {
    setSelectedTime(time);
    onTimeSelect(time);
    
};

  return (
    <div className="border px-4  py-2  rounded" onClick={handleselectTime}>
      <div className="flex items-center gap-2">
      <Image
        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Schedule.png"
        alt=""
      ></Image>
      {selectedTime ? <span>{selectedTime}</span> : <span className="text-sm text-gray-400">{label}</span>}
      </div>
      {showDropdown ? (
        <ul className=" cursor-pointer h-40 overflow-auto">
          {times.map((time) => (
            <li
              key={time}
              onClick={() => handleItemClick(time)}

            >
              {time}
            </li>
          ))}
        </ul>
      ):null}
    </div>
  );
};

export default TimeSchedule;
