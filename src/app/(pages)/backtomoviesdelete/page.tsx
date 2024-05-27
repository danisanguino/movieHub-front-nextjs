
import "../backtomovies/backtomovies.css"
import GeneralButton from '../../../components/button/generalButton';

export default function BackToMoviesDelete () {


    return (
        <main className="container-back">
        <h2>La película se ha eliminado con éxito</h2>
        <GeneralButton
         title={"Back to movies"}
         link={"/backtomoviesdelete"}
         />
        </main>
    )
}