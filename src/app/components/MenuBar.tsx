import React from "react";
import menuItem from "@/app/components/MenuList.json";

const MenuBar = () => {
  return (
    <div className="w-60 bg-white shadow h-[90vh] fixed top-12 right-0 z-50 px-5 border pt-1 text-gray-600 text-[13px] ">
      <ul>
        {menuItem.map((item) => (
          <li key={item.id} className="py-3 border-b hover:text-teal-600 cursor-pointer">
            {item.title}
            {item.plans && (
              <ul className="">
                {item.plans.map((plan) => (
                  <li key={plan.id} className="list-none py-3 border-b">{plan.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
