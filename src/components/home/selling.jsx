// import { useState } from "react";
// import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import imgLeft from "../../assets/pic2.jpg";

// import img1 from "../../assets/pic1.jpg";
// import img2 from "../../assets/pic2.jpg";
// import img3 from "../../assets/cloud.jpg";

// const smallImages = [img1, img2, img3];

// export default function Selling() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animState, setAnimState] = useState("visible"); 

//   const handleChangeImage = (newIndex) => {
//     setAnimState("fadeOut");
//     setTimeout(() => {
//       setCurrentIndex(newIndex);
//       setAnimState("visible");
//     }, 200);
//   };

//   const handlePrev = () => {
//     const newIndex = (currentIndex - 1 + smallImages.length) % smallImages.length;
//     handleChangeImage(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = (currentIndex + 1) % smallImages.length;
//     handleChangeImage(newIndex);
//   };

//   return (
//     <div className="bg-amber-50 w-full py-12 md:py-16 px-4">
//       <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-10">

//         {/* Left Side Image with Play Button */}
//         <div className="relative w-full lg:w-1/2 rounded-xl md:rounded-3xl overflow-hidden shadow-md group">
//           <img
//             src={imgLeft}
//             alt="Wooden Swing"
//             className="w-full h-[700px] object-cover rounded-xl md:rounded-3xl transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="bg-white/60 hover:bg-white/80 transition p-3 md:p-4 rounded-full cursor-pointer">
//               <FaPlay className="text-black text-lg md:text-xl" />
//             </div>
//           </div>
//         </div>

//         {/* Right Side Product Info */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left pl-0 lg:pl-30">
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 mt-6 lg:mt-0 pl-0 lg:pl-20">
//             Top Selling Product
//           </h2>

//           {/* Small product image with arrows */}
//           <div className="flex items-center justify-center lg:justify-start mb-4 md:mb-6">
//             <button
//               onClick={handlePrev}
//               className="bg-white/70 hover:bg-white rounded-full p-2 cursor-pointer shadow mr-3 flex-shrink-0"
//               aria-label="Previous Image"
//             >
//               <FaArrowLeft className="text-gray-700 text-sm md:text-md" />
//             </button>

//             {/* Small Image Card with animation */}
//             <div
//               className={`
//                 relative w-[350px] h-[350px] rounded-xl md:rounded-3xl overflow-hidden shadow-md group cursor-pointer 
//                 transition-all duration-300
//                 ${animState === "fadeOut" ? "opacity-0 scale-95" : "opacity-100 scale-100"}
//               `}
//             >
//               <img
//                 src={smallImages[currentIndex]}
//                 alt="Product preview"
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
//               />

//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3 md:p-4">
//                 <h4 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">Wooden Swings</h4>
//                 <p className="text-xs md:text-sm text-center">Premium quality wooden swing with comfortable cushions</p>
//                 <span className="mt-1 md:mt-2 font-bold text-sm md:text-base">₹10000.00</span>
//                 <button className="mt-2 md:mt-3 bg-white text-black px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-gray-200 transition-colors">
//                   View Details
//                 </button>
//               </div>
//             </div>

//             <button
//               onClick={handleNext}
//               className="bg-white/70 hover:bg-white rounded-full p-2 cursor-pointer shadow ml-3 flex-shrink-0"
//               aria-label="Next Image"
//             >
//               <FaArrowRight className="text-gray-700 text-sm md:text-md" />
//             </button>
//           </div>

//           {/* Product Title */}
//           <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center lg:text-left pl-0 lg:pl-30">
//             Wooden Swings
//           </h3>

//           {/* Product Description */}
//           <p className="text-gray-600 text-sm mb-4 text-center lg:text-left px-2">
//             "Introducing our latest innovation - a perfect blend of technology and design. Experience seamless performance,
//             unmatched quality, and a user-friendly interface. Elevate your experience with our new product. Try it today!"
//           </p>

//           {/* Price */}
//           <div className="flex justify-center lg:justify-start items-center space-x-4 pl-0 lg:pl-25">
//             <span className="text-xl font-bold text-gray-900">₹10000.00</span>
//             <span className="text-gray-500 line-through text-sm">₹16000.00</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import imgLeft from "../../assets/pic2.jpg";

import img1 from "../../assets/pic1.jpg";
import img2 from "../../assets/pic2.jpg";
import img3 from "../../assets/cloud.jpg";

const smallImages = [img1, img2, img3];

export default function Selling() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animState, setAnimState] = useState("visible");

  const handleChangeImage = (newIndex) => {
    setAnimState("fadeOut");
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimState("visible");
    }, 200);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + smallImages.length) % smallImages.length;
    handleChangeImage(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % smallImages.length;
    handleChangeImage(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-amber-100 via-white to-pink-100 py-12 md:py-16 px-4">
      
      {/* Decorative floating bubbles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute w-40 h-40 bg-blue-300 rounded-full opacity-30 animate-ping left-10 top-20"></div>
        <div className="absolute w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce right-10 top-32"></div>
        <div className="absolute w-32  h-80   bg-purple-100 rounded-full opacity-20 animate-pulse left-1/2 bottom-10"></div>
      </div>

      {/* Decorative bottom SVG wave */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#fdf6e3"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,213.3C672,203,768,149,864,122.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-10">

        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 rounded-xl md:rounded-3xl overflow-hidden shadow-lg group">
          <img
            src={imgLeft}
            alt="Wooden Swing"
            className="w-full h-[700px] object-cover rounded-xl md:rounded-3xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/70 hover:bg-white transition p-3 md:p-4 rounded-full cursor-pointer shadow-lg">
              <FaPlay className="text-black text-lg md:text-xl" />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pl-0 lg:pl-30">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8 mt-6 lg:mt-0 pl-0 lg:pl-20">
            Top Selling Product
          </h2>

          {/* Image Switcher */}
          <div className="flex items-center justify-center lg:justify-start mb-4 md:mb-6">
            <button
              onClick={handlePrev}
              className="bg-white/80 hover:bg-white rounded-full p-2 cursor-pointer shadow mr-3 flex-shrink-0"
              aria-label="Previous Image"
            >
              <FaArrowLeft className="text-gray-700 text-sm md:text-md" />
            </button>

            <div
              className={`relative w-[350px] h-[350px] rounded-3xl overflow-hidden shadow-md group cursor-pointer transition-all duration-300 ${
                animState === "fadeOut" ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <img
                src={smallImages[currentIndex]}
                alt="Product preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <h4 className="text-lg font-semibold mb-1">Wooden Swings</h4>
                <p className="text-sm text-center">Premium quality wooden swing with comfortable cushions</p>
                <span className="mt-2 font-bold text-base">₹10000.00</span>
                <button className="mt-3 bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="bg-white/80 hover:bg-white rounded-full p-2 cursor-pointer shadow ml-3 flex-shrink-0"
              aria-label="Next Image"
            >
              <FaArrowRight className="text-gray-700 text-sm md:text-md" />
            </button>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-center lg:text-left">
            Wooden Swings
          </h3>
          <p className="text-gray-600 text-sm mb-4 text-center lg:text-left px-2">
            "Introducing our latest innovation - a perfect blend of technology and design. Experience seamless performance,
            unmatched quality, and a user-friendly interface. Elevate your experience with our new product. Try it today!"
          </p>

          <div className="flex justify-center lg:justify-start items-center space-x-4">
            <span className="text-xl font-bold text-gray-900">₹10000.00</span>
            <span className="text-gray-500 line-through text-sm">₹16000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
