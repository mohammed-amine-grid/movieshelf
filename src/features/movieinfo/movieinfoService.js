import axios from 'axios';

const API_URL = '?api_key=27040b5025e0463698cba39676d4bf1b';
const GENRES_END_POINT = `https://api.themoviedb.org/3/genre/movie/list`;
const MOVIE_DETAILS_ENDPOINT = `https://api.themoviedb.org/3/movie/`;


const getMovieGenres = async () => {
    const response = await axios.get(`${GENRES_END_POINT}${API_URL}`);
    return response.data.genres;
}


const getMovieInfo =  async (id) => {
    const response = await axios.get(`${MOVIE_DETAILS_ENDPOINT}${id}${API_URL}`);
    return response.data; 
}


const getMovieTrailer = async (id) => {
    const response = await axios.get(`${MOVIE_DETAILS_ENDPOINT}${id}/videos${API_URL}`);
    return response.data.results;
}

const movieinfoService = {
    getMovieGenres,
    getMovieInfo,
    getMovieTrailer
}

export default movieinfoService;