"use client"

import React from 'react';
import "./form.css"
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { movieSchema } from '@/validations/movieSchema';
import { UploadMovie } from '@/utils/functions';
import Button from '../button/button';
import GeneralButton from '../button/generalButton';

type FormValues = {
    title: string;
    image: string;
    score: string
  };

export default function Form () {
    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm<FormValues>({
            resolver: zodResolver(movieSchema)
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
            
        console.log(data);

        const result = await UploadMovie(data);
        console.log(result);
        reset();
    }

    return (
        <div className='container-form'>
          <h2>Insert a Movie</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form-upload'>
                 <input type="text" id="image" placeholder='Url of image here' 
                 {...register("image", { required: 'la imagen es boligatory' })}
                 />
                 {
                    errors.image?.message && <p>{errors.image?.message}</p>
                 }


                <input type="text" id="title"  placeholder='Title of movie'
                {...register("title", { required: 'El titulo es obligatorio, imbecil' })}
                />
                {
                    errors.title?.message && <p>{errors.title?.message}</p>
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
            <div>
                {JSON.stringify(watch(), null, 2)}
            </div>
            </form>
        </div>
    );
}