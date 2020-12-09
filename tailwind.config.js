require("dotenv").config();
const enablePurge = false;
module.exports = {
  purge: {
    enabled: enablePurge,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
