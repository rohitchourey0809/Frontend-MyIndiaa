/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 15s ease infinite",
        wave: "wave 10s linear infinite",
        "wave-reverse": "wave 18s linear reverse infinite",
        "wave-reverse-delay": "wave 20s linear reverse infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        wave: {
          "2%": { transform: "translateX(1)" },
          "25%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(-50%)" },
          "75%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(1)" },
        },
      },
      backgroundSize: {
        400: "400% 400%",
      },
    },
  },
  plugins: [],
};
