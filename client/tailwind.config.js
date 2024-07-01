module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        //Default is mobile
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      fontSize: {
        lap_a: "10px",
        lap_b: "14px",
        lap_c: "18px",
        lap_d: "22px",
        lap_e: "26px",
        lap_f: "30px",
        lap_g: "34px",
        m_a: "25px",
        m_b: "40px",
        m_c: "55px",
        m_d: "70px",
        m_e: "90px",
      },
      colors: {
        deepBlue: "#30325E",
        vibrantPink: "#DF3670",
        teal: "#096C86",
        purple: "#4F3FF0",
        white: "#ffff",
        lightgray: "#D5D5D5",
        darkgray: "#606060",
        bluegray: "#F1F4FD",
      },
    },
    plugins: [],
  },
};
