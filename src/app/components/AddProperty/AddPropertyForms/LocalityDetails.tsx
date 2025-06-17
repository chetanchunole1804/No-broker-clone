import React, { useState } from "react";
import Image from "next/image";
import localityData from "../AddPropertyData.json";
import Map from "../Map";
import HelpInterest from "../HelpInterest";

interface LocalityOption {
  option: string;
}

interface LocalityField {
  label: string;
  options: LocalityOption[];
}

interface LocalityData {
  id: number;
  name: string;
  icon: string;
  link: string;
  key: string;
  localityData?: LocalityField[];
}

const LocalityDetails = () => {
  const [selectedFields, setSelectedFields] = useState<{ [key: string]: string }>({});
  const [landmark, setLandmark] = useState("");
  
  const data = localityData as unknown as LocalityData[];
  const localityDetailsData = data.find(item => item.id === 2)?.localityData || [];

  const handleFieldChange = (label: string, value: string) => {
    setSelectedFields(prev => ({
      ...prev,
      [label]: value
    }));
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLandmark(event.target.value);
  };

  const handleLocationSelect = (): void => {
    throw new Error("Function not implemented.");
  };

  return (
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Locality Details
            {/* "icon": "https://assets.nobroker.in/nb-new/public/MaterialIcons/PinDropOutlined.png", */}

      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>
      
      <div className="flex justify-between">
        <div className="w-[48%]">
          {localityDetailsData.map((field, index) => (
            <div key={index} className="flex flex-col text-sm mb-10 mt-5">
              <label className="font-semibold text-[#635b63] mb-2">
                {field.label}
              </label>
              <select
                className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1"
                value={selectedFields[field.label] || ""}
                onChange={(e) => handleFieldChange(field.label, e.target.value)}
                required
              >
                <option value="">Select</option>
                {field.options?.map((option, i) => (
                  <option key={i} value={option.option}>
                    {option.option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="w-[48%]">
          <div className="flex flex-col text-sm mb-5 mt-5">
            <label htmlFor="location" className="font-semibold text-[#635b63] mb-1">
              Location*
            </label>
            <div className="flex justify-between items-center border border-gray-300 w-full py-2 px-2 text-sm">
              <span>
                <Image
                  src="https://assets.nobroker.in/nb-new/public/MaterialIcons/LocationOn.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="w-5"
                />
              </span>
              <input
                id="location"
                type="text"
                value={landmark}
                onChange={handleLocationChange}
                placeholder="Enter location / society name"
                className="focus:outline-none w-80 pl-3"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Map onLocationSelect={handleLocationSelect} />
      <HelpInterest />
    </div>
  );
};

export default LocalityDetails;
