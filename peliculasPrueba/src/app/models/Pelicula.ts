export interface Pelicula {
    release_date: string;
    id: number;
    vote_count: number;
    video: boolean;
    media_type: string;
    vote_average: number;
    title: string;
    genre_ids: number[];
    original_title: string;
    original_language: string;
    adult: boolean;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    original_name: string;
    name: string;
    first_air_date: string;
    origin_country: string[];
}