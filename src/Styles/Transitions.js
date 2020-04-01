const easings = {
  quart: (duration, delay) =>
    easing(
      [0.895, 0.03, 0.685, 0.22],
      [0.165, 0.84, 0.44, 1],
      [0.77, 0, 0.175, 1],
      duration,
      delay
    ),
  circ: (duration, delay) =>
    easing(
      [0.6, 0.04, 0.98, 0.335],
      [0.075, 0.82, 0.165, 1],
      [0.785, 0.135, 0.15, 0.86],
      duration,
      delay
    ),
  quint: (duration, delay) =>
    easing(
      [0.755, 0.05, 0.855, 0.06],
      [0.23, 1, 0.32, 1],
      [0.86, 0, 0.07, 1],
      duration,
      delay
    ),
  sine: (duration, delay) =>
    easing(
      [0.47, 0, 0.745, 0.715],
      [0.39, 0.575, 0.565, 1],
      [0.445, 0.05, 0.55, 0.95],
      duration,
      delay
    ),
  expo: (duration, delay) =>
    easing(
      [0.95, 0.05, 0.795, 0.035],
      [0.19, 1, 0.22, 1],
      [1, 0, 0, 1],
      duration,
      delay
    ),
  cubic: (duration, delay) =>
    easing(
      [0.55, 0.055, 0.675, 0.19],
      [0.215, 0.61, 0.355, 1],
      [0.645, 0.045, 0.355, 1],
      duration,
      delay
    )
};

const defaultCubicTransition = {
  type: "tween",
  duration: 0.7
};

const easing = (easeIn, easeOut, easeInOut, duration, delay) => {
  const durationObj = duration ? { duration: duration } : {};

  const delayObj = delay ? { delay: delay } : {};

  return {
    in: {
      ...defaultCubicTransition,
      ease: easeIn,
      ...durationObj,
      ...delayObj
    },
    out: {
      ...defaultCubicTransition,
      ease: easeOut,
      ...durationObj,
      ...delayObj
    },
    inOut: {
      ...defaultCubicTransition,
      ease: easeInOut,
      ...durationObj,
      ...delayObj
    }
  };
};

export default easings;
