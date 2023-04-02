import axios from 'axios';

export async function sendMessageToGPT(inputValue: string) {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const apiUrl = 'https://api.openai.com/v1/completions';
  console.log(API_KEY);
  console.log(apiUrl);

  try {
    const response = await axios.post(
      apiUrl,
      {
        model: 'text-davinci-003',
        prompt: inputValue,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [' Human:', ' AI:'],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    console.log('res : ', response);

    // debugger;
    const data = response.data.choices[0].text.trim();
    console.log(data);
    // addMessageToConversation('gpt', data);
  } catch (error) {
    console.error(error);
    // addMessageToConversation(
    //   'gpt',
    //   'Error: Unable to fetch response from ChatGPT.'
    // );
  }
}
