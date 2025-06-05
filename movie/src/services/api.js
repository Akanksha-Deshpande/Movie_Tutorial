"http://www.omdbapi.com/?i=tt3896198&apikey=c5f24db5"

const API_KEY = "c5f24db5"
const BASE_URL = "http://www.omdbapi.com/"


export const getPopularMovies = async() =>{
    const response = await fetch(`${BASE_URL}/?s=batman&apikey=${API_KEY}`)
    const data = await response.json()

    return data.Search;
}

export const searchMovies = async(query) =>{
    const response = await fetch(`${BASE_URL}/?s=${query}&apikey=${API_KEY}`)
    const data = await response.json()

    return data.Search;
}