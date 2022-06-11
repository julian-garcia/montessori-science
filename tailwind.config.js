module.exports = {
  content: ["./templates/**/*.{html,php}", "./parts/**/*.{html,php}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      "egg-plant": "#CC3399",
      "warm-pink": "#FF6699",
      "bright-red": "#FF3333",
      orange: "#FF9900",
      gold: "#AD8744",
      "light-green": "#E0F5D6",
      "bright-green": "#66CC33",
      "lighter-blue": "#33CCff",
      "darker-blue": "#336699",
      "dark-gray": "#3F3F3F",
      "cold-gray": "#697E84",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["serif"],
    },
    extend: {
      borderWidth: {
        3: "3px",
        10: "10px",
      },
      minHeight: {
        36: "9rem",
      },
      maxWidth: {
        full: "1200px",
      },
    },
  },
  plugins: [],
  safelist: ["container", "mx-auto"],
};
