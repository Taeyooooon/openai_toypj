import { ChangeEvent, FormEvent, useState } from 'react';
import GptResponse from './GptResponse';
import RecommendColor from './RecommendColor';
import { connectGPT } from '../api/connectGPT';
import { useMutation } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';
import DarkModeBtn from './DarkModeBtn';
import { colorCodeRegex } from '../utils/regex/colorCode';
import FadeIn from './FadeIn';

export default function MainContainer() {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const { mutate, isLoading, isError } = useMutation(
    ['gpt', inputValue],
    () => connectGPT(inputValue),
    {
      onSuccess: (data) => {
        setResult(data);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const colorCodes = result && result.match(colorCodeRegex);

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
      <section className=' bg-primary dark:bg-primary-dark text-secondary dark:text-secondary-dark p-12 shadow-xl flex flex-col items-center rounded-lg overflow-hidden transition'>
        <FadeIn>
          <h1 className=' text-4xl font-bold mb-8'>색조합 3가지 추천</h1>
        </FadeIn>

        <FadeIn delay={200}>
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
        </FadeIn>

        {isLoading && (
          <PacmanLoader className=' mb-6' color='#ffee00' size={25} />
        )}

        {isError && (
          <div className=' text-red-500 font-semibold mb-6'>
            에러가 발생했습니다.
          </div>
        )}

        {splitResult && (
          <FadeIn>
            <GptResponse splitResult={splitResult} />
          </FadeIn>
        )}

        {colorCodes && <RecommendColor colorCodes={colorCodes} />}

        <FadeIn delay={400}>
          <DarkModeBtn />
        </FadeIn>
      </section>
    </div>
  );
}