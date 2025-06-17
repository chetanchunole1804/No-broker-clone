"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ContactNo from "./ContactNo";
import MenuBar from "./MenuBar";
 
const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [menuItem, setMenuItem] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignUp = () => {
    setUser(true); 
    setIsFormOpen(true);
  };

  const router = useRouter();

  const handleClick = () => {
    router.push("/AddProperty");
  };

  const showMenuItem = ()=>{
   setMenuItem(!menuItem)
  }

  return (
    <div>
      <div className="w-full flex md:justify-between bg-white shadow-md  z-30 fixed items-center gap-2 px-5 py-3 nav_box_shadow flex-wrap">
        <div
          className="flex md:hidden gap-2 justify-center items-center cursor-pointer"
          onClick={toggleSidebar}
        >
          <Image
            src="https://assets.nobroker.in/nb-new/public/hamburger-menu.svg"
            width={24}
            height={24}
            alt="Hamburger Icon"
          />
        </div>
        <div>
          <Image
            src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg"
            alt="NoBroker Logo"
            width={120}
            height={40}
            unoptimized
          />
        </div>
        <div className="hidden md:flex right_nav h-fit text-sm justify-center items-center gap-4">
          <div className="border rounded-sm flex justify-center items-center h-8 px-2 text-center hover:bg-gray-100">
            <p>Pay rent</p>
          </div>
          <div
            onClick={handleClick}
            className="rounded-sm text-white bg-[#007A6F] justify-center text-[14px] h-8 items-center flex px-2 hover:bg-[#005f55]"
          >
            For Property owners
          </div>
          <div className="flex gap-2 justify-center items-center ">
            {/* profile data will show */}
            {user ? (
              <div className="flex items-center gap-2">
                <div className="profile w-9 h-9 rounded-full flex justify-center items-center border border-gray-400">
                  <Image
                    src="https://assets.nobroker.in/nb-new/public/MaterialIcons/accountCircle.svg"
                    alt="User Profile"
                    width={36}
                    height={36}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-gray-400 border-r pr-2">
                  Chetan Chunole
                </span>
                <Image
                  src="https://assets.nobroker.in/nb-new/public/shortlistNotification.svg"
                  alt="Notifications"
                  width={24}
                  height={24}
                  className="border-r pr-2"
                />
                <Image
                  src="data:image/png;base64,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"
                  alt="Menu"
                  width={24}
                  height={24}
                  className="w-6 opacity-60 border-r pr-2"
                />
              </div>
            ) : (
              <h1
                onClick={handleSignUp}
                className="cursor-pointer border-r pr-2"
              >
                Sign up
              </h1>
            )}
          </div>
          {isFormOpen && <ContactNo handleClose={handleSignUp} />}

          <div className="border-r pr-4">
            <h1 onClick={handleSignUp} className=" cursor-pointer">
              Log in
            </h1>
          </div>
          <div>
            <div className="flex gap-1 items-center cursor-pointer" onClick={showMenuItem}>
              <Image
                src="https://img.icons8.com/?size=50&id=3096&format=png"
                alt="menu"
                className="w-4 h-4"
                width={24}
                height={24}
              ></Image>
              <p >Menu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-20 top-0 left-0 h-full ${
          isSidebarOpen ? "w-64 md:w-80" : "w-0"
        } bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-hidden`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-gray-600 hover:text-black"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div>
        <ul className="p-4">
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Home</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">About</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Services
          </li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
      {menuItem && <MenuBar/>}
    </div>
  );
};

export default Nav;
