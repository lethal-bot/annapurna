import React from "react";
import { Link } from "react-router-dom";

function SignInForm() {
  return (
    <div className="flex items-center justify-center h-full lg:h-[400px] xl:h-[500px] w-full flex-col text-2xl lg:p-10 pt-10 px-5">
      <label htmlFor="phone" className="pt-3 pb-3 lg:block hidden">
        Enter your Phone number
      </label>
      <div className="pb-3 flex items-center flex-row gap-2">
        <span className=" p-2 text-[#757575] border-2 rounded-2xl">+91</span>

        <input
          type="tel"
          name=""
          id=""
          className="w-full h-[50px] rounded-2xl px-5 py-2 placeholder:text-[#757575] border-2"
          placeholder="Phone number"
          maxLength={10}
          required
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="w-full bg-black rounded-[2rem] text-white md:text-lg p-3 text-center">
          Get <span className="font-bold">Otp</span>
        </button>
      </div>
    </div>
  );
}

export default SignInForm;
