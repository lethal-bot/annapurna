import React from "react";
import { Link } from "react-router-dom";
import ngo_image from "../assets/ngo.png";
import donor_image from "../assets/donor.png";

function Option() {
  return (
    <div className="lg:px-20">
      <div className="flex items-center justify-evenly w-full sm lg:h-[89vh] md:h-[78vh] md:flex-row flex-col gap-4">
        <div className="flex items-center justify-center flex-col gap-2 bg-[#F4F4F4] lg:w-[500px] lg:h-[500px] md:w-[340px] md:h-[340px] w-[282px] h-[235px] lg:p-8 md:p-4 p-2 rounded-2xl border-[#DFE1E7] border-2">
          <div className="h-[80%]">
            <img
              src={donor_image}
              alt="donor_image"
              className="object-cover w-full h-full"
            />
          </div>
          <Link to={"/donorSignin"} className="w-full bg-black md:rounded-[2rem] text-white md:text-lg md:p-3 p-2 rounded-2xl text-center">
            Proceed as a <span className="font-bold">Donor</span>
          </Link>
        </div>
        <div className="flex items-center justify-center flex-col gap-2 bg-[#F4F4F4] lg:w-[500px] lg:h-[500px] md:w-[340px] md:h-[340px] w-[282px] h-[235px] lg:p-8 md:p-4 p-2 rounded-2xl border-[#DFE1E7] border-2">
          <div className="h-[80%]">
            <img
              src={ngo_image}
              alt="ngo_image"
              className="object-cover w-full h-full"
            />
          </div>
          <Link to={"/ngoSignin"} className="w-full bg-black md:rounded-[2rem] text-white md:text-lg md:p-3 p-2 rounded-2xl text-center">
            Proceed as a <span className="font-bold">Ngo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Option;
