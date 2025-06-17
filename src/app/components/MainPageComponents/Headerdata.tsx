import React, { useState } from 'react';
import { AllData } from '@/app/components/MainPageComponents/sitedata/PropertiesFlatsforSale';

// Define types for the data structure
type PropertyData = typeof AllData;
type PropertyKey = keyof PropertyData;

const Headerdata: React.FC = () => {
  const sectionKeys = Object.keys(AllData) as PropertyKey[];
  const [activeTab, setActiveTab] = useState<PropertyKey>(sectionKeys[0]);

  return (
    <div className="parent">
      {/* Header Tabs with Horizontal Scroll for Mobile */}
      <div className="bg-[#ededed66] overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex w-max md:w-full md:flex-wrap">
          {sectionKeys.map((section) => (
            <div
              key={section}
              onClick={() => setActiveTab(section)}
              className={`px-5 md:px-[10px] min-w-[10.14%] py-6 md:py-6 text-center cursor-pointer font-semibold text-[15px] md:text-[17px]
                ${activeTab === section ? 'text-blue-600 border-b-4 border-blue-600' : 'text-[#464646] border-b-3'}`}
            >
              {section}
            </div>
          ))}
        </div>
      </div>

      {/* Content Display with Scroll */}
      <div className="bg-white py-4 px-6 md:px-[40px] overflow-x-auto scrollbar-hide">
        <div className="flex w-max md:w-full flex-wrap gap-4">
          {AllData[activeTab]?.body && Object.keys(AllData[activeTab].body).length > 0 ? (
            Object.entries(AllData[activeTab].body).map(([city, categories]) => (
              <div key={city} className="p-3 min-w-[300px] md:w-auto">
                <div className="content">
                  {Object.keys(categories).length > 0 ? (
                    Object.entries(categories as Record<string, string[]>).map(([category, properties]) => (
                      <div key={category}>
                        <div className="text-[14px] font-semibold mb-2">{category}</div>
                        <ul className="text-[12px] text-gray-700">
                          {Array.isArray(properties) && properties.length > 0 ? (
                            properties.map((property, idx) => (
                              <li key={idx} className="mb-2">{property}</li>
                            ))
                          ) : (
                            <li className="text-gray-500"></li>
                          )}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul className="text-[12px] text-gray-700">
                      {Array.isArray(categories) && categories.length > 0 ? (
                        categories.map((property, idx) => (
                          <li key={idx} className="mb-2">{property}</li>
                        ))
                      ) : (
                        <li className="text-gray-500"></li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center text-gray-500 p-5">
              No data available for {activeTab}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Headerdata;