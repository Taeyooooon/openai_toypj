import React, { ChangeEvent, FormEvent, useState } from 'react';

import { sendMessageToGPT } from './sendMessage';

function App() {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessageToGPT(inputValue);
    console.log(inputValue);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>OPENAI api</div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='write name'
          value={inputValue}
          onChange={onChange}
        />
      </form>
      <span></span>
    </>
  );
}

export default App;
