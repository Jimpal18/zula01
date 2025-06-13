import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import woodenSwingImage from "../../assets/pic1.jpg";
import gardenSwingImage from "../../assets/pic2.jpg";

const MoreZula = () => {
  const [mainImage, setMainImage] = useState(woodenSwingImage);
  const images = [woodenSwingImage, gardenSwingImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setMainImage(images[currentIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 200 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: 0.5,
      },
    },
  };

  const smallImageHover = () => ({
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 400,
    },
  });

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="relative bg-amber-50 min-h-screen mb-10 px-4 py-12 md:px-10 lg:px-20 xl:px-32 2xl:px-40 overflow-hidden"
    >
      {/* ✨ Light Amber Infinite Background Circles */}
   {/* Highlighted Amber Background Circles */}
<div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
  {[...Array(12)].map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full bg-amber-100 border border-amber-200 shadow-sm opacity-60 animate-slow-pulse"
      style={{
        width: `${200 + i * 100}px`,
        height: `${200 + i * 100}px`,
        animationDelay: `${i * 0.3}s`,
        mixBlendMode: "overlay", // helps highlight against bg
      }}
    />
  ))}
</div>

      {/* ✅ Your Original Content — Unchanged */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={leftSlideVariants} className="text-center mb-10">
          <h1 className="text-3xl lg:text-3xl font-la-mango text-gray-800">Our Story</h1>
          <p className="text-sm text-gray-500 pt-3 pb-10">Home / Story</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={leftSlideVariants}>
            <motion.h3
              variants={leftSlideVariants}
              className="text-xl lg:text-2xl font-la-mango mb-6 leading-snug text-gray-800"
            >
              Zulas n More brings you top-notch swings which give you better comfort and luxury.
            </motion.h3>
            <motion.p
              variants={leftSlideVariants}
              className="text-gray-500 mb-6 text-base lg:text-1xl leading-relaxed"
            >
              Zulas n More is a leading force in the world of furniture manufacturing,
              driven by a relentless commitment to craftsmanship, innovation, and design
              excellence. With over 15 years of cumulative experience, we have garnered a
              reputation for creating exceptional furniture pieces that adorn homes,
              offices, and spaces of all kinds.
            </motion.p>
            <motion.div
              variants={leftSlideVariants}
              className="grid grid-cols-2 gap-5 pt-6"
              style={{ perspective: "1000px" }}
            >
              <motion.img
                whileHover={smallImageHover()}
                src={gardenSwingImage}
                alt="Garden Swing"
                className="w-full h-40 md:h-48 lg:h-56 xl:h-64 object-cover rounded-3xl shadow-md"
              />
              <motion.img
                whileHover={smallImageHover()}
                src={gardenSwingImage}
                alt="Cloud Swing"
                className="w-full h-40 md:h-48 lg:h-56 xl:h-64 object-cover rounded-3xl shadow-md"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={rightImageVariants}
            initial="hidden"
            animate="show"
            className="flex justify-center lg:justify-end"
            style={{ perspective: "1000px" }}
          >
            <motion.img
              key={mainImage}
              src={mainImage}
              alt="Swing Showcase"
              className="w-full max-w-sm sm:max-w-md lg:max-w-full lg:h-[32rem] xl:h-[36rem] object-cover rounded-4xl shadow-2xl"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MoreZula;
