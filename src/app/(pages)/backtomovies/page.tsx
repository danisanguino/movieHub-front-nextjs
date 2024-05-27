
import GeneralButton from "@/components/button/generalButton";
import "./backtomovies.css"

export default function BackToMovies () {


    return (
        <main className="container-back">
        <h2>Tu película se ha subido correctamente</h2>
        <GeneralButton
         title={"Back to movies"}
         link={"/movies"}
         />
        </main>
    )
}