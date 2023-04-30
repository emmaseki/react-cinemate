import { useState, useEffect } from 'react'

export const useFetch = (apiKey , queryTerm) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiKey}?api_key=`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(`${url}${process.env.REACT_APP_API_KEY}&query=${queryTerm}`);
          const json = await response.json();
    
          setData(json.results);
        }
    
        fetchMovies();
      }, [url])

    return { data }
}
