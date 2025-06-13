// import { FaInstagram, FaFacebookF, FaYoutube, FaArrowRight } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";

// export default function Footer() {
//   const navigate = useNavigate(); 

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     navigate("/signup");
//   };

//   return (
//     <footer className="bg-[#2a2e0f] text-white">
//       <div className="container mx-auto  px-4 sm:px-6 lg:px-12 py-12">
//         {/* Top section with logo and description */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10 ">
//           <div className="w-full  sm:w-64 md:w-80 flex-shrink-0 ">
//             <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
//               <img
//                 src={logo || "/placeholder.svg"}
//                 alt="Logo"
//                 className="h-16 sm:h-25 object-contain brightness-10000 "
//               />
//             </Link>
//           </div>
//           <div className="max-w-full md:max-w-2xl text-sm sm:text-base pt-4 md:pt-0">
//             <p>
//               Zulas n More is a leading force in the world of furniture manufacturing,
//               driven by a relentless commitment to craftsmanship, innovation, and design
//               excellence. Having cumulative experience of 15+ Years,
//             </p>
//           </div>
//         </div>

//         {/* Main footer content */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-9">
//           {/* Shop section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 font-la-mango">Shop</h3>
//             <ul className="space-y-3 text-sm sm:text-base">
//               <li><Link to="#">Single Seats Swings</Link></li>
//               <li><Link to="#">Acrylic Swings</Link></li>
//               <li><Link to="#">Outdoor Swings</Link></li>
//               <li><Link to="#">Macrame Swings</Link></li>
//               <li><Link to="#">SS Swings</Link></li>
//               <li><Link to="#">Wooden Swings</Link></li>
//               <li><Link to="#">Designer Swings</Link></li>
//             </ul>
//           </div>

//           {/* Quick Link section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 font-la-mango">Quick Link</h3>
//             <ul className="space-y-3 text-sm sm:text-base">
//               <li><Link to="/home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
//               <li><Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>All Product</Link></li>
//               <li><Link to="/categories" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Shop by Categories</Link></li>
//               <li><Link to="/newproducts" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>New Product</Link></li>
//               <li><Link to="/ourstory" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Our Story</Link></li>
//               <li><Link to="/offers" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Offers</Link></li>
//               <li><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link></li>
//             </ul>
//           </div>

//           {/* Have Question section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 font-la-mango">Have Question?</h3>
//             <ul className="space-y-3 text-sm sm:text-base">
//               <li><Link to="#">Shipping Information</Link></li>
//               <li><Link to="#">Return & Exchange</Link></li>
//               <li><Link to="#">Contact US</Link></li>
//             </ul>
//           </div>

//           {/* Join Our Community section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 font-la-mango">Join Our Community</h3>
//             <p className="text-sm mb-4 font-normal max-w-sm">
//               Enter your email below to be the first to know about new collections and product launches.
//             </p>

//             <form
//               className="relative mb-6 max-w-xs"
//               onSubmit={handleFormSubmit}
//             >
//               <input
//                 type="email"
//                 placeholder="Enter Your e-mail"
//                 required
//                 className="w-full bg-amber-50 h-10 border-4 rounded-3xl text-black border-white py-2 pr-12 text-sm sm:text-base focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="absolute text-black right-4 top-1/2 -translate-y-1/2"
//               >
//                 <FaArrowRight className="h-5 w-6 sm:h-6 sm:w-7" />
//               </button>
//             </form>

//             {/* Social Icons */}
//             <div className="flex gap-4">
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
//                 className="p-2 rounded-full border border-white hover:bg-white hover:text-pink-600 transition">
//                 <FaInstagram className="h-5 w-5" />
//               </a>
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
//                 className="p-2 rounded-full border border-white hover:bg-white hover:text-blue-600 transition">
//                 <FaFacebookF className="h-5 w-5" />
//               </a>
//               <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
//                 className="p-2 rounded-full border border-white hover:bg-white hover:text-red-600 transition">
//                 <FaYoutube className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t  border-amber-50 mt-10  text-center  ">
//           <p className="text-sm pt-2 mt-5">© ZULAS N MORE 2023</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import { FaInstagram, FaFacebookF, FaYoutube, FaArrowRight } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";

