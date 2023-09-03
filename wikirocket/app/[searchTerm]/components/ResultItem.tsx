import Image from 'next/image';
import Link from 'next/link';

type ResultItemProps = {
  result: Result;
};
export default function ResultItem({ result }: ResultItemProps) {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  return (
    <article className="m-4 mx-auto w-[90%] border-2 border-slate-800 p-2 rounded-md">
      {result?.thumbnail?.source ? (
        <div className="flex flex-row gap-4">
          <div className="flex flex-col justify-center">
            <Image
              src={result.thumbnail.source}
              alt={result.title}
              width={result.thumbnail.width}
              height={result.thumbnail.height}
              loading="lazy"
            />
          </div>
          {itemTextCol}
        </div>
      ) : (
        <article className="m-4 max-w-lg">{itemTextCol}</article>
      )}
    </article>
  );
}
