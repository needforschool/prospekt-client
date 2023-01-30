import { Theme } from "@typeDefs/themes";

const main: Theme = {
  colors: {
    bg1: "#141522",
    bg2: "#28293E",
    primary1: "#1A72F8",
    primary2: "#3B53AA",
    secondary1: "#F86716",
    secondary2: "#D04C01",
    greyscale1: "#FFFFFF",
    greyscale2: "#FAFAFA",
    greyscale3: "#F5F5F5",
    greyscale4: "#D2D2D2",
    greyscale5: "#111111",
    greyscale6: "#000000",
    status1: "#41EFA6",
    status2: "#F88351",
    status3: "#F24D4D",
    error: "#FF5555",
  },
  family: {
    primary: "Manrope, sans-serif",
    secondary: "Inter, sans-serif",
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    h1: "64px",
    h2: "24px",
    big: "16px",
    medium: "14px",
    small: "12px",
  },
  breakpoint: {
    /* Desktops and laptops */
    desktop: "1920px",
    /* iPads (landscape) */
    tablet: "1200px",
    /* Smartphones (landscape) */
    mobile: "700px",
  },
};

export default main;
