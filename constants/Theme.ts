const COLORS = {
  // primary: "#312651", // "#FF5A5F"
  // secondary: "#444262", // "#373F51"
  // tertiary: "#FF7754", // "#A9BCD0" // "#D8DBE2"

  // gray: "#83829A",
  // gray2: "#C1C0C8",

  // white: "#F3F4F8",
  // lightWhite: "#FAFAFC",
  primary: "#312650", // Dark, elegant purple for background elements
  secondary: "#444262", // Slightly lighter dark purple for secondary components
  tertiary: "#FCA311", // Vivid soft red/pink for action buttons (e.g., Apply Now, Save Job)

  gray: "#83829A",
  gray2: "#D1D0D8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
