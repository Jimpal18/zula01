// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: false,
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: '0px',  // full screen layout
//         lg: '0px',
//       },
//       screens: {
//         'sm': {'min': '640px', 'max': '767px'},
//         'md': {'min': '768px', 'max': '1023px'},
//         'lg': {'min': '1024px', 'max': '1279px'},
//         'xl': {'min': '1280px', 'max': '1535px'},
//         '2xl': {'min': '1536px'},
//       },
//     },
//     screens: {
//       sm: '375px',
//       md: '768px',
//       lg: '1200px',
//     },
//     extend: {
//       colors: {}
//     },
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         roboto: ['Roboto', 'sans-serif'],
//         poppins: ['Poppins', 'sans-serif'],
//         lobster: ['Lobster', 'cursive'],
//         pacifico: ['Pacifico', 'cursive'],
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        'la-mango': ['"La Mango"', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        pulseSlow: 'pulseSlow 8s ease-in-out infinite',
        'border-3d-pulse': 'border-3d-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Updated animation name
        'shadow-pulse': 'shadow-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // New for 3D shadow depth
        'glow-expand': 'glow-expand 3s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        // Updated keyframe for a more 3D-like border effect
        'border-3d-pulse': {
          '0%, 100%': {
            'border-width': '0px',
            'border-color': 'rgba(255, 165, 0, 0.5)', // Initial translucent color
            opacity: '0.7',
            transform: 'scale(1) translateZ(0px) rotateX(0deg) rotateY(0deg)',
          },
          '50%': {
            'border-width': '6px', // Slightly wider border
            'border-color': 'rgba(255, 165, 0, 0.9)', // More opaque at peak
            opacity: '1',
            transform: 'scale(1.03) translateZ(5px) rotateX(2deg) rotateY(2deg)', // Subtle 3D shift
          },
        },
        // New keyframe for a pulsing shadow that creates depth
        'shadow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 5px rgba(0,0,0,0.2)', // Soft initial shadow
            transform: 'translateZ(0px)',
          },
          '50%': {
            'box-shadow': '0 0 20px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3)', // Deeper, more noticeable shadow
            transform: 'translateZ(10px)', // Pushes the shadow "forward" for depth
          },
        },
        'glow-expand': {
          '0%, 100%': {
            'box-shadow': '0 0 0px rgba(255, 165, 0, 0.4)',
            transform: 'scale(1)',
          },
          '50%': {
            'box-shadow': '0 0 15px rgba(255, 165, 0, 0.8)',
            transform: 'scale(1.01)',
          },
        },
      },
    },
  },
  plugins: [],
};