import React from 'react'
import "./movies.css"
import MovieCard from '../../../components/movieCard/movieCard'
import { Rick } from '../../interfaceRick'
import dotenv from 'dotenv';

dotenv.config();

const RICK: string = process.env.URL_RICK || "" ; 

type Props = {}

export default async function Movies({}: Props) {

  try {
    const data = await fetch(RICK);
    // const data = await fetch("http://localhost:3800");
    const JSONdata: Rick = await data.json();
    // const results: Rick = JSONdata
    return (
      <>
          <h1>Movies</h1>
  
          <div className='container-movies'>

              {JSONdata.results.map((e) => {
                
                return (
                  <MovieCard
                    key={e.id}
                    id={e.id}
                    img={e.image}
                    name={e.name}
                  />
                )})};

          </div>
      </>
    )
    
  } catch (error) {
    console.log(error)
  }

  
}