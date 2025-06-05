// // "use client"

// // import React, { useState, useEffect, useRef } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import { Link } from "react-router-dom"
// // import { MenuIcon, XIcon } from "@heroicons/react/outline"
// // import { FaSearch } from "react-icons/fa"
// // import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi"
// // import logo from "../../assets/logo.png"

// // function Navbar() {
// //   const [nav, setNav] = useState(false)
// //   const [isLargeScreen, setIsLargeScreen] = useState(false)
// //   const containerRef = useRef(null)

// //   const handleClick = () => setNav(!nav)
// //   const handleClose = () => setNav(false)

// //   const scrollToTop = () => {
// //     setNav(false) 
// //     setTimeout(() => {
// //       window.scrollTo({ top: 0, behavior: "smooth" })
// //     }, 100) 
// //   }

// //   useEffect(() => {
// //     const checkScreenSize = () => {
// //       setIsLargeScreen(window.innerWidth >= 768)
// //     }

// //     checkScreenSize()
// //     window.addEventListener("resize", checkScreenSize)

// //     return () => {
// //       window.removeEventListener("resize", checkScreenSize)
// //     }
// //   }, [])

// //   const routes = {
// //     Home: "/home",
// //     "All Product": "/products",
// //     "Shop by Categories": "/categories",
// //     "New Product": "/newproducts",
// //     "Our Story": "/ourstory",
// //     Contact: "/contact"
// //   }

// //   const navItemVariants = {
// //     hidden: { opacity: 0, y: -10 },
// //     visible: (i) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { delay: i * 0.1, duration: 0.6, ease: "easeInOut" }
// //     }),
// //     exit: { opacity: 0, y: 10 }
// //   }

// //   const iconVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeInOut" } },
// //     hover: {
// //       scale: 1.1,
// //       backgroundColor: "#000000",
// //       borderColor: "#000000",
// //       color: "#fff",
// //       transition: { duration: 0.2 }
// //     }
// //   }

// //   const logoVariants = {
// //     hidden: { opacity: 0, x: -20 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
// //     hover: { scale: 1.1, transition: { duration: 0.3, yoyo: Infinity } }
// //   }

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: -20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.8, ease: "easeInOut" }}
// //       className="w-full fixed top-0 left-0 bg-amber-50 z-50 shadow-md"
// //     >
// //       <div className="px-4 max-w-screen-xl mx-auto flex items-center justify-between h-[70px]" ref={containerRef}>
// //         {/* LOGO */}
// //         <motion.div variants={logoVariants} initial="hidden" animate="visible" whileHover="hover">
// //           <Link to="/home" onClick={scrollToTop}>
// //             <img src={logo || "/placeholder.svg"} alt="Logo" className="h-25 w-auto object-contain" />
// //           </Link>
// //         </motion.div>

// //         {/* DESKTOP MENU */}
// //         <motion.ul className="hidden md:flex gap-6 text-black font-normal text-sm" initial="hidden" animate="visible">
// //           {Object.entries(routes).map(([item, path], index) => (
// //             <motion.li
// //               key={item}
// //               variants={navItemVariants}
// //               custom={index}
// //               whileHover={{ scale: 1.1, color: "#f59e0b" }}
// //             >
// //               <Link to={path} onClick={scrollToTop} className="hover:text-amber-600">
// //                 {item}
// //               </Link>
// //             </motion.li>
// //           ))}
// //         </motion.ul>

// //         {/* RIGHT ICONS */}
// //         <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-amber-50 p-2 rounded-full">
// //           {/* Cart */}
// //           <motion.div
// //             variants={iconVariants}
// //             initial="hidden"
// //             animate="visible"
// //             whileHover="hover"
// //             className="p-2 rounded-full bg-amber-50 border  flex items-center justify-center transition-all duration-200"
// //           >
// //             <Link to="/addcart" onClick={scrollToTop} className="text-black hover:text-amber-200">
// //               <FiShoppingCart className="w-5 h-5" />
// //             </Link>
// //           </motion.div>

