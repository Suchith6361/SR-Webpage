import React from "react";
import phoneImage from "../images/laptop-white-background-3d-rendering-computer-generated-image.png";
import vscode from "../images/Screenshot (48).png";


const Content = () => {
  return (
    <div className="relative">
      <div className="lg:flex pl-[100px] lg:justify-evenly sm:mt-10 lg:items-center sm:flex-row sm:items-center">
        <div>
          <span className="text-[25px] font-bold text-center  lg:mt-0">
            The only logo maker with free{" "}
            <span style={{ boxShadow: "0px 13px 0px 0px #66ffb2" }}>
              {" "}
              customization
            </span>
          </span>
          <p className="text-gray-500 text-[12px] lg:mt-2 sm:mt-6">
            We'll personally help you customize your <br />
            logo with the purchase of any package.
          </p>
        </div>
        <div>
          <img src={phoneImage} alt="phone" className="w-[1200px]" />
        </div>
      </div>
      <div className="bg-violet-300 h-[70vh] flex flex-col items-center pt-20">
        <span className="font-bold text-white text-4xl pb-4">
          Instantly customize and export
        </span>
        <span className="text-white">
          {" "}
          Right in your browser, no designer or software needed
        </span>
        <img className="h-[270px] pt-10 mb-10" src={vscode} alt="" />
      </div>
     
    </div>
  );
};

export default Content;
