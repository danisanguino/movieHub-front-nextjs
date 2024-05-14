export interface Movie {
    id: number;
    title: string;
    image: string;
    sinopsis: string;
    score: number;
    // genres: {
    //   movieId: number;
    //   genreId: number;
    // }[];
    genres: MovieGenre[]
  }

  export interface MovieGenre {
    movieId: number;
    genreId: number;
  }

  export interface Genre {
    id: number;
    title: string;
    movieId: number;
    genreId: number;
  }