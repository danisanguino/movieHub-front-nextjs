"use client"

import React from 'react';
import "./form.css"
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { movieSchema } from '@/validations/movieSchema';

type FormValues = {
    title: string;
    image: string;
    score: string
  };

export default function Form () {
    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm<FormValues>({
            resolver: zodResolver(movieSchema)
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
            
        // entiendo que aqui ira al back??
        console.log(data)
    }

    console.log(errors);


    return (
        <div className='container-form'>
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
                
                <button>Insert</button>
            </form>
            <div>
                {JSON.stringify(watch(), null, 2)}
            </div>
        </div>
    );
}