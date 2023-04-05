import { ChangeEvent, FormEvent, useState } from 'react';
import GptResponse from './GptResponse';
import RecommendColor from './RecommendColor';
import { connectGPT } from '../api/connectGPT';
import { useMutation } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';

export default function Container() {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const { mutate, isLoading, error, data } = useMutation(['gpt'], () =>
    connectGPT(inputValue, setResult)
  );
  const colorCodeRegex = /#[A-Fa-f0-9]{6}\b/g;
  const colorCodes = result.match(colorCodeRegex);

  const splitResult = result && result.split('.');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('inputValue : ', inputValue);

    // connectGPT(inputValue, setResult);
    mutate();
    console.log('mutate : ', mutate);
    console.log('isLoading : ', isLoading);
    console.log('error : ', error);
    console.log('data : ', data);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className=' bg-stone-300 p-12 shadow-xl flex flex-col items-center rounded-lg overflow-hidden'>
        <h1 className=' text-4xl font-bold mb-8'>퍼스널 컬러</h1>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='이름을 입력하세요'
            value={inputValue}
            onChange={onChange}
            required
            className='border-2 border-black rounded-md p-2 text-center mb-6'
          />
        </form>
        {isLoading && (
          <PacmanLoader className=' mb-6' color='#5f5959' size={25} />
        )}

        {splitResult && <GptResponse splitResult={splitResult} />}

        {colorCodes && <RecommendColor colorCodes={colorCodes} />}
      </div>
    </div>
  );
}