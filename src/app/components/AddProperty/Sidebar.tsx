import React from "react";
import propertyData from "./AddPropertyData.json";
import Image from "next/image";


interface PropertyItem {
  name: string;
  link: string;
  icon: string;
  key: string;
}

interface SidebarProps {
  changePage: (page: string) => void;
  activePage: string;
}

const propertyDataTyped: PropertyItem[] = propertyData;

const Sidebar: React.FC<SidebarProps> = ({ changePage, activePage }) => {

  return (
    <aside className="bg-white w-[17%] h-auto sm:block hidden">
      <ul>
        {propertyDataTyped.map((item, index) => (
          <li key={index} className="relative">
            <a
              href={item.link}
              className="flex px-2 items-center py-4 text-[#837783]"
              onClick={() => changePage(item.key)}
            >
              {activePage === item.key && (
                <div className="w-1 h-full bg-[#009587] absolute left-0"></div>
              )}

              <div className="flex gap-3 items-center ps-3">
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-8"
                ></Image>
                {item.name}
              </div>
            </a>
            <hr />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

