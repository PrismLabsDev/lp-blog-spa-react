import axios from 'axios';

let axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.request.use((request) => {
  let accessToken = localStorage.getItem("access_token");
	if (accessToken && request.headers) {
		request.headers['Authorization'] = `Bearer ${JSON.parse(accessToken)}`;
	}
	return request;
});

export { 
  axios, 
  axiosInstance as http 
};
