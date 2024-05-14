import "./detail.css";
import { Movie, Genre, MovieGenre } from "@/app/interface";
import Button from "@/components/button/button";
import { FGenres, FOneMovie } from "@/utils/functions";
import dotenv from 'dotenv';

dotenv.config();

type Props = {
    params: {id: string} 
} 



export default async function MovieDetail ({params}: Props) {
    const id = params?.id

    const JSONdata: Movie = await FOneMovie(id);

    const JSONgenres: Genre[] = await FGenres();

    return (
    <>
        <h1>{JSONdata.title}</h1>
        <div className="container-movie-detail">
            <img src={JSONdata.image} alt={JSONdata.title}/>
            <div className="movie-data">
                <h3>Sinopsis</h3>
                <p>{JSONdata.sinopsis}</p>

                <ul>

                {JSONdata.genres.map((e: MovieGenre)=> {
                        const genreName = JSONgenres.find((g)=> {
                            return g.id === e.genreId
                });

                return <li key={e.genreId}>{genreName?.title}</li>})}



                </ul>
                <h4>Score</h4>
                <div className="score-back">
                <h5>{JSONdata.score} ⭐️</h5>
                 </div>
            </div>
        </div>
                 <Button
                    title={"back"}
                    link={"movies"}
                    />
    </>
    )
};