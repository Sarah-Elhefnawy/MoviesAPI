export interface IMovies {
    adult: boolean
    backdrop_path: string | null
    id: number
    title: string
    original_title: string
    name: string
    original_name: string
    overview: string
    poster_path: string
    media_type: string
    original_language: string
    genre_ids: number[]
    popularity: number
    vote_average: number
    vote_count: number
    release_date: string
    video: boolean
    first_air_date: string
    origin_country: string[]
}
