import React,{useState} from "react";

interface AvailableAmenitiesProps {
  label: string; // Corrected the prop name
  customStyle: React.CSSProperties; // Explicitly typing for CSS styles

}

const AvailableAmenities: React.FC<AvailableAmenitiesProps> = ({ label, customStyle }) => {

  const [availAmenities, setAvailAmenities] = useState<string | null>(null);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setAvailAmenities(label); // Set the label when checked
      console.log(availAmenities)
    } else {
      setAvailAmenities(null); // Clear the value when unchecked
    }
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <input type="checkbox"
          className="pr-3 p-2"
          checked={availAmenities === label} // Check if the current label is selected
          onChange={handleCheckboxChange} // Handle change
        />
        <div
          className="h-[25px] w-[25px] flex items-center bg-no-repeat"
          style={customStyle} // Using customStyle correctly
        ></div>
        <span>{label}</span> {/* Corrected the prop usage */}
      </div>
    </div>
  );
};

export default AvailableAmenities;
