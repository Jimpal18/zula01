// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { Link } from "react-router-dom";
// import pic1 from "../assets/logo.png";
// import pic2 from "../assets/pic1.jpg";

// const SignPage = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#fdf6f0] flex items-center justify-center px-4 pt-10 pb-20">
//       <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-[#fdf6f0] rounded-3xl overflow-hidden ">
//         {/* Left Section - Sign Up Form */}
//         <div className="flex flex-col justify-center px-10 py-12 space-y-6 ">
//           {/* Logo */}
//           <div className="text-center mb-8">
//             <Link to="/home">
//               <img
//                 src={pic1}
//                 alt="Zulas n More"
//                 className="mx-auto w-40 cursor-pointer "
//               />
//             </Link>
//           </div>

//           {/* First Name */}
//           <div>
//             <label className="block text-sm mb-1 text-[#2D3319]">First Name</label>
//             <input
//               type="text"
//               placeholder="Enter first name"
//               className="w-full border border-[#2D3319] rounded px-4 py-2 bg-transparent focus:outline-none"
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="block text-sm mb-1 text-[#2D3319]">Last Name</label>
//             <input
//               type="text"
//               placeholder="Enter last name"
//               className="w-full border border-[#2D3319] rounded px-4 py-2 bg-transparent focus:outline-none"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm mb-1 text-[#2D3319]">Email</label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               className="w-full border border-[#2D3319] rounded px-4 py-2 bg-transparent focus:outline-none"
//             />
//           </div>

//           {/* Password */}
//           {/* <div>
//             <label className="block text-sm mb-1 text-[#2D3319]">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full border border-[#2D3319] rounded px-4 py-2 pr-10 bg-transparent focus:outline-none"
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-2.5 text-[#2D3319]"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div> */}

//           {/* Password */}
// <div>
//   <label className="block text-sm mb-1 text-[#2D3319]">Password</label>
//   <div className="relative">
//     <input
//       type={showPassword ? "text" : "password"}
//       placeholder="Password"
//       className="w-full border border-[#2D3319] rounded px-4 py-2 pr-10 bg-transparent focus:outline-none"
//     />
//     <button
//       type="button"
//       className="absolute right-3 top-2.5 text-[#2D3319]"
//       onClick={() => setShowPassword(!showPassword)}
//     >
//       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//     </button>
//   </div>
//   {/* 👇 Forgot Password Link */}
//   <div className="text-right mt-1">
//     <Link to="/forgot" className="text-sm text-[#2D3319] underline hover:text-[#1e2412]">
//       Forgot Password?
//     </Link>
//   </div>
// </div>


//           {/* Sign Up Button */}
//           <button
//             className="w-full bg-[#2D3319] text-white py-2 rounded mt-2 hover:bg-[#1e2412] transition"
//           >
//             Sign Up
//           </button>

//           {/* Footer */}
//           <p className="text-sm text-center text-[#2D3319]">
//             Already have an account?{" "}
//             <Link to="/login" className="underline">
//               Log In
//             </Link>
//           </p>
//         </div>

//         {/* Right Section - Image */}
//         <div className="hidden md:block w-[500px]">
//           <img
//             src={pic2}
//             alt="Side Visual"
//             className="w-full h-[650px] object-cover rounded-4xl "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignPage;


import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import pic1 from "../assets/logo.png";
import pic2 from "../assets/pic1.jpg";

const SignPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // Update form state on input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit: save to localStorage & redirect
  const handleSignUp = () => {
    // Basic validation - check all fields filled
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // Save data to localStorage (or send to backend here)
    localStorage.setItem("profileData", JSON.stringify(form));

    // Redirect to profile page
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-[#fdf6f0] flex items-center justify-center px-4 pt-10 pb-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-[#fdf6f0] rounded-3xl overflow-hidden ">
        {/* Left Section - Sign Up Form */}
        <div className="flex flex-col justify-center px-10 py-12 space-y-6 ">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/home">
              <img
                src={pic1}
                alt="Zulas n More"
                className="mx-auto w-40 cursor-pointer "
              />
            </Link>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm mb-1 text-[#2D3319]">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className="w-full border border-[#2D3319] rounded px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm mb-1 text-[#2D3319]">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className="w-full border border-[#2D3319] rounded px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-[#2D3319]">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border border-[#2D3319] rounded px-4 py-2 bg-transparent focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-[#2D3319]">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-[#2D3319] rounded px-4 py-2 pr-10 bg-transparent focus:outline-none"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-[#2D3319]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            className="w-full bg-[#2D3319] text-white py-2 rounded mt-2 hover:bg-[#1e2412] transition"
            onClick={handleSignUp}
          >
            Sign Up
          </button>

          {/* Footer */}
          <p className="text-sm text-center text-[#2D3319]">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Log In
            </Link>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block w-[500px]">
          <img
            src={pic2}
            alt="Side Visual"
            className="w-full h-[650px] object-cover rounded-4xl "
          />
        </div>
      </div>
    </div>
  );
};

export default SignPage;