// //           {/* Wishlist */}
// //           <motion.div
// //             variants={iconVariants}
// //             initial="hidden"
// //             animate="visible"
// //             whileHover="hover"
// //             className="p-2 rounded-full bg-amber-50 border  flex items-center justify-center transition-all duration-200"
// //           >
// //             <Link to="/whilist" onClick={scrollToTop} className="text-black hover:text-amber-200">
// //               <FiHeart className="w-5 h-5" />
// //             </Link>
// //           </motion.div>

// //           {/* Profile */}
// //           <motion.div
// //             variants={iconVariants}
// //             initial="hidden"
// //             animate="visible"
// //             whileHover="hover"
// //             className="p-2 rounded-full bg-amber-50 border  flex items-center justify-center transition-all duration-200"
// //           >
// //             <Link to="/profile" onClick={scrollToTop} className="text-black hover:text-amber-200">
// //               <FiUser className="w-5 h-5" />
// //             </Link>
// //           </motion.div>

// //           {/* Login */}
// //           <motion.div
// //             whileHover={{ scale: 1.1, color: "white" }}
// //             transition={{ type: "spring", stiffness: 400, damping: 17 }}
// //           >
// //             <Link to="/login" onClick={scrollToTop} className="text-black hover:text-amber-200 px-2 py-1 border rounded-xl hover:bg-black">
// //               Login
// //             </Link>
// //           </motion.div>

// //           {/* MOBILE MENU ICON */}
// //           <div onClick={handleClick} className="md:hidden cursor-pointer">
// //             {nav ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
// //           </div>
// //         </div>
// //       </div>

// //       {/* MOBILE DROPDOWN */}
// //       <AnimatePresence>
// //         {nav && (
// //           <motion.div
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: "auto" }}
// //             exit={{ opacity: 0, height: 0 }}
// //             transition={{ duration: 0.3, ease: "easeInOut" }}
// //             className="md:hidden bg-amber-50 w-full px-4 pb-4 overflow-hidden"
// //           >
// //             {/* Optional Search Bar */}
// //             <div className="py-3 flex justify-center">
// //               <div className="relative w-full max-w-[660px]">
// //                 <input
// //                   type="text"
// //                   placeholder="Search..."
// //                   className="w-full p-2 pr-10 rounded-3xl bg-black text-white placeholder-white focus:outline-none"
// //                 />
// //                 <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
// //               </div>
// //             </div>

// //             {/* MOBILE MENU ITEMS */}
// //             <ul className="flex flex-col space-y-3 text-black font-bold">
// //               {Object.entries(routes).map(([item, path]) => (
// //                 <li key={item}>
// //                   <Link to={path} onClick={scrollToTop}>
// //                     {item}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   )
// // }

// // export default Navbar


// // "use client"

// import React, { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Link } from "react-router-dom"
// import { MenuIcon, XIcon } from "@heroicons/react/outline"
// import { FaSearch } from "react-icons/fa"
// import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi"
// import logo from "../../assets/logo.png"

// function Navbar() {
//   const [nav, setNav] = useState(false)
//   const [isLargeScreen, setIsLargeScreen] = useState(false)
//   const containerRef = useRef(null)

//   const handleClick = () => setNav(!nav)
//   const handleClose = () => setNav(false)

//   // Scroll to top and close mobile nav smoothly
//   const scrollToTop = () => {
//     setNav(false) // Close mobile menu first
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: "smooth" })
//     }, 100) // Delay so menu close animation works before scroll
//   }

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 768)
//     }

//     checkScreenSize()
//     window.addEventListener("resize", checkScreenSize)

//     return () => {
//       window.removeEventListener("resize", checkScreenSize)
//     }
//   }, [])

//   const routes = {
//     Home: "/home",
//     "All Product": "/products",
//     "Shop by Categories": "/categories",
//     "New Product": "/newproducts",
//     "Our Story": "/ourstory",
//     Contact: "/contact"
//   }

//   const navItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.6, ease: "easeInOut" }
//     }),
//     exit: { opacity: 0, y: 10 }
//   }

//   const iconVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeInOut" } },
//     hover: {
//       scale: 1.1,
//       backgroundColor: "#000000",
//       borderColor: "#000000",
//       color: "#fff",
//       transition: { duration: 0.2 }
//     }
//   }

