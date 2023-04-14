import { useSpring } from '@react-spring/web';
import { animated } from '@react-spring/web';

interface Props {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const FadeIn = ({ children, duration = 500, delay = 0 }: Props) => {
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

  return <animated.div style={fadeIn}>{children}</animated.div>;
};

export default FadeIn;
