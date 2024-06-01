import axios from 'axios';

// axios.defaults.baseURL = process.env.BASE_URL;

const instance = axios.create({
	baseURL: 'https://18.228.150.220:5000',
});

export default instance;