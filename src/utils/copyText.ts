export const copyText = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert('클립보드에 복사되었습니다.'));
};