// export default function Footer() {
//   const navigate = useNavigate();

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     navigate("/signup");
//   };

//   return (
//     <footer className="bg-[#2a2e0f] text-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
//         {/* Top section with logo and description */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10 ">
//           <div className="w-full sm:w-64 md:w-80 flex-shrink-0 ">
//             <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
//               <img
//                 src={logo || "/placeholder.svg"}
//                 alt="Logo"
//                 className="h-16 sm:h-25 object-contain brightness-10000"
//               />
//             </Link>
//           </div>
//           <div className="max-w-full md:max-w-2xl text-sm sm:text-base pt-4 md:pt-0">
//             <p>
//               Zulas n More is a leading force in the world of furniture manufacturing,
//               driven by a relentless commitment to craftsmanship, innovation, and design
//               excellence. Having cumulative experience of 15+ Years,
//             </p>
//           </div>
//         </div>

//         {/* Main footer content */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-9">
//           {/* Shop section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 font-la-mango">Shop</h3>
//             <ul className="space-y-3 text-sm sm:text-base">
//               <li><Link to="#">Single Seats Swings</Link></li>
//               <li><Link to="#">Acrylic Swings</Link></li>
//               <li><Link to="#">Outdoor Swings</Link></li>
//               <li><Link to="#">Macrame Swings</Link></li>
//               <li><Link to="#">SS Swings</Link></li>
//               <li><Link to="#">Wooden Swings</Link></li>
//               <li><Link to="#">Designer Swings</Link></li>
//             </ul>
//           </div>

//           {/* Quick Link section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 font-la-mango">Quick Link</h3>
//             <ul className="space-y-3 text-sm sm:text-base">
//               <li><Link to="/home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
//               <li><Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>All Product</Link></li>
//               <li><Link to="/categories" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Shop by Categories</Link></li>
//               <li><Link to="/newproducts" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>New Product</Link></li>
//               <li><Link to="/ourstory" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Our Story</Link></li>
//               <li><Link to="/offers" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Offers</Link></li>
//               <li><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link></li>
//             </ul>
//           </div>

//           {/* Have Question section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 font-la-mango">Have Question?</h3>
//             <ul className="space-y-3 text-sm sm:text-base">
//               <li><Link to="#">Shipping Information</Link></li>
//               <li><Link to="#">Return & Exchange</Link></li>
//               <li><Link to="#">Contact US</Link></li>
//             </ul>
//           </div>

//           {/* Join Our Community section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 font-la-mango">Join Our Community</h3>
//             <p className="text-sm mb-4 font-normal max-w-sm">
//               Enter your email below to be the first to know about new collections and product launches.
//             </p>

//             <form
//               className="relative mb-6 max-w-xs"
//               onSubmit={handleFormSubmit}
//             >
//               <div className="animated-border rounded-3xl p-[2px]">
//                 <input
//                   type="email"
//                   placeholder="Enter Your e-mail"
//                   required
//                   className="w-full bg-amber-50 h-10 rounded-3xl text-black px-4 text-sm sm:text-base focus:outline-none border-none"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="absolute text-black right-8 top-1/2 -translate-y-1/2"
//               >
//                 <FaArrowRight className="h-5 w-6 sm:h-6 sm:w-7" />
//               </button>
//             </form>

