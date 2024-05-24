import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const MovieHub: string = process.env.NEXT_PUBLIC_LOCALHOST_URL || "" ; 



export async function FMovies() {
    try {
        const data = await axios.get(MovieHub + "/movie");
        return data

        
    } catch (error) {
        console.log(error);
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


export async function UploadMovie (data: any) {
    
        
    try {
      const response = await axios.post(MovieHub + "/inputsmovie/1", data, 
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        );  
        
    } catch (error) {
        console.log(error);
    }

    
}


