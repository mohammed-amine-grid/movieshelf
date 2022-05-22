import axios from 'axios';

const API_URL = '/users/';

// signup
const signup = async (data) => {
    const response =  await axios.post(API_URL + 'register', data);

    if(response.data) {
        window.localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


// login

const login = async (data) => {
    const response =  await axios.post(API_URL + 'login', data);
    
    if(response.data) {
        window.localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    return response.data
}


// logout 

const logout = () => {
    localStorage.removeItem('user');
}


 const authService = {
    signup,
    login,
    logout,
}

export default authService;