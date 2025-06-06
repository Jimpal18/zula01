
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import logo from "../../assets/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  // Check if user is logged in from localStorage
  const [isLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isLoggedIn") === "true";
    }
    return false;
  });

  const handleClick = () => setNav(!nav);

  const scrollToTop = () => {
    setNav(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
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

  const gradientHoverClasses = `
    relative overflow-hidden z-10
    group
    p-2 rounded-full border border-black
    transition-all duration-300 ease-in-out
    hover:border-transparent
  `;

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
      <div className="px-4 max-w-screen-xl mx-auto flex items-center justify-between h-[70px]">
        {/* LOGO */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Link to="/home" onClick={scrollToTop}>
            <img
              src={logo}
              alt="Zula Logo"
              className="h-24 w-auto object-contain brightness-10"
            />
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
          {/* Cart */}
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className={gradientHoverClasses}
          >
            <div className={gradientOverlayClasses}></div>
            <Link to="/addcart" onClick={scrollToTop} aria-label="Cart">
              <FiShoppingCart className="w-5 h-5 text-black" />
            </Link>
          </motion.div>

          {/* Wishlist */}
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className={gradientHoverClasses}
          >
            <div className={gradientOverlayClasses}></div>
            <Link to="/whilist" onClick={scrollToTop} aria-label="Wishlist">
              <FiHeart className="w-5 h-5 text-black" />
            </Link>
          </motion.div>

          {/* User/Profile */}
          <motion.div
            key={isLoggedIn ? "profile" : "login"}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className={gradientHoverClasses}
          >
            <div className={gradientOverlayClasses}></div>
            <Link
              to={isLoggedIn ? "/profile" : "/login"}
              onClick={scrollToTop}
              aria-label="User"
            >
              <FiUser className="w-5 h-5 text-black" />
            </Link>
          </motion.div>

          {/* Mobile Menu Icon */}
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
                  className="w-full p-2 pr-10 rounded-3xl bg-black text-white placeholder-white focus:outline-none border-2 border-black transition-colors duration-300 ease-in-out focus:border-amber-500"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
              </div>
            </div>

            {/* Mobile Links */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
