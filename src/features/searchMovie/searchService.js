import axios from 'axios';

const API_URL = 'https://imdb-api.com/en/API/SearchMovie/k_34r27uua/';

const search =  async (searchInput) => {
    const response = await axios.get(`${API_URL+searchInput}`);
    return response.data.results;
};



const searchService = {
    search,
};

export default searchService;