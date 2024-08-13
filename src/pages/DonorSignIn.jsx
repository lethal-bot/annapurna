import React from "react";
import donorSigninImage from "../assets/donorsignin.png";
import SignInForm from "../components/Form/SignInForm";
function DonorSignIn() {
  return (
    <div className="lg:px-15">
      <div className="w-full h-full flex items-center justify-start lg:justify-center flex-col lg:flex-row">
        <div className=" h-[200px] lg:h-[400px] xl:h-[500px] flex items-center justify-center p-2 bg-[#f4f4f4] rounded-2xl border border-[#DFE1E7]">
          <img src={donorSigninImage} alt="image" className="object-cover w-full h-full"/>
        </div>
        <div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default DonorSignIn;
