import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function OtpForm({handleOpen,phoneNumber}) {
  const navigate = useNavigate();
  const emptyArr = ["", "", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const [inputs, setInputs] = useState(emptyArr);
  const [buttonDisable,setButtonDisable] = useState(true);
  const [timer, setTimer] = useState(60);
  const [error,setError] = useState();
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    refs[0].current.focus();

    // Start the timer when the component mounts
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setButtonDisable(false);
    }
  }, [timer]);

  function handleKeyDown(e, index) {
    console.log(e.keyCode);
    if (e.keyCode == 8) {
      const copyInputs = [...inputs];
      copyInputs[index] = "";
      setInputs(copyInputs);
      if (index - 1 < 0) return;
      refs[index - 1].current.focus();
    }
  }

  function handleInputChange(e, index) {
    const val = e.target.value.slice(-1);
    console.log(val);

    if (val < "0" || val > "9") return;
    if (index < inputs.length - 1) {
      refs[index + 1].current.focus();
    }
    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  }

  function handleResendOtp() {

    setTimer(60);
    setButtonDisable(true);
    // Logic to resend OTP goes here
  }

  async function handleSubmit(){
    const otpRegex = /^\d{5}$/;
    const otp = inputs.join('');
    console.log(otp);
    if(!otpRegex.test(otp)){
      setError('invalid otp');
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://annapurna-8939.onrender.com/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: '+918642092089',otp:otp }), 
      });
      if (!response.ok) {
        throw new Error(`Incorrect otp`);
      }
      navigate('/donorsignup');
    } catch (error) {
      setError(error.message);
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-full lg:h-[400px] xl:h-[500px] w-full flex-col lg:text-2xl lg:p-10 pt-5 px-5 text-sm md:text-lg">
      <div className=" pb-3 flex items-center flex-col gap-2">
        <p>{`Enter Otp sent to ${phoneNumber}`}</p>
        <div className="flex items-center justify-around">
          {emptyArr.map((item, i) => {
            return (
              <input
                type="text"
                value={inputs[i]}
                ref={refs[i]}
                key={i}
                // maxLength={1}
                className="border border-slate-600 h-8 w-7 lg:h-10 lg:w-9 p-2 m-1 rounded-lg text-center"
                onChange={(e) => handleInputChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col w-full gap-2">
        <button className="text-lg" disabled={buttonDisable || loading} onClick={handleResendOtp}>Resend OTP {buttonDisable && `(${timer}s)`}</button>
        {!loading && <button className="w-full bg-black rounded-[2rem] text-white md:text-lg p-3 text-center" onClick={handleSubmit}>
          Confirm
        </button>}
        {loading && <button className="w-full bg-black rounded-[2rem] text-white md:text-lg p-3 text-center" disabled={true}>
          validating...
        </button>}
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    </div>
  );
}

export default OtpForm;
