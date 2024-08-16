import React, { useRef, useState } from "react";

function SignInForm({handleOpen,settingPhoneNumber}) {
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const ref = useRef();
  async function handleSubmit(){
    const phoneNumber = ref.current.value;
    const phoneRegex = /^[1-9]\d{9}$/;
    console.log(phoneRegex.test(phoneNumber));
    if(!phoneRegex.test(phoneNumber)){
      setError('invalid phone number');
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://annapurna-8939.onrender.com/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: '+918642092089' }), 
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      settingPhoneNumber(phoneNumber);
      handleOpen();
    } catch (error) {
      setError(error.message);
    }finally{
      setLoading(false)
    }

  }
  return (
    <div className="flex items-center justify-center h-full lg:h-[400px] xl:h-[500px] w-full flex-col lg:text-2xl lg:p-10 pt-10 px-5 text-sm md:text-lg">
      <label htmlFor="phone" className="pt-3 pb-3 lg:block hidden">
        Enter your Phone number
      </label>
      <div className=" pb-3 flex items-center flex-row gap-2">
        <span className=" p-2 text-[#757575] border-2 rounded-2xl">+91</span>

        <input
          type="tel"
          name=""
          id=""
          className="w-full h-[50px] rounded-2xl px-5 py-2 placeholder:text-[#757575] border-2"
          placeholder="Phone number"
          maxLength={10}
          ref={ref}
          required
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-2 w-full">
        {!loading && <button className="w-full bg-black rounded-[2rem] text-white md:text-lg p-3 text-center" onClick={handleSubmit}>
          Get <span className="font-bold">Otp</span>
        </button>}
        {loading && <button className="w-full bg-black rounded-[2rem] text-white md:text-lg p-3 text-center" disabled={true}>
          Sending <span className="font-bold">Otp</span> ...
        </button>}
        <p className="text-sm text-red-500 ">{error}</p>
      </div>
    </div>
  );
}

export default SignInForm;
