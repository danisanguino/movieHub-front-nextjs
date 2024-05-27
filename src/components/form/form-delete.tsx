

import { DeleteMovie, FMovies } from '@/utils/functions';
import { Movie } from '@/app/interface';
import "./form.css"



export default async function DeleteForm () {    
    const movieToDelete = await FMovies();

    const handlerDelete =  (id: number) =>{
         const handlerDeleteMovie = async () => {
             await DeleteMovie(id)
             setTimeout(() => {
                window.location.href = "/backtomoviesdelete";
            }, 500);
         };

         handlerDeleteMovie();
        
    }

    
    return (
        <div className='container-form-delete'>
            <h2>Borrar Película</h2>
            <h3>Por favor, click en el título para eliminar</h3>
            <ul>
            {movieToDelete?.data.map((movie: Movie)=> {        
                return <button onClick={()=>{handlerDelete(movie.id)}}><li key={movie.id}>{movie.title}</li></button>
            })}
            </ul>
        </div>
        
    )
}