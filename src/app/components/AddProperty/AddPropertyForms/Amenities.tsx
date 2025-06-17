import React, { useState } from "react";
import Image from "next/image";
import AmenitiesCheckvox from "../AmenitiesCheckbox";
import SuggessionBox from "../SuggessionBox";
import AvailableAmenities from "../AvailableAmenities";
import ShowCountryDialCode from "../ShowCountryDialCode";

const Amenities = () => {
  const [bedRoom, setBedRoom] = useState<number>(0);
  const [balcony, setBalcony] = useState<number>(0);

  const roomIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setBedRoom((room) => room + 1);
  };

  const roomDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setBedRoom((room) => (room > 0 ? room - 1 : 0));
  };
  const balconyIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setBalcony((room) => room + 1);
  };

  const balconyDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setBalcony((room) => (room > 0 ? room - 1 : 0));
  };

  return (
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Provide additional details about your property to get maximum visibilty
      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>

      <form action="" className="text-sm text-[#837783] mt-4">
        <div className="flex w-full justify-between gap-2">
          <div>
            <label htmlFor="">Bathroom(s)*</label>
            <div className="w-full border border-gray-300 rounded flex justify-between gap-16 px-1 py-1 mt-2 items-center">
              <button
                type="button"
                onClick={roomDecrement}
                className="w-8 rounded-md font-bold text-2xl bg-gray-300"
              >
                -
              </button>
              <span>{bedRoom}</span>
              <button
                type="button"
                onClick={roomIncrement}
                className="w-8 rounded-md font-bold text-2xl bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="">Balcony</label>
            <div className="w-full border border-gray-300 rounded flex justify-between gap-16 px-1 py-1 mt-2 items-center">
              <button
                type="button"
                onClick={balconyDecrement}
                className="w-8 rounded-md font-bold text-2xl bg-gray-300"
              >
                -
              </button>
              <span>{balcony}</span>
              <button
                type="button"
                onClick={balconyIncrement}
                className="w-8 rounded-md font-bold text-2xl bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="relative">
            <label htmlFor="" className="font-semibold">
              Water Supply
            </label>
            <div>              <Image
                src="https://assets.nobroker.in/static/img/postYourProperty/icon/water.png"
                alt="Water icon"
                width={20}
                height={20}
                className="absolute top-9 left-2 w-5"
              />
              <select
                className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1 mt-2 pl-8"
                name=""
                id=""
              >
                <option value="Select" selected disabled>
                  Select
                </option>
                <option value="Corporation">Corporation</option>
                <option value="Boarell">Boarell</option>
                <option value="both">both</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2 mt-7 text-xs">
          <div className="flex items-center border border-gray-300 px-1 py-1 w-[33%] gap-2 rounded">            <Image
              src="https://assets.nobroker.in/nb-new/public/Pyp-Form/gym_black_new.svg"
              alt="Gym icon"
              width={20}
              height={20}
            />
            <p>Gym*</p>
            <AmenitiesCheckvox label="Gym" />
          </div>
          <div className="flex items-center border border-gray-300 px-1 py-1 w-[33%] gap-2 rounded">            <Image
              src="https://assets.nobroker.in/static/img/postYourProperty/icon/nonveg.png"
              alt="Non-veg icon"
              width={20}
              height={20}
            />
            <p>Non-Veg Allowed*</p>
            <AmenitiesCheckvox label="non-veg" />
          </div>
          <div className="flex items-center border border-gray-300 px-1 py-1 w-[33%] gap-2 rounded">            <Image
              src="https://assets.nobroker.in/static/img/postYourProperty/icon/security.png"
              alt="Security icon"
              width={20}
              height={20}
            />
            <p>Gated Security*</p>
            <AmenitiesCheckvox label="security" />
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <div>
            <label htmlFor="" className="font-semibold">
              Who will show the property?*
            </label>
            <div className="relative">              <Image
                src="https://assets.nobroker.in/static/img/postYourProperty/icon/Key.png"
                alt="Key icon"
                width={20}
                height={20}
                className="absolute top-4 left-2 w-5"
              />
              <select
                className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1 mt-2 pl-8"
                name=""
                id=""
              >
                <option value="Select" selected disabled>
                  Select
                </option>
                <option value="Need help">Need help</option>
                <option value="I will show">I will show</option>
                <option value="Neighbours">Neighbours</option>
                <option value="Friends/Relative">Friends/Relative</option>
                <option value="Security">Security</option>
                <option value="Tenants">Tenants</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Secondary Number
            </label>
            <div className="flex px-2 py-2 border border-gray-300 w-full mt-2">
              <ShowCountryDialCode />
              <input
                type="phone"
                className=" focus:outline-none pl-2 "
                placeholder="Secondary Number"
              />
            </div>
          </div>
        </div>
        <div className="flex px-2 py-3 border border-gray-300 w-[75%] items-center mt-4 rounded">
          <p>
            Do you have more similar{" "}
            <span className="font-semibold">units/properties</span> availaible ?
          </p>
          <AmenitiesCheckvox label="similer" />
        </div>

        <div className="mt-4">
          <label className="font-semibold">
            Add Directions Tip for your tenants{" "}
            <sup className="bg-red-500 uppercase rounded-xl text-white px-1">
              New
            </sup>{" "}
          </label>
          <SuggessionBox />
          <textarea
            name=""
            id=""
            className="mt-5 w-full h-24 rounded-e-none outline-none border p-2 mb-6"
            placeholder="Eg. Take the road opposite to Amrita College, take right after 300m..."
          ></textarea>
        </div>
        <hr />
        <div className="mt-5">
          <label htmlFor="" className="font-semibold text-base">
            Select the available amenities
          </label>
          <div className="sm:w-[60%] mt-3 mb-10">
            <div className="flex mb-7 sm:gap-16">
              <div className="w-full">
                <AvailableAmenities
                  customStyle={{
                    backgroundImage:
                      "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                    backgroundPosition: "-25px -477px",
                  }}
                  label="Lift"
                />{" "}
              </div>
              <div className="w-full">
                <AvailableAmenities
                  customStyle={{
                    backgroundImage:
                      "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                    backgroundPosition: "-25px -1229px",
                  }}
                  label="Internet Services"
                />{" "}
              </div>
            </div>

            <div className="flex justify-between mb-7 sm:gap-16">
              <div className="w-full">
                <AvailableAmenities
                  customStyle={{
                    backgroundImage:
                      "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                    backgroundPosition: "-25px -25px",
                  }}
                  label="Air Conditioner"
                />{" "}
              </div>
              <div className="w-full">
                <AvailableAmenities
                  customStyle={{
                    backgroundImage:
                      "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
                    backgroundPosition: "0px -832px",
                  }}
                  label="Club House"
                />{" "}
              </div>
            </div>
            <div className="flex justify-between mb-7 sm:gap-16">
              <div className="w-full">
                <AvailableAmenities
                  customStyle={{
                    backgroundImage:
                      "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                    backgroundPosition: "-25px -1079px",
                  }}
                  label="Intercom"
                />{" "}
              </div>
              <div className="w-full">
                <AvailableAmenities
                  customStyle={{
                    backgroundImage:
                      "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                    backgroundPosition: "-25px -2057px",
                  }}
                  label="Swimming Pool"
                />{" "}
              </div>
            </div>
            <div className="flex justify-between mb-7 sm:gap-16">
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                  backgroundPosition: "-25px -1907px",
                }}
                label="Children Play Area"
              />{" "}
              </div>
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                  backgroundPosition: "-25px -627px",
                }}
                label="Fire Safety"
              />{" "}
              </div>
            </div>
            <div className="flex justify-between mb-7 sm:gap-16">
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
                  backgroundPosition: "-2px -1172px",
                }}
                label="Servant Room"
              />{" "}
              </div>
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                  backgroundPosition: "-25px -2659px",
                }}
                label="Shopping Center"
              />{" "}
              </div>
            </div>
            <div className="flex justify-between mb-7 sm:gap-16">
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
                  backgroundPosition: "-1px -936px",
                }}
                label="Gas Pipeline"
              />{" "}
              </div>
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                  backgroundPosition: "-25px -1607px",
                }}
                label="Park"
              />{" "}
              </div>
            </div>
            <div className="flex justify-between mb-7 sm:gap-16">
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
                  backgroundPosition: "-1px -549px",
                }}
                label="Rain Water Harvesting"
              />{" "}
              </div>
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
                  backgroundPosition: "-5px -519px",
                }}
                label="Sewage Treatment Plant"
              />{" "}
              </div>
            </div>
            <div className="flex justify-between mb-7 sm:gap-16">
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
                  backgroundPosition: "-3px -395px",
                }}
                label="House Keeping"
              />{" "}
              </div>
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                  backgroundPosition: "-25px -2207px",
                }}
                label="Power Backup"
              />{" "}
              </div>
            </div>
            <div className="flex justify-between mb-7 sm:gap-16">
              <div className="w-full">
              <AvailableAmenities
                customStyle={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
                  backgroundPosition: "-25px -1757px",
                }}
                label="Visitor Parking"
              />{" "}
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* <SaveContinueButton /> */}
    </div>
  );
};

export default Amenities;
