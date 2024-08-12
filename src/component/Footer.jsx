import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#292d33]">
      <div>
        <div className="px-40 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className=" p-4 ">
            <span
              className="text-[12px] w-auto px-[10px] font-bold text-yellow-400"
              style={{ boxShadow: "0px 13px 0px 0px #666600" }}
            >
              Create your logo
            </span>
            <p className="mt-4 text-gray-600 text-[10px]">
              Try our free logo maker t o create your logo.
            </p>
          </div>
          <div className=" p-4 ">
            <span
              className="text-[12px] px-4 font-bold text-pink-600 
             "
              style={{ boxShadow: "0px 13px 0px 0px #660033" }}
            >
              Support
            </span>
            <p className="mt-4 text-gray-600 text-[10px]">
              Have any questions? Contact us.
            </p>
          </div>
          <div className=" p-4 ">
            <span
              className="text-[12px] font-bold px-4 text-green-400"
              style={{ boxShadow: "0px 13px 0px 0px #006633" }}
            >
              Tools
            </span>
            <p className="mt-4 text-gray-600 text-[10px]">
              Explore our tools to create your logo.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-24 px-48 text-gray-500 font-semibold  text-[12px]">
        <div>
          <span>Terms of Service</span>
        </div>
        <div>
          <span>Privacy Policy</span>
        </div>
      </div>
      <div>
        <div className="ml-[370px] bg-red-500 lg:w-[80px] lg:h-[80px] sm:w-[40px] sm:h-[40px]"> </div>
        <div className="flex justify-evenly">
          <div className="ml-[140px] bg-blue-500 lg:w-[80px] lg:h-[80px] sm:w-[40px] sm:h-[40px]"> </div>
          <div className="ml-[260px] bg-green-500 lg:w-[80px] lg:h-[80px] sm:w-[40px] sm:h-[40px]"> </div>
        </div>
        <div className="flex justify-end pb-6">
          <div className="mr-[230px] ml-[350px] bg-yellow-500 lg:w-[80px] lg:h-[80px] sm:h-[40px] sm:w-[40px] content">
            {" "}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
