import React from 'react'
import "./movies.css"
import MovieCard from '../../../components/movieCard/movieCard'
import { Movie } from '@/app/interface';
import { FMovies } from '@/utils/functions';




export default async function Movies() {

  try {
    const fetchingMovies = await FMovies()

    return (
      <>
          <h1>Pelis</h1>
  
          <div className='container-movies'>

              {fetchingMovies?.data.map((e: Movie) => {
                
                return (
                  <MovieCard
                    key={e.id}
                    id={e.id}
                    image={e.image}
                    title={e.title}
                    score={e.score}
                    genres={e.genres}
                    sinopsis={e.sinopsis}                  />
                )})}

          </div>
      </>
    )
    
  } catch (error) {
    console.log("From movie", error)
  }

  
}