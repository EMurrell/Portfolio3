module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "9xl": "7.5rem",
      },
      colors: {
        navy: "#162B32",
        salmon: "#d8323c",
        matte: "#161616",
        ltmatte: "#303030",
        offwhite: "#f2f3f4",
        ltblue: "#9dbeb7",
        greenish: "#e0f8d0",
      },
    },
    fontFamily: {
      body: ["Space Grotesk"],

      display: ["Poppins"],
      logo: ["Michroma"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
