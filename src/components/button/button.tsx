import Link from "next/link"
import "./button.css"

type Button = {
    title: string,
    link: string
} 

export default function Button( props: Button) {

    return (

        <button className="button" data-text="Awesome">
            <span className="actual-text">{` ${props.title} `}</span>
            <span aria-hidden="true" className="hover-text"> <Link href={props.link}> {` ${props.title} `} </Link></span>
        </button>


    )

} 
