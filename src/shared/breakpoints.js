// Width References
const size = {
  smallScreen: "480px",
  phone: "860px",
  tablet: "990px", //header height shrinks
  navbarBreakpoint: "1200px", //side navbar slides out
};

// Max-width => desktop apporach first for Bug Tracker app
export const device = {
  smallScreen: `(max-width: ${size.smallScreen})`,
  phone: `(max-width: ${size.phone})`,
  tablet: `(max-width: ${size.tablet})`,
  navbarBreakpoint: `(max-width: ${size.navbarBreakpoint})`,
};

// const size = {
//   phone_Small: "480px",
//   phone: "860px",
//   tablet: "1080px",
//   desktop: "1440px",
// };

// export const device = {
//   phone_Small: `(min-width: ${size.phone_Small})`,
//   phone: `(min-width: ${size.phone})`,
//   tablet: `(min-width: ${size.tablet})`,
//   desktop: `(min-width: ${size.desktop})`,
// };
