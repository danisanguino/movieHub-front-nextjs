import Link from "next/link"
import "./generalButton.css"

type GenralButton = {
    title: string,
    link: string
} 

export default function GeneralButton(props: GenralButton ) {

    return (
        <button type="submit" className="general-button"> <Link href={props.link}> {props.title} </Link></button>
    )
}