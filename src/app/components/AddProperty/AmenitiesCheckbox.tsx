

import React, { useState } from "react";

interface AmenitiesCheckboxProps {
  label: string;
  // icon?: React.ReactNode;
}

const AmenitiesCheckbox: React.FC<AmenitiesCheckboxProps> = ({ label}) => {
  const [value, setValue] = useState<"yes" | "no" | null>();

  const handleChange = (newValue: "yes" | "no") => {
    setValue(newValue);
    console.log(label, value)
  };
  return (
    <div>
      <div className="flex ml-4 gap-1">
        <label className="flex items-center">
          <input
            type="radio"
            name={label}
            value="no"
            checked={value === "no"}
            onChange={() => handleChange("no")}
            className="hidden peer"
            required
          />
          <span
            className={`px-4 py-1 border rounded cursor-pointer peer-checked:bg-red-100 peer-checked:text-red-600 peer-checked:border-red-500 bg-white text-gray-600 border-gray-300`}
          >
            No
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name={label}
            value="yes"
            checked={value === "yes"}
            onChange={() => handleChange("yes")}
            className="hidden peer"
            required
          />
          <span
            className={`px-4 py-1 border rounded cursor-pointer peer-checked:bg-green-100 peer-checked:text-green-600 peer-checked:border-green-500 bg-white text-gray-600 border-gray-300`}
          >
            Yes
          </span>
        </label>
      </div>
    </div>
  );
};

export default AmenitiesCheckbox;
