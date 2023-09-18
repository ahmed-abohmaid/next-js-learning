export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 0.7,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

/**
 * When using variants, animations of child components can be staggered by this duration (in seconds).
 * For instance, if staggerChildren is 0.01, the first child will be delayed by 0 seconds, the second by 0.01, the third by 0.02 and so on.
 * The calculated stagger delay will be added to delayChildren.
 *
 * @docs https://www.framer.com/motion/transition/
 * @see https://codesandbox.io/s/framer-motion-staggerchildren-example-p50bv?file=/pages/index.js:1311-1323
 */
// In our example he waits for first child delay
export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});
