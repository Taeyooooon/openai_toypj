interface Props {
  splitResult: string[];
}

export default function GptResponse({ splitResult }: Props) {
  return (
    <section>
      <ul>
        {splitResult.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </section>
  );
}
