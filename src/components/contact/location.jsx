// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion" 
// import suratStoreImage from "../../assets/surat.png"
// import ahmedabadStoreImage from "../../assets/ahm.png"
// import mumbaiStoreImage from "../../assets/pune.png"

// const locations = [
//   {
//     id: "surat",
//     name: "Surat",
//     image: suratStoreImage,
//     title: "Bhatar",
//     address:
//       "102, Ashapura Square Nizampura Plot 77A Ambika Industrial Estate Opp Vanmora Near Navjivan Cricle Udhna-Magdalla, Main, Road, Surat, Gujarat",
//     email: "info.zulasnmore@gmail.com",
//     phone: "9824441703",
//   },
//   {
//     id: "ahmedabad",
//     name: "Ahmedabad",
//     image: ahmedabadStoreImage,
//     title: "Navrangpura",
//     address: "Shop 5, Ground Floor, Shivalik Plaza, Near IIM Road, Navrangpura, Ahmedabad, Gujarat",
//     email: "ahmedabad.zulasnmore@gmail.com",
//     phone: "9876543210",
//   },
//   {
//     id: "mumbai",
//     name: "Mumbai",
//     image: mumbaiStoreImage,
//     title: "Andheri",
//     address: "Shop 12, Lotus Business Park, Near Andheri Metro Station, Andheri East, Mumbai, Maharashtra",
//     email: "mumbai.zulasnmore@gmail.com",
//     phone: "9765432109",
//   },
// ]

// // --- Animation Variants ---


// const headerVariants = {
//   hidden: { opacity: 0, y: -50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       staggerChildren: 0.2, 
//     },
//   },
// }

// const headerTextVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0 },
// }

// const tabsContainerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//       staggerChildren: 0.1, 
//       delay: 0.5,
//     },
//   },
// }

// // For individual tab buttons
// const tabButtonVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
// }

// // For the content section (image and info)
// const contentSectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       delay: 0.8, 
//       staggerChildren: 0.3, 
//     },
//   },
// }

// // For the image within the content section
// const imageVariants = {
//   hidden: { x: -100, opacity: 0, scale: 0.9 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring", stiffness: 80, damping: 15 },
//   },
// }

// // For the text info within the content section
// const textInfoVariants = {
//   hidden: { x: 100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.2 }, 
//   },
// }

// export default function ContactPage() {
//   const [activeLocation, setActiveLocation] = useState("surat")

//   const handleLocationClick = (locationId) => {
//     setActiveLocation(locationId)
//   }

//   const activeLocationData = locations.find((location) => location.id === activeLocation)

//   return (
//     <div className="bg-amber-50 min-h-screen px-4 py-8 md:px-8 lg:px-16 pb-20"> 
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-8 " 
//           variants={headerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h1 className="text-2xl pt-10 font-la-mango" variants={headerTextVariants}>
//             Contact Us
//           </motion.h1>
//           <motion.p className="text-sm text-gray-500 pt-3" variants={headerTextVariants}>
//             Home / Contact
//           </motion.p>
//         </motion.div>

//         {/* Location Tabs */}
//         <motion.div
//           className="flex flex-wrap gap-3 mb-8 justify-left pb-10 " 
//           variants={tabsContainerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {locations.map((location) => (
//             <motion.button
//               key={location.id}
//               onClick={() => handleLocationClick(location.id)}
//               className={`px-6 py-2 rounded-xl  text-sm font-medium transition-colors duration-200 shadow-md ${ 
//                 activeLocation === location.id
//                   ? "bg-[#1c2c1a] text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
//               }`}
//               variants={tabButtonVariants}
//               whileHover={{ scale: 1.05 }} 
//               whileTap={{ scale: 0.95 }} 
//             >
//               {location.name}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Content Section - Image Left, Info Right */}
//         <AnimatePresence mode="wait"> 
//           <motion.div
//             key={activeLocationData.id} 
//             className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16" 
//             variants={contentSectionVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden" 
//             >
//             {/* Store Image */}
//             <motion.div variants={imageVariants}>
//               <div className="rounded-4xl overflow-hidden shadow-xl"> 
//                 <img
//                   src={activeLocationData?.image || "/placeholder.svg"}
//                   alt={`${activeLocationData?.name} Store`}
//                   className="w-full h-[432px] object-cover" 
//                 />
//               </div>
//             </motion.div>

