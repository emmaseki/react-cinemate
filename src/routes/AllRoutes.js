import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages'

export const AllRoutes = () => {
  return (
    <div className="dark: bg-slate-800">
     <Routes>
        <Route path="/" element={<MovieList apiKey="movie/now_playing"/>}/>
        <Route path="movie/:id" element={<MovieDetail/>}/>
        <Route path="movies/popular" element={<MovieList apiKey="movie/popular"/>}/>
        <Route path="movies/top" element={<MovieList apiKey="movie/top_rated"/>}/>
        <Route path="movies/upcoming" element={<MovieList apiKey="movie/upcoming"/>}/>
        <Route path="search" element={<Search apiKey="search/movie"/>}/>
        <Route path="*" element={<PageNotFound/>}/>
     </Routes>
    </div>
  )
}
