import { useSearchParams } from 'react-router-dom';
import { Card } from '../components'
import { useFetch } from '../fetch/useFetch'

export const Search = ({apiKey}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiKey, queryTerm);

  return (
    <main>
      <section className='py-7'>
        <p className='text-2xl text-grat-700 dark:text-white'>{movies.length === 0 ? 
          `No Result Found For '${queryTerm}' ` : `Results For '${queryTerm}'` }</p>
      </section>
      <section className='flex flex-wrap max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies && movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
