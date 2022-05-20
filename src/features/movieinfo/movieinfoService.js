import axios from 'axios';

const API_URL = '?api_key=27040b5025e0463698cba39676d4bf1b';
const GENRE_END_POINT = `https://api.themoviedb.org/3/genre/movie/list?api_key=27040b5025e0463698cba39676d4bf1b`

const getMovieGenres = async () => {
    const response = await axios.get(`${GENRE_END_POINT}`);
    return response.data.genres;
}


const movieinfoService = {
    getMovieGenres
}

export default movieinfoService;