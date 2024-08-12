import React from "react";

const Header = () => {
  return (
    <div className="bg-[#fcd469] px-48 z-[-20] ">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 lg:pt-0 sm:pt-20 lg:pl-0 sm:pl-20 flex lg:w-[500px]">
          Create a unique, professional logo for your business
        </h1>
        <p className="mt-4 text-gray-600 lg:pl-0 sm:pl-20">
          Kickstart your brand with business card designs, social media
          graphics, <br />
          app icons, letterheads, and more.
        </p>

        <button className="mt-10  lg:ml-0 sm:ml-20 text-white bg-gray-800 px-10 py-4 rounded-full mb-20">
          Create my logo
        </button>
      </div>
    </div>
  );
};

export default Header;