//             {/* Store Information */}
//             <motion.div variants={textInfoVariants}>
//               <h2 className="text-3xl font-bold mb-4 text-gray-900">{activeLocationData?.title}</h2> 
//               <p className="text-gray-700 mb-3 text-lg leading-relaxed">{activeLocationData?.address}</p> 
//               <p className="text-gray-700 mb-2 text-lg">{activeLocationData?.email}</p>
//               <p className="text-gray-700 mb-6 text-lg">{activeLocationData?.phone}</p>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//       </div>
//     </div>
//   )
// }
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import suratStoreImage from "../../assets/surat.png";
import ahmedabadStoreImage from "../../assets/ahm.png";
import mumbaiStoreImage from "../../assets/pune.png";

const locations = [
  {
    id: "surat",
    name: "Surat",
    image: suratStoreImage,
    title: "Bhatar",
    address:
      "102, Ashapura Square Nizampura Plot 77A Ambika Industrial Estate Opp Vanmora Near Navjivan Cricle Udhna-Magdalla, Main, Road, Surat, Gujarat",
    email: "info.zulasnmore@gmail.com",
    phone: "9824441703",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    image: ahmedabadStoreImage,
    title: "Navrangpura",
    address:
      "Shop 5, Ground Floor, Shivalik Plaza, Near IIM Road, Navrangpura, Ahmedabad, Gujarat",
    email: "ahmedabad.zulasnmore@gmail.com",
    phone: "9876543210",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    image: mumbaiStoreImage,
    title: "Andheri",
    address:
      "Shop 12, Lotus Business Park, Near Andheri Metro Station, Andheri East, Mumbai, Maharashtra",
    email: "mumbai.zulasnmore@gmail.com",
    phone: "9765432109",
  },
];

// --- Animation Variants ---
const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const headerTextVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const tabsContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1,
      delay: 0.5,
    },
  },
};

const tabButtonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const contentSectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.9,
    filter: "blur(5px)",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const imageVariants = {
  hidden: { x: -100, opacity: 0, scale: 0.8, rotateY: -30, z: -50 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    z: 0,
    transition: { type: "spring", stiffness: 80, damping: 15, duration: 0.8 },
  },
};

const textInfoVariants = {
  hidden: { x: 100, opacity: 0, scale: 0.8, rotateY: 30, z: -50 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    z: 0,
    transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.2, duration: 0.8 },
  },
};

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState("surat");
  const handleLocationClick = (locationId) => setActiveLocation(locationId);
  const activeLocationData = locations.find((l) => l.id === activeLocation);

  return (
    <>
      {/* 🔥 CSS Glow/3D Border Animation */}
      <style>{`
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3),
                        0 0 40px rgba(255, 200, 150, 0.3),
                        0 0 60px rgba(255, 200, 150, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.5),
                        0 0 60px rgba(255, 200, 150, 0.5),
                        0 0 90px rgba(255, 200, 150, 0.3);
          }
        }

        @keyframes lightExpand {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }

        .glow-container {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          animation: glowPulse 4s infinite ease-in-out;
        }

        .light-circle {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 80%);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          animation: lightExpand 6s infinite ease-in-out;
          z-index: 1;
        }

        .store-img {
          position: relative;
          z-index: 2;
          border-radius: 16px;
        }
      `}</style>

      <div className="bg-amber-50 min-h-screen pt-15 px-4 py-8 md:px-8 lg:px-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="text-2xl font-la-mango" variants={headerTextVariants}>
              Contact Us
            </motion.h1>
            <motion.p className="text-sm text-gray-500 pt-3" variants={headerTextVariants}>
              Home / Contact
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8 justify-left pb-10"
            variants={tabsContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {locations.map((location) => (
              <motion.button
                key={location.id}
                onClick={() => handleLocationClick(location.id)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-colors duration-200 shadow-md ${
                  activeLocation === location.id
                    ? "bg-[#1c2c1a] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
                variants={tabButtonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {location.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Content Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLocationData.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16"
              style={{ perspective: 1000 }}
              variants={contentSectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Glowing Image */}
              <motion.div variants={imageVariants}>
                <div className="glow-container">
                  <div className="light-circle" />
                  <img
                    src={activeLocationData?.image || "/placeholder.svg"}
                    alt={`${activeLocationData?.name} Store`}
                    className="store-img w-full h-[432px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Info */}
              <motion.div variants={textInfoVariants}>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {activeLocationData?.title}
                </h2>
                <p className="text-gray-700 mb-3 text-lg leading-relaxed">
                  {activeLocationData?.address}
                </p>
                <p className="text-gray-700 mb-2 text-lg">{activeLocationData?.email}</p>
                <p className="text-gray-700 mb-6 text-lg">{activeLocationData?.phone}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
