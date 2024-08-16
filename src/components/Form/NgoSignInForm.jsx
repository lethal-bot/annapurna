import React from 'react'

function NgoSignInForm() {
  return (
    <div className="flex items-center justify-center h-full lg:h-[400px] xl:h-[500px] w-full flex-col lg:text-2xl lg:p-10 pt-5 px-5 text-sm md:text-lg">
      <label htmlFor="uniqueId" className="pt-3 pb-3 lg:block hidden">
        Enter your Unique Id
      </label>
      <div className=" pb-3 flex items-center flex-col gap-2">
        <input
          type="text"
          name=""
          id="uniqueId"
          className="w-full h-[50px] rounded-2xl px-5 py-2 placeholder:text-[#757575] border-2"
          placeholder="Unique Id"
          maxLength={10}
          required
        />
        <p className='text-sm md:text-lg text-[#757575] max-w-[500px] text-center py-2 '>An OTP will be sent to the phone number
        linked to the Unique ID on the NGO Darpan website.</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="w-full bg-black rounded-[2rem] text-white md:text-lg p-3 text-center">
          Get <span className="font-bold">Otp</span>
        </button>
      </div>
    </div>
  )
}

export default NgoSignInForm