import axios from 'axios';

// axios.defaults.baseURL = process.env.BASE_URL;

const instance = axios.create({
	baseURL: 'https://osapi.viniciushungaro.com',
	// baseURL: 'https://localhost:5000',
});

export default instance;