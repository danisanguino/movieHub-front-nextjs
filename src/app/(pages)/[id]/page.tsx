import "./detail.css";
import { Rick } from '../../interfaceRick'

const RICK: string = process.env.URL_RICK || "" ; 

export default async function MovieDetail () {

    const data = await fetch(RICK);
    // const data = await fetch("http://localhost:3800");
    //console.log(data);
    const JSONdata: Rick = await data.json();

    return (
    <>
        {/* <h1 key={JSONdata.results.}>{JSONdata.results}</h1> */}
        <div className="container-movie-detail">
            <img src="https://res.cloudinary.com/dqm1upnhh/image/upload/v1712680478/Regreso_al_futuro-139415628-large_jwopg4.jpg" alt="nombre de la peli"/>
            <div className="movie-data">
                <h3>Sinopsis</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel viverra sem. Etiam in volutpat est, eget molestie purus. Donec eget tempus quam, ac dignissim ipsum. Suspendisse pretium varius maximus. Donec tincidunt ligula libero, id fringilla enim gravida et. Maecenas convallis orci condimentum volutpat interdum. Phasellus aliquam diam sit amet purus tempor suscipit. Proin auctor purus a tristique rhoncus. Quisque laoreet molestie vestibulum. Aenean vehicula lacus eget quam pretium interdum. Vestibulum vel bibendum ligula, sed dapibus est. Nam interdum venenatis turpis, in rutrum lorem finibus ut. Nulla in euismod urna. Curabitur ultrices velit eu massa vestibulum, sed tempor quam sodales.</p>
                <h4>Genre/s</h4>
                <ul>
                    <li>Guapísima</li>
                </ul>
                <h4>Score</h4>
                <div className="score-back">
                <h5>9.7</h5>
                 <button>Back</button>
                 </div>
            </div>
        </div>
    </>
    )
};