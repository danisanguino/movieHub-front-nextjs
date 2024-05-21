import {z} from "zod"

export const movieSchema = z.object({
    image: z.string().min(1, {
        message: "Title of movie..."
    }).max(300, {
        message: "Demasiado largo bro"
    }),
    
    title: z.string().min(1, {
        message: "La imagen don't forget..."
    }).max(200, {
        message: "Demasiado largo bro"
    }),


    score: z.string().min(1, {
        message: "Title of score incorrect"
    }).max(3, {
        message: "Demasiado largo bro"
    })
})