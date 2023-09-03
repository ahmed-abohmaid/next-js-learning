import getWikiResults from '@/lib/getWikiResults';
import ResultItem from './components/ResultItem';
import { Metadata } from 'next';

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({
  params: { searchTerm },
}: Props): Promise<Metadata> {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const DisplayTerm = searchTerm.replaceAll('%20', ' ');

  if (!data?.query?.pages) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `WikiRocket | ${DisplayTerm}`,
    description: `Search result for ${DisplayTerm}`,
  };
}

export default async function page({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const searchResult: Result[] | undefined = data?.query?.pages;

  return (
    <main className="bg-slate-200 mx-auto w-[90%] py-1 my-2 min-h-screen">
      {searchResult ? (
        Object.values(searchResult).map((result) => (
          <ResultItem key={result.pageid} result={result} />
        ))
      ) : (
        <p className="p-8 text-xl text-center">
          {searchTerm.replaceAll('%20', ' ')} Is Not Found!
        </p>
      )}
    </main>
  );
}
