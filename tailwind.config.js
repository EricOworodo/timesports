/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sandyYellow: "#F3CC68",
        translucentSandyYellow: "rgba(243, 204, 104, 0.42)",
        royalPurple: "#5B4784",
        darkGray: "#414141",
        lightGray: "#8D8D8D",
        deepBlue:"#003366",
        white:"#ffffff",
        gray4: '#f0f0f0',
        gray: "rgba(0, 0, 0, 0.50)",
        gray1: "rgba(0, 0, 0, 0.01)",
        gray2: "rgba(91, 71, 132, 0.15)",
        gray3: "rgba(216, 214, 220, 0.15)",
        red: "#CC0000",
        orange: "#FF934A",
        orange2: "#FFAC4B",
        semiTransparentBlack: "rgba(0, 0, 0, 0.58)",
        purple: "#5B4784",
        darkPurple: "#36397C",
        brown: "#66572E",
        semiTransparentWhite: "rgba(255, 255, 255, 0.92);",
        white100: "rgba(255, 255, 255, 0.78)",
        loginBg: "rgba(246, 246, 246, 0.63)",
      },
      backgroundImage: {
        heroImg:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/src/assets/images/heroSectionBg.png)",
        userSmall: 
          "url(/src/assets/images/user-small.svg)",
          initiativeMockup: 
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/src/assets/images/initiativeMockup.svg)"
      },
      boxShadow: {
        "2xl": "4px 4px 30px 30px rgba(0, 0, 0, 0.01)",
        "3xl": "0px 4px 20px 20px rgba(0, 0, 0, 0.10)",
        "4xl": "0px 4px 40px 15px rgba(0, 0, 0, 0.03)",
        "5xl": "0px 4px 25px 5px rgba(0, 0, 0, 0.10)",
        "6xl": "10px 10px 10px 0px rgba(0, 0, 0, 0.01)",
        "7xl": "25px 25px 25px 25px rgba(0, 0, 0, 0.01);",
        "8xl": " 0px 4px 4px 10px rgba(0, 0, 0, 0.05)"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
