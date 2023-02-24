
export const projectAnimation = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -50,
  },
};

export const headerAnimation = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

export const sloganAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

