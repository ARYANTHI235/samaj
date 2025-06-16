/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Primary': "#990011",
        'Secondry': "#ee8a11ef"
      },
      container:{
        center:true,
        screens:{
          xs:"340px",
           sm: "540px",
          md: "720px",
          lg: "920px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      screens:{
        xs: "375px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily:{
        Primary: ["Open Sans", "sans-serif"],
        Secondry:["Yeseva One", "serif"]
      },
      backgroundImage:{
        banner1: "url('/src/assets/banner1.jpg')",
        banner2: "url('/src/assets/banner2.png')",
        banner3: "url('/src/assets/banner3.webp')",
        cuverImage: "url('/src/assets/rotten-curve-1.png')",
      },
      keyframes:{
        zoomIn:{
           '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.3)' },
        }
      },
      animation: {
        'zoom-in': 'zoomIn 15s ease-in-out infinite',
      },
      boxShadow:{
        custom: '0 15px 30px rgba(255, 255, 255, 0.30), 0 10px 10px rgba(255, 255, 255, 0.22)',
      }
    },
  },
  plugins: [],
}