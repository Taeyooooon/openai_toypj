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
  const splitResult = result && result.split('.');
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

        {splitResult && <GptResponse splitResult={splitResult} />}

        {colorCodes && <RecommendColor colorCodes={colorCodes} />}
      </div>
    </div>
  );
}

export default App;
