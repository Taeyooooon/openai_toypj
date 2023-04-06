interface Props {
  splitResult: string[];
}

export default function GptResponse({ splitResult }: Props) {
  return (
    <section className='p-12 mb-8 border border-1 rounded-md border-primary dark:border-primary-dark bg-secondary dark:bg-secondary-dark'>
      <ul>
        {splitResult.map((item) => {
          return (
            <li key={item} className=' font-semibold'>
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