//   const logoVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
//     hover: { scale: 1.1, transition: { duration: 0.3, yoyo: Infinity } }
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//       // Removed 'fixed', 'top-0', and 'left-0' classes
//       className="w-full bg-amber-50 z-50 shadow-md pt-3"
//     >
//       <div className="px-4 max-w-screen-xl mx-auto flex items-center justify-between h-[70px]" ref={containerRef}>
//         {/* LOGO */}
//         <motion.div variants={logoVariants} initial="hidden" animate="visible" whileHover="hover">
//           <Link to="/home" onClick={scrollToTop}>
//             <img src={logo} alt="Logo" className="h-25 w-auto object-contain" />
//           </Link>
//         </motion.div>

//         {/* DESKTOP MENU */}
//         <motion.ul className="hidden md:flex gap-6 text-black font-normal text-sm" initial="hidden" animate="visible">
//           {Object.entries(routes).map(([item, path], index) => (
//             <motion.li
//               key={item}
//               variants={navItemVariants}
//               custom={index}
//               whileHover={{ scale: 1.1, color: "#f59e0b" }}
//             >
//               <Link to={path} onClick={scrollToTop} className="hover:text-amber-600">
//                 {item}
//               </Link>
//             </motion.li>
//           ))}
//         </motion.ul>

//         {/* RIGHT ICONS */}
//         <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-amber-50 p-2 rounded-full">
//           {/* Cart */}
//           <motion.div
//             variants={iconVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             className="p-2 rounded-full bg-amber-50 border flex items-center justify-center transition-all duration-200"
//           >
//             <Link to="/addcart" onClick={scrollToTop} className="text-black hover:text-amber-200">
//               <FiShoppingCart className="w-5 h-5" />
//             </Link>
//           </motion.div>

//           {/* Wishlist */}
//           <motion.div
//             variants={iconVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             className="p-2 rounded-full bg-amber-50 border flex items-center justify-center transition-all duration-200"
//           >
//             <Link to="/whilist" onClick={scrollToTop} className="text-black hover:text-amber-200">
//               <FiHeart className="w-5 h-5" />
//             </Link>
//           </motion.div>

//           {/* Profile */}
//           <motion.div
//             variants={iconVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             className="p-2 rounded-full bg-amber-50 border flex items-center justify-center transition-all duration-200"
//           >
//             <Link to="/profile" onClick={scrollToTop} className="text-black hover:text-amber-200">
//               <FiUser className="w-5 h-5" />
//             </Link>
//           </motion.div>

//           {/* Login */}
//           <motion.div
//             whileHover={{ scale: 1.1, color: "white" }}
//             transition={{ type: "spring", stiffness: 400, damping: 17 }}
//           >
//             <Link to="/login" onClick={scrollToTop} className="text-black hover:text-amber-200 px-2 py-1 border rounded-xl hover:bg-black">
//               Login
//             </Link>
//           </motion.div>

//           {/* MOBILE MENU ICON */}
//           <div onClick={handleClick} className="md:hidden cursor-pointer">
//             {nav ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
//           </div>
//         </div>
//       </div>

//       {/* MOBILE DROPDOWN */}
//       <AnimatePresence>
//         {nav && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="md:hidden bg-amber-50 w-full px-4 pb-4 overflow-hidden"
//           >
//             {/* Optional Search Bar */}
//             <div className="py-3 flex justify-center">
//               <div className="relative w-full max-w-[660px]">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full p-2 pr-10 rounded-3xl bg-black text-white placeholder-white focus:outline-none"
//                 />
//                 <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
//               </div>
//             </div>

//             {/* MOBILE MENU ITEMS */}
//             <ul className="flex flex-col space-y-3 text-black font-bold">
//               {Object.entries(routes).map(([item, path]) => (
//                 <li key={item}>
//                   <Link to={path} onClick={scrollToTop}>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// export default Navbar

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import logo from "../../assets/logo.png";

