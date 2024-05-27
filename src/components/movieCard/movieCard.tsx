import "./movieCard.css"
import Link from "next/link";
import { Movie } from "@/app/interface";



export default function MovieCard(propsFromMovies: Movie) {
    
    return (
        
        <div className="card" key={propsFromMovies.id}>
          <img src={propsFromMovies.image}/>
              <div className="card__content">
                    <p className="card__title">{propsFromMovies.title}</p>
                    <button className="card__button-info"><Link href={String(propsFromMovies.id)}>+info</Link></button> 
              </div>
        </div>
    
    )
} 