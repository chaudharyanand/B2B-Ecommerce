/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        themecolor: "#5FA800",
        themetextcolor: "#353535",
        secondarycolor: "#FEAA00",
        thirdnavbgcolor: "#333",
        navrightbordercolor: "#545454",
        categorydropdownbgcolor: "#FCFAF9",
        webfeaturesbgcolor: "#FAFAFA",
        webfeaturessecondarytext: "#A7A7A7",
        reviewsbgcolor: "#F7F7F7",
        breadcrumbsbgcolor: "#F2F2F2",
        breadcrumbstextcolor: "#626262",

        //Buttons
        primaryButtonBgColor: "#5FA800",
        primaryButtonBgColorHover: "#FFFFFF",
        primaryButtonTextColor: "#FFFFFF",
        primaryButtonTextColorHover: "#5FA800",
        primaryButtonBorderColor: "#5FA800",
        primaryButtonBorderColorHover: "#5FA800",

        secondaryButtonBgColor: "#FFFFFF",
        secondaryButtonBgColorHover: "#5FA800",
        secondaryButtonTextColor: "#5FA800",
        secondaryButtonTextColorHover: "#FFFFFF",
        secondaryButtonBorderColor: "#5FA800",
        secondaryButtonBorderColorHover: "#5FA800",

        checkboxbgcolor: "#5FA800",
        inputbgcolor: "#FFFFFF",
        inputtext: "#000000",
        inputfocus: "#008C45",
      },

      fontFamily: {
        title: "GreatVibes",
        subtitle: "Quicksand",
      },

      screens: {
        'mdlg': '1130px',
        's-mobile': '320px',
        'm-mobile': '375px',
        'l-mobile': '425px',
        'xlg': '1440px',
      },

      maxWidth: {
        'fullscreen': '1680px',
      }
    },
  },
  plugins:
    [
      require("tw-elements/dist/plugin"),
      require("@tailwindcss/forms")
    ],
  // [require("@tailwindcss/forms")],
}
