"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import logo from "../../assets/logo.png";

// Animation Variants (defined at the top to avoid reference errors)
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeInOut" },
  }),
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
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

// Gradient hover classes (CSS-in-JS)
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
  z-[-1]
`;

function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isLoggedIn") === "true";
    }
    return false;
  });

  const handleClick = () => setNav(!nav);

  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "instant" }); // Force scroll to top instantly
    setNav(false); // Close mobile menu
    setTimeout(() => navigate(path), 0); // Navigate after scroll
  };

  const routes = {
    Home: "/home",
    AllProduct: "/products",
    ShopbyCategories: "/categories",
    NewProduct: "/newproducts",
    OurStory: "/ourstory",
    Contact: "/contact",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full bg-amber-50 z-50 shadow-md pt-3 sticky top-0 md:static"
    >
      <div className="px-4 max-w-screen-xl mx-auto flex items-center justify-between h-[70px]">
        {/* LOGO */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Link to="/home" onClick={handleLinkClick("/home")}>
            <img
              src={logo}
              alt="Zula Logo"
              className="h-24 w-auto object-contain"
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
              <Link
                to={path}
                onClick={handleLinkClick(path)}
                className="hover:text-amber-600"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-amber-50 p-2 rounded-full">
          {[
            { to: "/addcart", icon: <FiShoppingCart />, label: "Cart" },
            { to: "/whilist", icon: <FiHeart />, label: "Wishlist" },
            {
              to: isLoggedIn ? "/profile" : "/login",
              icon: <FiUser />,
              label: "User",
            },
          ].map(({ to, icon, label }) => (
            <motion.div
              key={label}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className={gradientHoverClasses}
            >
              <div className={gradientOverlayClasses}></div>
              <Link to={to} onClick={handleLinkClick(to)} aria-label={label}>
                {icon}
              </Link>
            </motion.div>
          ))}

          {/* Mobile Menu Toggle */}
          <div onClick={handleClick} className="md:hidden cursor-pointer">
            {nav ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[81px] right-0 w-full bg-amber-50 z-40 shadow-lg px-6 py-4 md:hidden rounded-bl-xl"
          >
            <ul className="flex flex-col space-y-1 text-black font-bold">
              {Object.entries(routes).map(([item, path]) => (
                <li key={item}>
                  <Link
                    to={path}
                    onClick={handleLinkClick(path)}
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