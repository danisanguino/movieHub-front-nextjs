import "./detail.css";
import { Movie, Genre } from "@/app/interface";
import dotenv from 'dotenv';

dotenv.config();

const MovieHub: string = process.env.URL_LOCAL || "" ; 

export default async function MovieDetail () {

    const data = await fetch(MovieHub + "/movie");
    console.log(data)
    const JSONdata: Movie = await data.json();

    return (
    <>
        <h1 key={JSONdata.id}>{JSONdata.title}</h1>
        <div className="container-movie-detail">
            <img src="https://res.cloudinary.com/dqm1upnhh/image/upload/v1712680478/Regreso_al_futuro-139415628-large_jwopg4.jpg" alt="nombre de la peli"/>
            <div className="movie-data">
                <h3>Sinopsis</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel viverra sem. Etiam in volutpat est, eget molestie purus. Donec eget tempus quam, ac dignissim ipsum. Suspendisse pretium varius maximus. Donec tincidunt ligula libero, id fringilla enim gravida et. Maecenas convallis orci condimentum volutpat interdum. Phasellus aliquam diam sit amet purus tempor suscipit. Proin auctor purus a tristique rhoncus. Quisque laoreet molestie vestibulum. Aenean vehicula lacus eget quam pretium interdum. Vestibulum vel bibendum ligula, sed dapibus est. Nam interdum venenatis turpis, in rutrum lorem finibus ut. Nulla in euismod urna. Curabitur ultrices velit eu massa vestibulum, sed tempor quam sodales.</p>
                <h4>Genre/s</h4>
                {JSONdata.map((e: Genre)=> {

                    return (
                      <ul>
                           <li>{e.genreId}</li>
                       </ul>

                    )})}
                <h4>Score</h4>
                <div className="score-back">
                <h5>{JSONdata.score}</h5>
                 <button>Back</button>
                 </div>
            </div>
        </div>
    </>
    )
};