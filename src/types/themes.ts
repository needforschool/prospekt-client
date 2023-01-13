export type Theme = {
  colors: {
    bg: string;
    primary1: string;
    primary2: string;
    secondary1: string;
    secondary2: string;
    greyscale1: string;
    greyscale2: string;
    greyscale3: string;
    greyscale4: string;
    greyscale5: string;
    greyscale6: string;
    status1: string;
    status2: string;
    status3: string;
    error: string;
  };
  family: {
    primary: string;
    secondary: string;
  };
  weight: {
    regular: number;
    medium: number;
    bold: number;
  };
  size: {
    h1: string;
    h2: string;
    big: string;
    medium: string;
    small: string;
  };
  breakpoint: {
    /* Desktops and laptops */
    desktop: string;
    /* iPads (landscape) */
    tablet: string;
    /* Smartphones (landscape) */
    mobile: string;
  };
};
