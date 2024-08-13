import React from "react";
import ImageGallery from "../components/Landing/ImageGallery";
import PhoneImageGallery from "../components/Landing/PhoneImageGallery";

function Landing() {
  return (
    <div className="lg:px-20 md:px-16 sm:px-12 px-8 ">
      <div className="h-full w-full">
        <ImageGallery />
        <PhoneImageGallery/>
      </div>
    </div>
  );
}

export default Landing;
