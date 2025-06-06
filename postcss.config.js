// // postcss.config.js (ES Module syntax)
// import tailwindcss from '@tailwindcss/postcss'; // Import the plugin
// import autoprefixer from 'autoprefixer'; // Import autoprefixer

// export default {
//   plugins: {
//     "@tailwindcss/postcss": {},
//     autoprefixer: {},
//   },
// };

import autoprefixer from 'autoprefixer'; // Import autoprefixer

// export default {
//   plugins: [
    
//     autoprefixer(),
//   ],
// };

// export default {
//   plugins: {
//     "@tailwindcss/postcss": {},
//   }
// }

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
