import React from 'react'
import OtpForm from '../components/Form/OtpForm'
import OtpImage from "../assets/otp.png"

function Otp({handleOpen,phoneNumber}) {
  return (
    <div className="lg:px-15">
      <div className="w-full h-full flex items-center justify-start lg:justify-center flex-col lg:flex-row">
        <div className=" h-[200px] lg:h-[400px] xl:h-[500px] flex items-center justify-center p-2 bg-[#f4f4f4] rounded-2xl border border-[#DFE1E7] -mt-10 sm:-mt-8 md:mt-0">
          <img src={OtpImage} alt="image" className="object-cover w-full h-full"/>
        </div>
        <div>
          <OtpForm handleOpen={handleOpen} phoneNumber={phoneNumber}/>
        </div>
      </div>
    </div>
  )
}

export default Otp