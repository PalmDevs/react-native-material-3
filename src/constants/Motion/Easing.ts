/**
 * Easing and duration create responsive and expressive motion.
 * @see https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration
 */
export default {
    Linear: [0, 0, 1, 1],
    Standard: [0.2, 0, 0, 1],
    StandardAccelerated: [0.3, 0, 1, 1],
    StandardDecelerated: [0, 0, 0, 1],
    Emphasized: [0.2, 0, 0, 1],
    EmphasizedAccelerated: [0.3, 0, 0.8, 0.15],
    EmphasizedDecelerated: [0.05, 0.7, 0.1, 1],
} as const