const INACTIVITY_TIMEOUT = 4 * 60 * 1000; // 4 minutes in milliseconds

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  // isLoggedIn state ko localStorage se initialize karein
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isLoggedIn") === "true";
    }
    return false;
  });
  const [showInactivityPopup, setShowInactivityPopup] = useState(false);
  const inactivityTimerRef = useRef(null); // Timer for inactivity popup
  const containerRef = useRef(null); // For general use, not strictly needed for this example

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);

  const scrollToTop = () => {
    setNav(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // --- Inactivity Popup Logic ---
  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      // Only show popup if user is NOT logged in and popup is not already visible
      if (!isLoggedIn && !showInactivityPopup) {
        setShowInactivityPopup(true);
      }
    }, INACTIVITY_TIMEOUT);
  };

  useEffect(() => {
    // Start timer on component mount
    resetInactivityTimer();

    // Reset timer on user activity
    const handleUserActivity = () => {
      resetInactivityTimer();
      // If popup is visible and user becomes active, hide it (optional, but good UX)
      if (showInactivityPopup) {
        setShowInactivityPopup(false);
      }
    };

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
    window.addEventListener("click", handleUserActivity);
    window.addEventListener("scroll", handleUserActivity);

    // Cleanup timer and event listeners on unmount
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("click", handleUserActivity);
      window.removeEventListener("scroll", handleUserActivity);
    };
  }, [isLoggedIn, showInactivityPopup]); // Depend on isLoggedIn and showInactivityPopup

  // --- Screen Size Check and Local Storage Persistence ---
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // isLoggedIn state change hone par localStorage update karein
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", isLoggedIn);
    }
  }, [isLoggedIn]);

  // --- Demo Login/Logout Function ---
  const handleLoginLogoutSimulation = () => {
    setIsLoggedIn((prev) => !prev);

    if (!isLoggedIn) { 
      setShowInactivityPopup(false);
      resetInactivityTimer();
    }
  };

  const routes = {
    Home: "/home",
    AllProduct: "/products",
    ShopbyCategories: "/categories",
    NewProduct: "/newproducts",
    OurStory: "/ourstory",
    Contact: "/contact",
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeInOut" },
    }),
    exit: { opacity: 0, y: 10 },
  };

  // Framer Motion icon variants (for initial animation and simple scale hover)
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    // Main hover background/color change directly with Tailwind classes
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    hover: { scale: 1.1, transition: { duration: 0.3, yoyo: Infinity } },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  // Common classes for the gradient hover effect on icons
  const gradientHoverClasses = `
    relative overflow-hidden z-10
    group
    p-2 rounded-full border border-black
    transition-all duration-300 ease-in-out
    hover:border-transparent
  `;

  // Gradient overlay which becomes visible on hover
  const gradientOverlayClasses = `
    absolute inset-0 rounded-full
    bg-gradient-to-br from-amber-400 via-amber-500 to-amber-100
    opacity-0 group-hover:opacity-100
    scale-50 group-hover:scale-100
    transition-all duration-300 ease-in-out 
    fill-black
    z-[-1]
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full bg-amber-50 z-50 shadow-md pt-3 "
    >
      <div
        className="px-4 max-w-screen-xl  mx-auto flex items-center justify-between h-[70px] "
        ref={containerRef}
      >
        {/* LOGO */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Link to="/home" onClick={scrollToTop}>
            <img src={logo} alt="Zula Logo" className="h-24 w-auto object-contain brightness-10" />
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}
        <motion.ul
          className="hidden md:flex gap-6 text-black font-normal text-sm"
          initial="hidden"
          animate="visible"
        >
          {Object.entries(routes).map(([item, path], index) => (
            <motion.li
              key={item}
              variants={navItemVariants}
              custom={index}
              whileHover={{ scale: 1.1, color: "#f59e0b" }}
            >
              <Link to={path} onClick={scrollToTop} className="hover:text-amber-600">
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-amber-50 p-2 rounded-full">
          {/* Cart Icon */}
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className={gradientHoverClasses}
          >
            <div className={gradientOverlayClasses}></div> {/* Gradient overlay */}
            <Link to="/addcart" onClick={scrollToTop} aria-label="Cart">
              <FiShoppingCart className="w-5 h-5 text-black group-hover:text-black transition-colors duration-300 ease-in-out " />
            </Link>
          </motion.div>

          {/* Wishlist Icon */}
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className={gradientHoverClasses}
          >
            <div className={gradientOverlayClasses}></div> {/* Gradient overlay */}
            <Link to="/whilist" onClick={scrollToTop} aria-label="Wishlist">
              <FiHeart className="w-5 h-5 text-black group-hover:text-black transition-colors duration-300 ease-in-out " />
            </Link>
          </motion.div>

          {/* Conditional User/Profile Icon */}
          <AnimatePresence mode="wait">
            {isLoggedIn ? (
              // If user is logged in: Profile Icon
              <motion.div
                key="profile-icon"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={gradientHoverClasses}
              >
                <div className={gradientOverlayClasses}></div> {/* Gradient overlay */}
                <Link
                  to="/profile"
                  onClick={scrollToTop}
                  aria-label="User Profile"
                >
                  <FiUser className="w-5 h-5 text-black group-hover:text-black transition-colors duration-300 ease-in-out " />
                </Link>
              </motion.div>
            ) : 
            (
              // If user is logged out: Login/Signup Icon
              <motion.div
                key="login-signup-icon"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={gradientHoverClasses}
              >
                <div className={gradientOverlayClasses}></div> 
                <Link
                  to="/login"
                  onClick={scrollToTop}
                  aria-label="Login or Sign Up"
                >
                  <FiUser className="w-5 h-5 text-black group-hover:text-black transition-colors duration-300 ease-in-out" />
                </Link>
              </motion.div>
            )
            }
          </AnimatePresence>

          {/* DEMO BUTTON: For debugging/testing purposes only. Remove in real app. */}
          {/* <motion.div
            whileHover={{ scale: 1.1, color: "white" }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button
              onClick={handleLoginLogoutSimulation}
              className="text-black hover:text-amber-200 px-2 py-1 border rounded-xl hover:bg-black text-sm"
            >
              {isLoggedIn ? "Simulate Logout" : "Simulate Login"}
            </button>
          </motion.div> */}

          {/* MOBILE MENU ICON */}
          <div onClick={handleClick} className="md:hidden cursor-pointer">
            {nav ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-amber-50 w-full px-4 pb-4 overflow-hidden"
          >
            {/* Search Bar */}
            <div className="py-3 flex justify-center">
              <div className="relative w-full max-w-[660px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 pr-10 rounded-3xl bg-black text-white placeholder-white focus:outline-none 
                             border-2 border-black transition-colors duration-300 ease-in-out 
                             focus:border-amber-500" // Added and modified classes here
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
              </div>
            </div>

            {/* Mobile Nav Links */}
            <ul className="flex flex-col space-y-3 text-black font-bold">
              {Object.entries(routes).map(([item, path]) => (
                <li key={item}>
                  <Link
                    to={path}
                    onClick={scrollToTop}
                    className="block py-2 hover:text-amber-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Toggle Login (Mobile only) */}
            {/* <div className="mt-4 text-center">
              <button
                onClick={() => handleLoginLogoutSimulation()} // Use simulation function
                className="px-4 py-2 bg-amber-200 text-amber-800 rounded-full text-sm font-semibold hover:bg-amber-300 transition duration-200"
              >
                {isLoggedIn ? "Logout Demo" : "Login Demo"}
              </button>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inactivity Pop-up */}
      <AnimatePresence>
        {showInactivityPopup && !isLoggedIn && ( // Only show if not logged in
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white p-8 rounded-lg shadow-xl max-w-sm text-center relative"
            >
              <button
                onClick={() => {
                  setShowInactivityPopup(false);
                  resetInactivityTimer(); // Reset timer when closed
                }}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-amber-700">Are you still there?</h2>
              <p className="text-gray-700 mb-6">
                You've been inactive for a while. Log in or sign up to save your progress and
                discover more!
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/login"
                  onClick={() => {
                    scrollToTop();
                    setShowInactivityPopup(false);
                    // No need to set isLoggedIn here, actual login process will do it
                    resetInactivityTimer(); 
                  }}
                  className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition duration-200"
                >
                  Login / Sign Up
                </Link>
                <button
                  onClick={() => {
                    setShowInactivityPopup(false);
                    resetInactivityTimer(); // Reset timer when user clicks to continue
                  }}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200"
                >
                  Continue Browse
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
