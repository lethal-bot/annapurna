import React, { useState } from "react";
import donorSigninImage from "../assets/donorsignin.png";
import SignInForm from "../components/Form/SignInForm";
import Otp from "./Otp";
function DonorSignIn() {
  const [open,setOpen] = useState(false);
  const [phoneNumber,setPhoneNumber] = useState("");
  function handleOpen(){
    setOpen((o)=>!o);
  }
  function settingPhoneNumber(num){
    setPhoneNumber(num)
  }
  return (
    <div>
      {!open && <div className="lg:px-15">
        <div className="w-full h-full flex items-center justify-start lg:justify-center flex-col lg:flex-row">
          <div className=" h-[200px] lg:h-[400px] xl:h-[500px] flex items-center justify-center p-2 bg-[#f4f4f4] rounded-2xl border border-[#DFE1E7] -mt-10 sm:-mt-8 md:mt-0">
            <img src={donorSigninImage} alt="image" className="object-cover w-full h-full"/>
          </div>
          <div>
            <SignInForm handleOpen={handleOpen} settingPhoneNumber={settingPhoneNumber}/>
          </div>
        </div>
      </div>}
      {open && <Otp handleOpen={handleOpen} phoneNumber={phoneNumber}/>}
    </div>
  );
}

export default DonorSignIn;
