export default {
  // this enables the color modes feature
  // and is used as the name for the top-level colors object
  initialColorMode: "light",
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    // these are the default colors
    white: "#FFFFFF",
    black: "#000000",
    lightGrey: "#8d8d8d"

    // modes: {
    // 	// this is the dark color mode colors
    // 	dark: {
    // 		text: colors.orange,
    // 		background: colors.text,
    // 	},
    // },
  },
  fonts: {
    body: "Open Sans",
    heading: "Poppins"
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: "110%",
    heading: 1.125,
    logo: "82px"
  },
  letterSpacing: {
    body: "2px",
    text: "5px"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
