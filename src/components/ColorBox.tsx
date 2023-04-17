import { copyText } from '../utils/copyText';

interface Props {
  code: string;
}

export default function ColorBox({ code }: Props) {
  return (
    <li
      style={{ backgroundColor: code }}
      className={`cursor-pointer w-40 h-40 flex items-center justify-center rounded-xl hover:scale-105 transform transition ease-in-out duration-300`}
      onClick={() => copyText(code)}
    >
      <span className=' font-bold p-1 rounded-md text-primary backdrop-blur-sm	bg-white/20 '>
        {code}
      </span>
    </li>
  );
}
