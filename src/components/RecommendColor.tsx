interface Props {
  colorCodes: string[] | null;
}
export default function RecommendColor({ colorCodes }: Props) {
  const onColorClick = (code: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => alert('클립보드에 복사되었습니다.'));
  };

  return (
    <section>
      <ul className=' flex gap-4'>
        {colorCodes?.map((code) => {
          return (
            <li
              key={code}
              style={{ backgroundColor: code }}
              className={`cursor-pointer w-40 h-40 flex items-center justify-center rounded-xl hover:scale-105 transform transition ease-in-out duration-300`}
              onClick={() => onColorClick(code)}
            >
              <span className=' font-bold p-1 rounded-md text-primary backdrop-blur-sm	bg-white/20 '>
                {code}
              </span>
            </li>
          );
        })}
      </ul>
      <div className=' my-8 font-semibold text-center'>
        색깔 클릭 시 색상코드 복사!
      </div>
    </section>
  );
}
