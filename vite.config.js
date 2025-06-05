// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss'; 

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(), 
    
//   ],
//     base: './', // This ensures proper relative paths in Netlify

// });

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: './postcss.config.js',  // ya jitna aapka path hai PostCSS config ka
//   },
//   server: {
//     host: true,
//   }
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//   }
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react';

// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),react()
//   ],
//    resolve: {
//     extensions: ['.js', '.jsx'] // Add other extensions if needed
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
