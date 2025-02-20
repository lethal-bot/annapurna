import React from 'react'
import ngoSigninImage from "../assets/ngo.png";
import NgoSignInForm from '../components/Form/NgoSignInForm';



function NgoSignIn() {
  return (
    <div className="lg:px-15">
      <div className="w-full h-full flex items-center justify-start lg:justify-center flex-col lg:flex-row">
        <div className=" h-[200px] lg:h-[400px] xl:h-[500px] flex items-center justify-center p-2 bg-[#f4f4f4] rounded-2xl border border-[#DFE1E7] -mt-10 sm:-mt-8 md:mt-0">
          <img src={ngoSigninImage} alt="image" className="object-cover w-full h-full"/>
        </div>
        <div>
          <NgoSignInForm />
        </div>
      </div>
    </div>
  );
}

export default NgoSignIn