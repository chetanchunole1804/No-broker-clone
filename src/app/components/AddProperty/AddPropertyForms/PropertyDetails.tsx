import React, { useState } from "react";
import propertyData from "../AddPropertyData.json";
import HelpInterest from '../HelpInterest';

interface Option {
  option: string;
}

interface PropertyField {
  label: string;
  TypeOption?: Option[];
  FlatTypeOption?: Option[];
  [key: string]: string | Option[] | undefined;
}

interface PropertyDetailsData {
  id: number;
  name: string;
  icon: string;
  link: string;
  key: string;
  PropertyData: PropertyField[];
}

const PropertyDetails = () => {
  const [selectedFields, setSelectedFields] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const propertyDetailsData = (propertyData as unknown as PropertyDetailsData[]).find(
    (item) => item.id === 1
  )?.PropertyData || [];

  const handleFieldChange = (label: string, value: string) => {
    setSelectedFields(prev => ({
      ...prev,
      [label]: value
    }));

    // Clear error when field is filled
    if (value) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[label];
        return newErrors;
      });
    }
  };

  return (
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Property Details
            {/* // "icon": "https://assets.nobroker.in/nb-new/public/MaterialIcons/HomeOutlined.png", */}
      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>
      
      <div className="mt-8">
        {propertyDetailsData.map((field, index) => (
          <div key={index} className="mb-6">
            <label className="block text-sm font-semibold text-[#635b63] mb-2">
              {field.label}
            </label>
            <select
              className={`w-full p-2 border ${errors[field.label] ? 'border-red-500' : 'border-gray-300'} rounded`}
              value={selectedFields[field.label] || ""}
              onChange={(e) => handleFieldChange(field.label, e.target.value)}
            >
              <option value="">Select</option>
              {(field.TypeOption || field.FlatTypeOption || []).map((opt, i) => (
                <option key={i} value={opt.option}>
                  {opt.option}
                </option>
              ))}
            </select>
            {errors[field.label] && (
              <p className="text-red-500 text-xs mt-1">{errors[field.label]}</p>
            )}
          </div>
        ))}
      </div>
      
      <HelpInterest />
    </div>
  );
};

export default PropertyDetails;
