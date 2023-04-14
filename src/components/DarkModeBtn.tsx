import { useDarkMode } from '../context/DarkModeContext';
import { animated } from '@react-spring/web';
import { HiMoon, HiSun } from 'react-icons/hi';
import DarkModeMotion from './react-spring/DarkModeMotion';

export default function DarkModeBtn() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { transitions } = DarkModeMotion(darkMode);

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className=' relative cursor-pointer text-3xl mt-4'
      >
        {transitions((style, item) => {
          console.log('item : ', item);
          return item ? (
            <div className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <animated.div style={style}>
                <HiSun />
              </animated.div>
            </div>
          ) : (
            <div className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2'>
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
