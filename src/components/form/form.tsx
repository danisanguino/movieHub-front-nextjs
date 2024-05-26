"use client"

import React from 'react';
import "./form.css"
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { movieSchema } from '@/validations/movieSchema';
import { UploadMovie } from '@/utils/functions';
import Link from 'next/link';


type FormValues = {
    title: string;
    image: string;
    score: string;
    sinopsis: string;
  };

export default function Form () {
    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm<FormValues>({
            resolver: zodResolver(movieSchema)
    });


    const onSubmit: SubmitHandler<FormValues> = async (data) => {
            
        const result = await UploadMovie(data);
        reset();
        setTimeout(() => {
            window.location.href = "/backtomovies";
        }, 1000);
    }

    return (
        <div className='container-form'>
          <h2>Insert a Movie</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form-upload'>
                 <input type="text" id="image" placeholder='Url of image here' 
                 {...register("image", { required: 'Image is required' })}
                 />
                 {
                    errors.image?.message && <p>{errors.image?.message}</p>
                 }


                <input type="text" id="title"  placeholder='Title of movie'
                {...register("title", { required: 'Title is required' })}
                />
                {
                    errors.title?.message && <p>{errors.title?.message}</p>
                 }

                <textarea id="sinopsis" placeholder='Write the sinopsis'
                {...register("sinopsis")} 
                />
                {
                    errors.sinopsis?.message && <p>{errors.sinopsis?.message}</p>
                 }


                <input type="text" id="score"  placeholder='Please the puntuation'
                {...register("score")}/>
                {
                    errors.score?.message && <p>{errors.score?.message}</p>
                 }
                
                {/* <GeneralButton
                    link=""
                    title='INSERT'/> */}
                <button className='form-button'>Insert</button>

            </form>
            <Link href={"/deletemovie"} className='link-delete-movie'>Delete Movies</Link>
        </div>
    );
}