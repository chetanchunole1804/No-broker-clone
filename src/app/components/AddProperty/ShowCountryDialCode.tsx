import React, { useState } from "react";
import countries from "./ContriesList"; // Adjust the path as necessary
import Image from "next/image";

interface Country {
  name: string;
  dialCode: string;
  code: string;
  flag: string;
}

const CustomDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-sm">
      {/* Replace img tags with Image component */}
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-2 border rounded-md"
        onClick={toggleDropdown}
      >
        {selectedCountry.flag && (          <Image
            src={selectedCountry.flag || ''}
            alt={`${selectedCountry.name} flag`}
            width={20}
            height={15}
            unoptimized
          />
        )}
        <span>{selectedCountry.dialCode}</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute left-0 z-10 mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {countries.map((country) => (
            <button
              key={country.code}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
              onClick={() => handleSelect(country)}
            >
              {country.flag && (                <Image
                  src={country.flag || ''}
                  alt={`${country.name} flag`}
                  width={20}
                  height={15}
                  unoptimized
                />
              )}
              <span>{country.dialCode}</span>
              <span className="ml-2">{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

