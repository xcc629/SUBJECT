const color = {
  gray: "rgb(58, 58, 58)",
  gray800: "rgba(58, 58, 58, 0.8)",
  gray700: "rgba(58, 58, 58, 0.7)",
};

const fontsSize = { l: "36px", m: "15px", s: "13px" };

const lineHeinght = { m: "22px" };

const theme = { color, fontsSize, lineHeinght };

export type Theme = typeof theme;

export default theme;
