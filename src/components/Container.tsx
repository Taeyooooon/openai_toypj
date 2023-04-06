import { ChangeEvent, FormEvent, useState } from 'react';
import GptResponse from './GptResponse';
import RecommendColor from './RecommendColor';
import { connectGPT } from '../api/connectGPT';
import { useMutation } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';
import { useDarkMode } from '../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Container() {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const { darkMode, toggleDarkMode } = useDarkMode();
  console.log(darkMode);
  const { mutate, isLoading, isError } = useMutation(['gpt'], () =>
    connectGPT(inputValue, setResult)
  );

  const colorCodeRegex = /#[A-Fa-f0-9]{6}\b/g;
  const colorCodes = result.match(colorCodeRegex);

  const splitResult = result && result.split('.');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className=' bg-primary dark:bg-primary-dark text-secondary dark:text-secondary-dark p-12 shadow-xl flex flex-col items-center rounded-lg overflow-hidden transition'>
        <h1 className=' text-4xl font-bold mb-8'>색조합 3가지 추천</h1>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='색깔을 입력하세요'
            value={inputValue}
            onChange={onChange}
            required
            className='border border-primary dark:border-primary-dark bg-secondary dark:bg-secondary-dark text-secondary dark:text-secondary-dark rounded-md p-2 text-center mb-6'
          />
        </form>

        {isLoading && (
          <PacmanLoader className=' mb-6' color='#5f5959' size={25} />
        )}

        {isError && (
          <div className=' text-red-500 font-semibold mb-6'>
            에러가 발생했습니다.
          </div>
        )}

        {splitResult && <GptResponse splitResult={splitResult} />}

        {colorCodes && <RecommendColor colorCodes={colorCodes} />}

        <button onClick={toggleDarkMode} className='cursor-pointer text-2xl'>
          {!darkMode && <HiMoon />}
          {darkMode && <HiSun />}
        </button>
      </div>
    </div>
  );
}
