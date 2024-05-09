import React from 'react'
import "./movies.css"
import MovieCard from '../../../components/movieCard/movieCard'
import dotenv from 'dotenv';
import { Movie } from '@/app/interface';

dotenv.config();

const MovieHub: string = process.env.URL_LOCAL || "" ; 


export default async function Movies() {

  try {
    const data = await fetch(MovieHub + "/movie");
    const JSONdata = await data.json();

    return (
      <>
          <h1>Movies</h1>
  
          <div className='container-movies'>

              {JSONdata.map((e: Movie) => {
                
                return (
                  <MovieCard
                    key={e.id}
                    id={e.id}
                    image={e.image}
                    title={e.title}
                    score={e.score}
                    genres={e.genres}
                  />
                )})}

          </div>
      </>
    )
    
  } catch (error) {
    console.log(error)
  }

  
}