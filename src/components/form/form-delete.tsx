import { DeleteMovie, FMovies } from '@/utils/functions';
import { Movie } from '@/app/interface';
import Link from 'next/link';

type PropsFromUtils = {
    params: {id: string} 
} 

export default async function DeleteForm ({params}: PropsFromUtils) {
// export default async function DeleteForm () {
    
    const movieToDelete = await FMovies();

    const calabaza = params?.id
    const deleteMovie = await DeleteMovie(calabaza);

    //Opción B: de al pulsar del botón ocurra esto:
    const handlerDelete = () =>{
        
    }

    
    return (

        <div className='container-form-delete'>
            <h2>Delete movie</h2>
            <h3>Please click in the title to delete</h3>
            <ul>
            {movieToDelete?.data.map((movie: Movie)=> {        
                return <li key={movie.id}>{movie.title}</li>   
                //  <Link href={deleteMovie?.data.id}><li key={movie.id}>{movie.title}</li></Link>
            //    
            })}
            </ul>
        </div>
        
    )
}