import FadeIn from './FadeIn';
import ColorBox from './ColorBox';

interface Props {
  colorCodes: string[] | null;
}

export default function RecommendColor({ colorCodes }: Props) {
  return (
    <section>
      <ul className=' flex gap-6'>
        {colorCodes?.map((code, index) => {
          return (
            <FadeIn delay={index * 300} key={index}>
              <ColorBox code={code} />
            </FadeIn>
          );
        })}
      </ul>
      <div className=' mt-8 mb-4 font-semibold text-center'>
        색깔 클릭 시 색상코드 복사!
      </div>
    </section>
  );
}
