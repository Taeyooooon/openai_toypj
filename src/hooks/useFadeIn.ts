import { useSpring } from '@react-spring/web';

const useFadeIn = (duration = 1000, delay = 0) => {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { duration: duration },
    delay,
  });
  return fadeIn;
};
export default useFadeIn;
