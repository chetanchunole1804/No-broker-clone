import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  return (
    <div className="flex flex-col text-sm mb-5">
      <label className='font-semibold text-[#635b63] mb-1'>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className='border border-gray-300 w-64 py-2 px-2 text-[#837783]'>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
