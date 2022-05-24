import axios from 'axios';

const API_URL = 'api_key=27040b5025e0463698cba39676d4bf1b';
const SEARCH_ENDPOINT = `https://api.themoviedb.org/3/search/movie?query=`;
const LATEST_MOVIE_ENDPOINT = `https://api.themoviedb.org/3/movie/top_rated`;



const search =  async (searchInput) => {
    const response = await axios.get(`${SEARCH_ENDPOINT}${searchInput}&${API_URL}`);
    return response.data.results;
};

const getLatestMovies = async() => {
    const response = await axios.get(`${LATEST_MOVIE_ENDPOINT}?${API_URL}`);
    return response.data.results;
}


const searchService = {
    search,
    getLatestMovies
};

export default searchService;