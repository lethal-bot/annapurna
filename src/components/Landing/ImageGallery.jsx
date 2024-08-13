import React, { useState, useEffect, useRef } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import image0 from "../../assets/Image-0.png";
import image1 from "../../assets/Image-1.png";
import image2 from "../../assets/Image-2.png";
import { Link } from "react-router-dom";
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

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    startInterval();
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startInterval();
  };

  return (
    <div className="hidden relative w-full h-[87vh] rounded-[3rem] lg:flex justify-center items-center overflow-hidden shadow-card">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="object-cover w-full h-full"
      />
      <div className="absolute bg-slate-950 opacity-10 top-0 left-0 w-full h-full"></div>
      <div className="absolute top-0 left-0 flex items-center justify-center flex-col w-full h-full px-20">
        <h3 className="font-bold text-6xl text-white">
          {headings[currentIndex]}
        </h3>
        <p className="pt-5 px-10 lg:text-xl font-semibold text-center text-white">
          {para[currentIndex]}
        </p>
      </div>
      <FaCircleArrowLeft className="absolute left-4 top-[46%] h-12 w-12 text-white cursor-pointer " onClick={handlePrev}/>
      <FaCircleArrowRight className="absolute right-4 top-[46%] h-12 w-12 text-white cursor-pointer" onClick={handleNext}/>
      <Link className="absolute bottom-10 left-[50%]  px-6 py-3 bg-[#B1C91F] hover:bg-[#b3c445] text-white rounded-[2rem] -translate-x-[50%] text-2xl hover:shadow-button-green" to={"/option"}>Get Started</Link>
    </div>
  );
};

export default ImageGallery;
