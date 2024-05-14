import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const MovieHub: string = process.env.URL_LOCAL || "" ; 

export async function FMovies() {
    try {
        const data = await axios.get(MovieHub + "/movie");
        return data

        
    } catch (error) {

    }
    
} 

export async function FGenres() {
    const data = await fetch(MovieHub + "/genre");
    const JSONdata = await data.json();

    return JSONdata
} 


export async function FOneMovie (id: string) {
    const data = await fetch(MovieHub + "/movie/" + id);
    const JSONdata = await data.json();

    return JSONdata
}


