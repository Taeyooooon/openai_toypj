import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { connectGPT } from './api/connectGPT';
import GptResponse from './components/GptResponse';
import RecommendColor from './components/RecommendColor';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const colorCodeRegex = /#[A-Fa-f0-9]{6}\b/g;
  const colorCodes = result.match(colorCodeRegex);

  useEffect(() => {}, [result]);
  const splitResult = result?.split('.');
  console.log('split : ', splitResult);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('inputValue : ', inputValue);
    connectGPT(inputValue, setResult);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <h1 className=' text-4xl font-bold mb-8'>색깔 추천</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='이름'
          value={inputValue}
          onChange={onChange}
          required
          className='border-2 border-black rounded-md p-2 text-center mb-6'
        />
      </form>

      <GptResponse splitResult={splitResult} />

      <RecommendColor colorCodes={colorCodes} />
    </div>
  );
}

export default App;
