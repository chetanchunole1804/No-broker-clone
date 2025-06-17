import React from 'react';

const New_Builder = () => {
  return (
    <div className="flex md:flex-row md:hidden gap-6 items-center p-6 ">
      {/* Background Image Section */}
      <div className="w-[140px] h-[140px] overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg")',
            backgroundPositionX: '-36px',
            backgroundPositionY: '455px',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'scroll',
          }}
        ></div>
      </div>

      {/* Text Content Section */}
      <div className="mt-4 t">
        <h1 className="text-lg font-semibold text-gray-800">New Builder Projects</h1>
        <p className="text-gray-600 mt-2 text-sm">
          Search for your dream home in new builder projects.
        </p>
        <h2 className="text-blue-500 mt-4 cursor-pointer hover:underline">
          Explore →
        </h2>
      </div>
    </div>
  );
};

export default New_Builder;
