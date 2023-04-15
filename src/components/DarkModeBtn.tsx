import { useDarkMode } from '../context/DarkModeContext';
import { animated } from '@react-spring/web';
import { HiMoon, HiSun } from 'react-icons/hi';
import useDarkModeMotion from '../hooks/useDarkModeMotion';

const ICON_CLASS = 'absolute top-1/2 -translate-x-1/2 -translate-y-1/2';

export default function DarkModeBtn() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { transitions } = useDarkModeMotion(darkMode);

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className=' relative cursor-pointer text-3xl mt-4'
      >
        {transitions((style, item) => {
          return item ? (
            <div className={ICON_CLASS}>
              <animated.div style={style}>
                <HiSun />
              </animated.div>
            </div>
          ) : (
            <div className={ICON_CLASS}>
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
