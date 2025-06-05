import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import image1 from '../../assets/pic7.jpg';
import image2 from '../../assets/pic8.jpg';
import image3 from '../../assets/pic9.jpg';
import image4 from '../../assets/pic10.jpg';
import image5 from '../../assets/pic7.jpg';
import image6 from '../../assets/pic8.jpg';
import image7 from '../../assets/pic9.jpg';
import image8 from '../../assets/pic10.jpg';
import image9 from '../../assets/pic7.jpg';
import image10 from '../../assets/pic8.jpg';
import image11 from '../../assets/pic9.jpg';
import image12 from '../../assets/pic10.jpg';
import image13 from '../../assets/pic7.jpg';
import image14 from '../../assets/pic8.jpg';
import image15 from '../../assets/pic9.jpg';

const WhyChoose = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  // Intersection Observer hook
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const imageDetails = [
    { title: 'Furniture Design 1', description: 'A team of skilled designers specializes in creating furniture that marries style and comfort.' },
    { title: 'Material Selection 2', description: 'Experts carefully choose the finest materials for durability and aesthetic appeal.' },
    { title: '3D Modeling 3', description: 'Advanced technology is used to visualize and perfect designs before production' },
    { title: 'Craftsmanship 4', description: 'Experienced artisans bring designs to life with meticulous attention to detail.' },
    { title: 'Quality Control 5', description: 'Rigorous checks ensure every piece meets the highest standards of quality.' },
    { title: 'Furniture Design 6', description: 'A team of skilled designers specializes in creating furniture that marries style and comfort.' },
    { title: 'Material Selection 7', description: 'Experts carefully choose the finest materials for durability and aesthetic appeal.' },
    { title: '3D Modeling 8', description: 'Advanced technology is used to visualize and perfect designs before production' },
    { title: 'Craftsmanship 9', description: 'Experienced artisans bring designs to life with meticulous attention to detail.' },
    { title: 'Quality Control 10', description: 'Rigorous checks ensure every piece meets the highest standards of quality.' },
    { title: 'Furniture Design 11', description: 'A team of skilled designers specializes in creating furniture that marries style and comfort.' },
    { title: 'Material Selection 12', description: 'Experts carefully choose the finest materials for durability and aesthetic appeal.' },
    { title: '3D Modeling 13', description: 'Advanced technology is used to visualize and perfect designs before production' },
    { title: 'Craftsmanship 14', description: 'Experienced artisans bring designs to life with meticulous attention to detail.' },
    { title: 'Quality Control 15', description: 'Rigorous checks ensure every piece meets the highest standards of quality.' },
  ];

  const imageSources = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const isAtEnd = scrollWidth - scrollLeft - clientWidth < 1;
      setShowLeftArrow(isAtEnd);
    }
  };

  const scrollToStart = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div
      className="bg-amber-50 px-4 py-6 md:px-8 lg:px-16 pb-20"
      ref={inViewRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <h1 className="text-3xl font-la-mango text-gray-800 pb-7">
            Why Choose Zulas n More?
          </h1>
        </div>

        <div className="relative">
          <motion.div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 md:gap-8 py-4 no-scrollbar"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'transparent transparent',
              display: '-webkit-box',
              WebkitOverflowScrolling: 'touch',
            }}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <style global jsx>{`
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {imageDetails.map((item, index) => {
              const currentImage = imageSources[index];
              return (
                <motion.div
                  key={index}
                   className="
                    relative 
                    w-[300px] sm:w-[280px] md:w-[280px] lg:w-[300px] 
                    h-[280px] sm:h-[300px] md:h-[320px] 
                    rounded-4xl overflow-hidden shadow-lg group flex-shrink-0 mb-20
                  "
                  variants={itemVariants}
                >
                  <img
                    src={currentImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end"
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {showLeftArrow && (
            <motion.button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg cursor-pointer z-10"
              onClick={scrollToStart}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
