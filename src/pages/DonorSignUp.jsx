import React from "react";
import donorSignUpImage from "../assets/donor.png";
import DonorSignUpForm from "../components/Form/DonorSignUpForm";
import Otp from "./Otp";
function DonorSignUp() {
  const open = true;
  return (
    <div className="lg:px-15">
      <div className="w-full h-full flex items-center justify-start lg:justify-center flex-col lg:flex-row">
        <div className=" h-[122px] lg:h-[400px] xl:h-[500px] flex items-center justify-center p-2 bg-[#f4f4f4] rounded-2xl border border-[#DFE1E7] -mt-10 sm:-mt-8 md:mt-0">
          <img
            src={donorSignUpImage}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <DonorSignUpForm />
        </div>
      </div>
    </div>
  );
}

export default DonorSignUp;
