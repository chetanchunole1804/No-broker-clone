import React, { useState, useRef } from "react";
import Image from "next/image";
import MessageReceived from "../MessageReceived";

interface UploadedImage {
  id: number;
  src: string;
  pictureType: string;
}

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const [images, setImages] = useState<UploadedImage[]>([]);

  const toggleMessage = () => {
    setShow(true);
    setChangeBg(!changeBg);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the hidden file input click
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result && typeof result === 'string' && result.trim() !== '') {
          const newImage: UploadedImage = {
            id: Date.now(),
            src: result,
            pictureType: "Picture Type",
          };
          setImages((prevImages) => [...prevImages, newImage]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id: number) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  const handleDropdownChange = (id: number, value: string) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id ? { ...image, pictureType: value } : image
      )
    );
  };
  return (
    <>
      {show ? <MessageReceived /> : null}
      <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative text-sm z-100 ">
        <div className="flex justify-between items-center">
          <h1 className="text-[#009587] text-lg font-semibold py-4">
            Upload photos & videos
          </h1>          <button
            className="flex py-1 h-10  rounded-md px-2 items-center text-white gap-2 font-semibold"
            onClick={toggleMessage}
            style={{
              backgroundColor: changeBg ? "rgb(204,204,204)" : "rgb(0,122,111)",
            }}
          >
            {/* Only render Image if src is not empty */}
            <Image
              src="https://assets.nobroker.in/nb-new/public/Pyp-Form/upload.svg"
              alt="Upload"
              width={24}
              height={24}
              unoptimized
            />
            <span>Upload through phone</span>
          </button>
        </div>
        <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>
        <div
          className="border w-full h-48 mt-6 bg-[#f8f8f8] text-center pt-5 cursor-pointer text-base"
          onClick={handleClick}
        >
          <Image
            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CameraAlt.png"
            alt="Camera"
            width={48}
            height={48}
            className="mx-auto"
          />
          <p className="font-semibold mt-5 text-[#464646] ">
            Add photos to get 5X more responses.
          </p>
          <p className="mt-1 text-[#464646]">
            90% tenants contact on properties with photos.
          </p>
          <button className="py-1 px-4 bg-[#009587] rounded-md text-white text-base mt-4">
            Add Photos
          </button>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        <div className="flex gap-3 mt-3">
          {images.map((image) => (
            <div key={image.id} className="image-preview">
              {image.src && image.src.trim() !== '' && (
                <Image 
                  src={image.src} 
                  alt="Uploaded Preview" 
                  width={128} 
                  height={144}
                  className="w-32 h-36" 
                />
              )}

              <div className="options flex justify-center border ">
                <select
                  value={image.pictureType}
                  onChange={(e) =>
                    handleDropdownChange(image.id, e.target.value)
                  }
                >
                  <option value="Picture Type" disabled>
                    Picture Type
                  </option>
                  <option value="Living Room">Living Room</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Kitchen">Kitchen</option>
                </select>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(image.id)}
                >
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEUAAAD///++vr6WlpbW1tYtLS3i4uKioqLz8/ODg4Pp6elhYWHe3t78/PzT09Pb29tLS0uqqqpXV1fNzc0yMjJ0dHQbGxu4uLiMjIw6OjojIyNQUFCysrIUFBRcXFxpaWlERESgHmC2AAAES0lEQVRoge2Z27qiMAyFERQKWAQRERH1/Z9yNmF2aZY9KPLN1eTOHn5pm66kbbBxW1zlu8Bou7yKPZ0Dd3V7MpMnO7XfwCMXerRoOTz0sYMgXAqXVz/8KhfCk2li08Ro6bQcyUJ4Sr23tuotVacL4Y+x82N5vQue9R5/IF/qs0Vw8R5cvAPPYrCipDnF4tloTcoCi7MXuLh0fr97z7qL4PDsuBZ6tGOmw2WzJjsIGqnB43XZQRBr8HpteK3B31CozyzU4Ie14QcNLlZ1lh93EborrjzpNd9EtTOefWanGre/aKOVrFVq4wnQ39l/uA8u4+0KFksjXDTX3dd2bYT5y1fR3cb85ZvLGvCLec7/JkFfWmKBV2vAKwv8hg3LWzXov7uq4mE8akvsc7PAW2iX/5TtNVr5s1ZSo51G1c6hU2uBhwNvV4yF6fw7gYWhNLHgfYbQAq8hZSa4lv9TPy0iRgb4tbbA96DpBXwpwhMD/LS3wDNIugpYZYTfDPAus8AlLH0NMITTbwiQpbTANxCmb9AZ4TWMbLTjxga/84Y0p1rWgfADrMlodysclItkIrPDaXpBkBorPDU0lHa4NHxQaoXDmTafWljhVA07NLLCQblKKpy3LcAHqgYPq6xwyEc7Kpy3LcCvVA17I7TCIR89Q2+AT/995n0OVrjgDQMYN8BLWBIyYYVjSyqbVwzguN5zl/fhs68BvPkQDoJOY5ydH+CpYSYHB/zJm9KxaXZ+gJNLw1Ht6YCDctGFxez8ACeX3vIeRwf8wZsCzf2T7OGAgwpBNAAaxpLRLg447P+EzyrAaUVAcSsHHAYZ+eGgdaEDDjEr9cNBpev34bRNMuX8HD5QrAA5d8ELvoto7TN13crhO4Jz/xoKB3zL06IJrmSRwzsD/Lp1wGOuzhRtp6uuV/h0ucUDURc74FnP2vZjlBSqP4fnI1zyPQ1XdRwu+IeUY3+h1ozD6fAjeJTLhQMOx6LnOEqpvI3D03FY2ZN1aKQDDm7bUdBSmsDhtNMPPHeFu1eAc3HZ8TyXw6cclz8LXJxwvpunZFsJDoeTjEBKHznhXIemY4ILDoeRxAkHBQ1ZGYff2C+tzAqHxnR6UucwDud1WgsrHM4JNzZ0Bh/4qCYrnPCYz+GU/v8mVQx+NqT+Q+yES56d0aIpd2PwyU156DpLJ3xjcC21URicTrjouhs3HHYcbfHOBCfFlXxHnzzwJ2tNWiF+yxj8SaIIWuSBc1m8k8r1Jng//hD8iJZ74PxTSHNVHsY8m3IrUNzGA4dUYfQtdWonzfudZTqHQ6aILzMIh7Qo32/2KkwOrRCt2giP/eYAB9fKA8dr+lOv+c9QloNehc+w+MSI8K+u6Q8eeOZH2A1f0v4pXPR+hs1enuleLoq9z852e3kjfIHXZz/FbOfaC1/+6a+Pm4b787ufY7L7K8kAl8mCmTknhmd0483/Pso/4p/zaG/i/AE1DTTDYpG0pgAAAABJRU5ErkJggg=="
                    alt="dfghj"
                    width={20}
                    height={20}
                    className="w-5"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[1px]  bg-gray-300 right-0 relative mt-10">
          {" "}
          <span className=" uppercase p-1 rounded-full bg-gray-500 text-white text-xs absolute left-80 -top-3">
            or
          </span>
        </div>
        <p className="text-center font-semibold text-[#464646] text-base mt-8">
          We can upload photos on your behalf
        </p>
        <div className="flex justify-around mt-8 ">
          <div className="border px-3 py-3 w-56 flex">
            <Image
              src="/Whatsapp.svg"
              alt="whatsApp"
              width={24}
              height={24}
              className="w-6 h-6 mr-3"
            />
            <div className="text-[#464646]">
              <p className="text-base">Whatsapp us on</p>
              <hr />
              <p className="font-bold pt-2">0-9241-700-000</p>
            </div>
          </div>
          <div className="border flex px-3 py-2 w-56 ">
            <Image
              src="/Message.svg"
              alt="Message"
              width={32}
              height={24}
              className="w-8 h-6 mr-3"
            />
            <div className="text-[#464646]">
              <p className="text-base">Email to</p>
              <hr />
              <p className="font-bold pt-2">photos@nobroker.in</p>
            </div>
          </div>
        </div>
        <div
          className="border w-full h-48 mt-6 bg-[#f8f8f8] text-center pt-5 cursor-pointer text-base"
          onClick={handleClick}
        >
          <Image
            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Videocam.png"
            alt="Video Camera"
            width={48}
            height={48}
            className="mx-auto"
          />
          <p className="font-semibold mt-5 text-[#464646] ">
            Add Videos to get 5X more responses.
          </p>
          <p className="mt-1 text-[#464646]">
            90% tenants contact on properties with videos.
          </p>
          <button className="py-1 px-4 bg-[#009587] rounded-md text-white text-base mt-4">
            Add Videos
          </button>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        {/* <SaveContinueButton /> */}
      </div>
    </>
  );
};

export default Gallery;
