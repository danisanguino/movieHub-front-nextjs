import { handleAuth } from "@auth0/nextjs-auth0"; 
import { handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth(
    {
    login: handleLogin ({
        authorizationParams: {
            //Poner el link del back HERE!!!
            audience: "https://moviehubprojectbackend-develop.up.railway.app"
        },
        returnTo:"/movies"
    })
    }
);