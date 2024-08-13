import React, { useState } from "react";
import image0 from "../../assets/Image-0.png";
import image1 from "../../assets/Image-1.png";
import image2 from "../../assets/Image-2.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
const images = [image0, image1, image2];
const headings = [
  "Connecting Surplus to Need",
  "Simple, Fast, Efficient",
  "Join the Movement",
];
const para = [
  "By connecting surplus food from individuals and businesses with NGOs, we help ensure that perfectly good food reaches those who need it most.",
  "List your surplus food, get matched with a nearby NGO in need, and coordinate a convenient pickup time. It's quick, easy, and makes a real difference.",
  "Help reduce food waste and provide nutritious meals to those in need. Your generosity directly supports NGOs in their vital mission to fight hunger.",
];

const buttonText = ['Next','Next','Get Started'];

function PhoneImageGallery() {
    const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  function changeIndex(){
    if(currentIndex==2){
        navigate('/option');
        return;
    }
    setCurrentIndex((index)=>index+1);
  }
  return (
    <div className="lg:hidden h-full flex flex-col items-center justify-start">
      <div className="sm:h-[300px] sm:w-[450px]  h-[190px] w-[300px] ">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="object-cover w-full h-full rounded-2xl"/>
      </div>
      <div className="py-6">
        <h3 className="text-lg font-semibold">{headings[currentIndex]}</h3>
        <p>{para[currentIndex]}</p>
      </div>
      <button onClick={changeIndex} className="px-12 py-3 bg-[#B1C91F] hover:bg-[#b3c445] text-white rounded-2xl text-lg md:text-2xl hover:shadow-button-green">{buttonText[currentIndex]}</button>
    </div>
  );
}

export default PhoneImageGallery;
