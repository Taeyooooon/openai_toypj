import axios from 'axios';

export async function connectGPT(
  inputValue: string,
  setResult: React.Dispatch<React.SetStateAction<string>>
) {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const API_URL = 'https://api.openai.com/v1/chat/completions';

  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `${inputValue}과 어울리는 추천 색상코드 3가지를 예시와 같은 형식으로 추천해줘. 그리고 답변 맨앞 콤마는 제거해줘. 예시) 1) #1E90FF (청록색) - 김태윤님의 이름과 어울리는 시원하고 화사한 이미지를 연상시키는 색상입니다. 2) #FFD700 (금색) - 김태윤님의 이름과 함께 빛나는, 귀족적인 이미지를 연상시키는 색상입니다`,
          },
        ],
        temperature: 0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const data = response.data.choices[0].message.content.trim();
    setResult(data);
  } catch (error) {
    console.error(error);
  }
}
