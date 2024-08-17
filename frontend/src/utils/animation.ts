export const underlineAnimationStyles = {
  position: "relative",
  bg: "transparent",
  color: "#404040",
  _focus: { boxShadow: "none" },
  _active: { transform: "scale(1)" },
  _hover: {
    transform: "scale(1)",
    color: "black",
    _after: {
      width: "100%",
    },
  },
  _after: {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 0,
    height: "2px",
    backgroundColor: "currentColor",
    transition: "width 0.3s ease-in-out",
  },
};

export const disableWobbling = {
  _focus: { boxShadow: "none" },
  _active: { transform: "scale(1)" },
  _hover: {
    transform: "scale(1)",
  },
};