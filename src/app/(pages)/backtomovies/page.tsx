
import GeneralButton from "@/components/button/generalButton";
import "./backtomovies.css"

export default function BackToMovies () {


    return (
        <main className="container-back">
        <h2>Your movie has been upload sucefully</h2>
        <GeneralButton
         title={"Back to movies"}
         link={"/movies"}
         />
        </main>
    )
}