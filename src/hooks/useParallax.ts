import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
}

export const useParallax = (
  ref: RefObject<HTMLElement>,
  options: UseParallaxOptions = {}
): MotionValue<number> => {
  const { speed = 0.5, direction = "vertical" } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const range = direction === "vertical" ? [0, (1 - speed) * 100] : [0, (1 - speed) * 50];
  return useTransform(scrollYProgress, [0, 1], range);
};
