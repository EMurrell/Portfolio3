module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        lg: "0 10px 15px -3px rgba(153, 50, 204, 0.1), 0 4px 6px -2px rgba(153, 50, 204, 0.05)",
        "3xl": "0 3px 10px -2px rgba(255, 255, 255, 0.6)",
      },
      dropShadow: {
        "2xl": "0 10px 40px rgba(102, 252, 241, 0.5)",
        "3xl": "0 5px 40px rgba(255, 255, 255, 0.7)",
      },
      fontSize: {
        "9xl": "7.5rem",
      },

      colors: {
        salmon: "#d8323c",
        matte: "#191919",
        ltmatte: "#303030",
        offwhite: "#f2f3f4",
        dkpurple: "#000914",
        ltpurple: "#0f0015",
        vwblue: "#66fcf1",
        vwblue2: "#45a29e",
        matteblue: "#1f2833",
        matteblue2: "#000001",
      },
    },
    fontFamily: {
      body: ["Arial"],

      logo: ["Michroma"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
