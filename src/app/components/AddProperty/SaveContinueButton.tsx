// import React from "react";

// // interface SaveContinueButtonProps {
// //   onClick: () => void;
// // }
// // : React.FC<SaveContinueButtonProps>

// interface SaveAndContinueButtonProps {
//   currentPageIndex: number;
//   totalPages: number;
//   onNext: () => void;
//   onComplete: () => void;
// }


// const SaveContinueButton: React.FC<SaveAndContinueButtonProps> = ({
//   currentPageIndex,
//   totalPages,
//   onNext,
//   onComplete,
// }) => {
//   return (
//     <div className="w-screen h-[60px] bg-white shadow-[0px_5px_10px_0px_gray] flex gap-5 items-center justify-center fixed bottom-0 left-0 z-30">
//       {/* <button className="px-5 py-2 bg-[#787676] font-semibold rounded-sm text-white" >Back</button> */}
//       {/* <button className="bg-[#fd3752] px-5 py-2 text-white font-semibold rounded-sm" type="submit">Save & Continue</button> */}
//       {currentPageIndex < totalPages - 1 ? (
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//           onClick={onNext}
//         >
//           Save and Continue
//         </button>
//       ) : (
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded"
//           onClick={onComplete}
//         >
//           Complete
//         </button>
//       )}
//     </div>
//   );
// };

// export default SaveContinueButton;

import React from "react";

interface SaveAndContinueButtonProps {
  currentPageIndex: number;
  totalPages: number;
  onNext: () => void;
  onBack: () => void; // New function for going back
  onComplete: () => void;
}

const SaveContinueButton: React.FC<SaveAndContinueButtonProps> = ({
  currentPageIndex,
  totalPages,
  onNext,
  onBack,
  onComplete,
}) => {
  return (
    <div className="w-screen h-[60px] bg-white shadow-[0px_5px_10px_0px_gray] flex gap-5 items-center justify-center fixed bottom-0 left-0 z-30">
      {/* Back Button */}
      <button
        className={`px-5 py-2 font-semibold rounded-sm text-white ${
          currentPageIndex === 0
            ? "hidden"
            : "bg-[#787676] hover:bg-[#5f5d5d]"
        }`}
        onClick={onBack}
        disabled={currentPageIndex === 0}
      >
        Back
      </button>
      
      {/* Save and Continue Button */}
      {currentPageIndex < totalPages - 1 ? (
        <button
          className="bg-[#fd3752] px-5 py-2 text-white font-semibold rounded-sm" 
          type="submit"
          onClick={onNext}
        >
          Save and Continue
        </button>
      ) : (
        <button
          className="bg-[#fd3752] px-5 py-2 text-white font-semibold rounded-sm"
          onClick={onComplete}
        >
          Finish posting
        </button>
      )}
    </div>
  );
};

export default SaveContinueButton;
