const size = {
  phone_Small: "480px",
  phone: "820px",
  tablet: "1080px",
  desktop: "1440px",
};

export const device = {
  phone_Small: `(min-width: ${size.phone_Small})`,
  phone: `(min-width: ${size.phone})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
