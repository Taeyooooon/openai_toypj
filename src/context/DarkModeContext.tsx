import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

const updateDarkMode = (darkMode: boolean) => {
  if (darkMode) {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
  } else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  }
};

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    updateDarkMode(!darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
