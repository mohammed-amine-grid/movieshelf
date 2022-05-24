import axios from 'axios';

const API_URL = '/movies/';

const getWatchList = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(`${API_URL}watchlist`, config);
    return response.data;
}


const addToWatchList = async (movieInfo, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(`${API_URL}watchlist/add`,movieInfo, config);
    return response.data;
}


const deleteFromWatchlist = async (movieID, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.delete(`${API_URL}watchlist/delete/${movieID}`, config);

    return response.data;
} 


const watchlistService = {
    getWatchList,
    addToWatchList,
    deleteFromWatchlist
}

export default watchlistService;