import "./movieCard.css"
import { Rick } from '../../interfaceRick'
// import { Rick } from "@/app/interfaceRick";
import Link from "next/link";


interface Movie {
    id: number;
    title: string;
    image: string;
    score: number;
    genres: {
      movieId: number;
      genreId: number;
    }[];
  }
  
  interface Genre {
    id: number;
    title: string;
    movieId: number;
    genreId: number;
  }


export default function MovieCard(propsFromMovies: Rick) {
    
    return (
        
        <div className="card" key={propsFromMovies.id}>
          <img src={propsFromMovies.img}/>
              <div className="card__content">
                    <p className="card__title">{propsFromMovies.name}</p>
                    <button className="card__button-info"><Link href={"hola"}>+info</Link></button>
                    <div className='card__genre-description'>Los generos aquí</div>
                    <p className="card__score">Score: </p>
                    <p className="card__score-puntuation">{propsFromMovies.id}</p>
              </div>
        </div>
    
    )
} 