"use client";
import React, { JSX, useState } from "react";
import ProgressBar from "../AddProperty/ProgressBar";
import InfoCards from "./InfoCards";
import Sidebar from "./Sidebar";
import PropertyDetails from "./AddPropertyForms/PropertyDetails";
import MobileHeader from "./MobileHeader";
import LocalityDetails from "./AddPropertyForms/LocalityDetails";
import RentalDetails from "./AddPropertyForms/RentalDetails";
import Amenities from "./AddPropertyForms/Amenities";
import Gallery from "./AddPropertyForms/Gallery";
import Schedule from "./AddPropertyForms/Schedule";
import SaveContinueButton from "./SaveContinueButton";

const PropertyDetailsForm: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("PropertyDetails");
  //"PropertyDetails" change from gallery
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const pageChange = (page: string) => {
    setActivePage(page);
  };

  const pageComponents: Record<string, JSX.Element> = {
    PropertyDetails: <PropertyDetails />,
    LocalityDetails: <LocalityDetails />,
    RentalDetails: <RentalDetails />,
    Amenities: <Amenities />,
    Gallery: <Gallery />,
    Schedule: <Schedule />,
  };

  const pages = Object.keys(pageComponents);
  const currentPageIndex = pages.indexOf(activePage);

  // Calculate progress: Start at 0% and increase by 20% for each page
  let progress = (currentPageIndex / (pages.length - 1)) * 90; // 90% for the last page
  if (isComplete) progress = 100; // 100% if all fields are completed

  const handleNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setActivePage(pages[currentPageIndex + 1]);
    }
  };

  const handleComplete = () => {
    if (currentPageIndex === pages.length - 1) {
      setIsComplete(true);
    }
  };

  const handleBackPage = () => {
    if (currentPageIndex > 0) {
      setActivePage(pages[currentPageIndex - 1]);
    }
  };

  return (
    <div className="sm:w-[88%] mx-auto h-full sm:pb-10 pt-[4px]">
      <ProgressBar progress={progress} />
      <MobileHeader />
      <main className="flex gap-3 mt-2">
        <Sidebar changePage={pageChange} activePage={activePage} />
        {pageComponents[activePage]}
        <InfoCards />
      </main>
      <SaveContinueButton
        currentPageIndex={currentPageIndex}
        totalPages={pages.length}
        onNext={handleNextPage}
        onComplete={handleComplete}
        onBack={handleBackPage}
      />
    </div>
  );
};

export default PropertyDetailsForm;
