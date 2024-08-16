import React from "react";
import GoogleIcon from "../../assets/googleicon.png"

function DonorSignUpForm() {
  return (
    <div className="flex items-center justify-center h-full lg:h-[400px] xl:h-[500px] w-full flex-col lg:text-2xl lg:p-10 pt-5 px-5 text-sm md:text-lg">
      {/* <label htmlFor="uniqueId" className="pt-3 pb-3 lg:block hidden">
            Enter your Unique Id
          </label> */}
      <div className=" pb-3 flex items-center flex-col gap-2">
        <input
          type="text"
          name=""
          id="uniqueId"
          className="w-full h-[50px] rounded-2xl px-5 py-2 placeholder:text-[#757575] border-2"
          placeholder="Name"
          required
        />
        <input
          type="text"
          name=""
          id="uniqueId"
          className="w-full h-[50px] rounded-2xl px-5 py-2 placeholder:text-[#757575] border-2"
          placeholder="email"
          required
        />
      </div>
      <div className="flex items-center justify-center flex-col w-full gap-2">
        <button className="w-full bg-black rounded-[2rem] text-white md:text-lg p-3 text-center">
          Signup as <span className="font-bold">Donor</span>
        </button>
        or
        <button className="rounded-full h-full bg-white border-[#DFE1E7] p-1 border-2">
            <img src={GoogleIcon} alt="google_login" className="lg:h-10 lg:w-10 h-7 w-7"/>
        </button>
      </div>
    </div>
  );
}

export default DonorSignUpForm;