//             {/* Social Icons */}
//             <div className="flex gap-4">
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
//                 className="p-2 rounded-full border border-white hover:bg-white hover:text-pink-600 transition">
//                 <FaInstagram className="h-5 w-5" />
//               </a>
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
//                 className="p-2 rounded-full border border-white hover:bg-white hover:text-blue-600 transition">
//                 <FaFacebookF className="h-5 w-5" />
//               </a>
//               <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
//                 className="p-2 rounded-full border border-white hover:bg-white hover:text-red-600 transition">
//                 <FaYoutube className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-amber-50 mt-10 text-center">
//           <p className="text-sm pt-2 mt-5">© ZULAS N MORE 2023</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { FaInstagram, FaFacebookF, FaYoutube, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";  // useEffect को जोड़ा
import logo from "../../assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  // स्क्रॉल को टॉप पर ले जाने का फंक्शन
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // स्मूथ स्क्रॉलिंग के लिए
    });
  };

  // लिंक क्लिक हैंडलर
  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    scrollToTop();
    
    // थोड़ी देर बाद नेविगेट करें
    setTimeout(() => {
      if (path === "#") {
        return;  // डमी लिंक्स के लिए
      }
      navigate(path);
      
      // नए पेज लोड होने के बाद फिर से टॉप पर स्क्रॉल करें
      setTimeout(scrollToTop, 100);
    }, 100);
  };

  // फॉर्म सबमिशन हैंडलर
  const handleFormSubmit = (e) => {
    e.preventDefault();
    scrollToTop();
    setTimeout(() => navigate("/signup"), 100);
  };

  // कॉपीराइट वर्ष अपडेट करने के लिए
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#2a2e0f] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 relative z-10">
        {/* शीर्ष सेक्शन */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
          <div className="w-full sm:w-64 md:w-80 flex-shrink-0">
            <Link to="/home" onClick={handleLinkClick("/home")}>
              <img
                src={logo}
                alt="Zula Logo"
                className="h-16 sm:h-25 object-contain brightness-10000"
              />
            </Link>
          </div>
          <div className="max-w-full md:max-w-2xl text-sm sm:text-base pt-4 md:pt-0">
            <p>
              Zulas n More is a leading force in the world of furniture manufacturing,
              driven by a relentless commitment to craftsmanship, innovation, and design
              excellence. Having cumulative experience of 15+ Years,
            </p>
          </div>
        </div>

        {/* फुटर ग्रिड */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-9">
          {/* शॉप सेक्शन */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-la-mango">Shop</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {['Single Seats Swings', 'Acrylic Swings', 'Outdoor Swings', 'Macrame Swings', 'SS Swings', 'Wooden Swings', 'Designer Swings'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    onClick={handleLinkClick("#")} 
                    className="block hover:text-amber-300 transition duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* क्विक लिंक सेक्शन */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-la-mango">Quick Link</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {[
                { name: 'Home', path: '/home' },
                { name: 'All Product', path: '/products' },
                { name: 'Shop by Categories', path: '/categories' },
                { name: 'New Product', path: '/newproducts' },
                { name: 'Our Story', path: '/ourstory' },
                { name: 'Offers', path: '/offers' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={handleLinkClick(link.path)}
                    className="block hover:text-amber-300 transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* हैव क्वेश्चन सेक्शन */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-la-mango">Have Question?</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {['Shipping Information', 'Return & Exchange', 'Contact US'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    onClick={handleLinkClick("#")} 
                    className="block hover:text-amber-300 transition duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* जॉइन कम्युनिटी सेक्शन */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-la-mango">Join Our Community</h3>
            <p className="text-sm mb-4 font-normal max-w-sm">
              Enter your email below to be the first to know about new collections and product launches.
            </p>

            <form className="relative mb-6 max-w-xs" onSubmit={handleFormSubmit}>
              <input
                type="email"
                placeholder="Enter Your e-mail"
                required
                className="w-full bg-amber-50 h-10 rounded-3xl text-black px-4 text-sm sm:text-base focus:outline-none border-2 border-transparent focus:border-amber-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-black hover:text-amber-600 transition">
                <FaArrowRight className="h-5 w-5" />
              </button>
            </form>

            {/* सोशल आइकन्स */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-white hover:bg-white hover:text-pink-600 transition duration-200">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-white hover:bg-white hover:text-blue-600 transition duration-200">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-white hover:bg-white hover:text-red-600 transition duration-200">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* कॉपीराइट */}
        <div className="border-t border-amber-50 mt-10 text-center">
          <p className="text-sm pt-2 mt-5">© ZULAS N MORE {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}