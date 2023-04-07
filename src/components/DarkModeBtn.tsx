import { useDarkMode } from '../context/DarkModeContext';
import { useTransition, animated } from '@react-spring/web';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function DarkModeBtn() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const transitions = useTransition(darkMode, {
    initial: {
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    },
    from: {
      transform: 'scale(0) rotate(-180deg)',
      opacity: 0,
    },
    enter: {
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    },
    leave: {
      transform: 'scale(0) rotate(180deg)',
      opacity: 0,
    },

    reverse: true,
  });
  return (
    <>
      <button
        onClick={toggleDarkMode}
        className=' relative cursor-pointer text-3xl'
      >
        {transitions((style, item) => {
          return item ? (
            <div className='absolute -translate-x-1/2'>
              <animated.div style={style}>
                <HiSun />
              </animated.div>
            </div>
          ) : (
            <div className='absolute -translate-x-1/2'>
              <animated.div style={style}>
                <HiMoon />
              </animated.div>
            </div>
          );
        })}
      </button>
    </>
  );
}
