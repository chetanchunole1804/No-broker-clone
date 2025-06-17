import React, { useState } from "react";
import Image from "next/image";

interface RentalCheckboxes {
  [key: string]: boolean;
}

const RentalDetails = () => {
  const [rentType, setRentType] = useState("amount");
  const [maintenance, setMaintenance] = useState(false);
  const [selectedValues, setSelectedValues] = useState<RentalCheckboxes>({});

  const handleRentTypeChange = (value: string) => {
    setRentType(value);
  };

  const handleMaintenanceChange = () => {
    setMaintenance(!maintenance);
  };

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setSelectedValues((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  return (
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Rental Details
            {/* "icon": "https://assets.nobroker.in/nb-new/public/MaterialIcons/Business.png", */}

      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]" />

      <div className="mt-8">
        <div className="flex items-center mb-4">
          <span className="mr-4">Rent Type:</span>
          <button
            className={`px-4 py-2 mr-2 ${
              rentType === "amount" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => handleRentTypeChange("amount")}
          >
            Fixed Amount
          </button>
          <button
            className={`px-4 py-2 ${
              rentType === "range" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => handleRentTypeChange("range")}
          >
            Range
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="mr-2">
            <Image
              src="/assets/meter.svg"
              alt="Maintenance"
              width={24}
              height={24}
            />
          </div>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={maintenance}
              onChange={handleMaintenanceChange}
              className="mr-2"
            />
            <span>Include maintenance charges</span>
          </label>
        </div>

        {/* Additional Features */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Additional Features</h2>
          <div className="grid grid-cols-2 gap-4">
            {["Security Deposit", "Parking", "Pet Friendly", "Furnished", "Power Backup", "Gas Pipeline"].map(
              (feature) => (
                <label key={feature} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedValues[feature] || false}
                    onChange={(e) => handleCheckboxChange(feature, e.target.checked)}
                    className="mr-2"
                  />
                  <span>{feature}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Property Images */}
        {selectedValues["Furnished"] && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Property Images</h2>
            <div className="grid grid-cols-3 gap-4">
              {["Living Room", "Kitchen", "Bedroom"].map((room) => (
                <div key={room} className="relative">
                  <div className="w-full h-48 relative">
                    <Image
                      src={`/assets/${room.toLowerCase().replace(" ", "-")}.jpg`}
                      alt={room.toLowerCase()}
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                  <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    {room}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentalDetails;
