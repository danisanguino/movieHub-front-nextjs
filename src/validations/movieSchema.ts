import {z} from "zod"

export const movieSchema = z.object({
    image: z.string().min(1, {
        message: "Title of movie..."
    }).max(400, {
        message: "please instert the url correctly"
    }),
    
    title: z.string().min(1, {
        message: "La imagen don't forget..."
    }).max(200, {
        message: "Too long to be a title"
    }),

    sinopsis: z.string().min(1, "This field is required"),

    score: z.string().min(1, {
        message: "Score incorrect"
    }).max(3, {
        message: "Too long to be a score, ej max: 7.8"
    })
})