import React from "react";
import { AiOutlineCopyright, AiOutlineTrademarkCircle } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2023 | PHABINVEST shopping | All Rights Reserved



        </p>
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm"> 2041 W Marconi Ave, Phoenix AZ 85023
          RIDECONNECT LLC <AiOutlineTrademarkCircle /> </p>
      </div>
    </div>
  );
};

export default FooterBottom;
