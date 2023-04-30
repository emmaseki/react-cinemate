import { Card } from '../components'
import { useFetch } from '../fetch/useFetch'

export const MovieList = ({apiKey}) => {
  const { data: movies } = useFetch(apiKey);

  return (
    <main>
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
