import { copyText } from '../utils/copyText';

interface Props {
  colorCodes: string[] | null;
}
export default function RecommendColor({ colorCodes }: Props) {
  return (
    <section>
      <ul className=' flex gap-4'>
        {colorCodes?.map((code) => {
          return (
            <li
              key={code}
              style={{ backgroundColor: code }}
              className={`cursor-pointer w-40 h-40 flex items-center justify-center rounded-xl hover:scale-105 transform transition ease-in-out duration-300`}
              onClick={() => copyText(code)}
            >
              <span className=' font-bold p-1 rounded-md text-primary backdrop-blur-sm	bg-white/20 '>
                {code}
              </span>
            </li>
          );
        })}
      </ul>
      <div className=' mt-8 mb-4 font-semibold text-center'>
        색깔 클릭 시 색상코드 복사!
      </div>
    </section>
  );
}
