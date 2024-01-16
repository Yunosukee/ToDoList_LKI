import axios, { AxiosError } from "axios";

// TODO: Add calls for notifications on varius states of the request

export const setupAxiosInterceptors = () => {
	axios.interceptors.request.use(
		(config) => {
			// Do something before request is sent
			return Promise.resolve(config);
		},
		(error) => {
			// Do something with request error
			return Promise.reject(error);
		},
	);
	axios.interceptors.response.use(
		(response) => {
			// Do something with response data
			const status = response.status;
			if (status === 200 && response.data) {
				console.error(response.data);
			}
			// Check if the status code is 401 (requires user authentication)
			if (status === 401) {
				console.error(response.data);
			}
			return Promise.resolve(response);
		},
		(error: AxiosError) => {
			// Do something with response error
			return Promise.reject(error);
		},
	);
};

// const handleAxiosError = (error: AxiosError, callbackFunction = null) => {
// 	if (error.message == "canceled") {
// 		callbackFunction && console.debug(callbackFunction);
// 		console.debug("Request Aborted");
// 	} else if (error.response) {
// 		// Request made and server responded
// 		console.log(error.response.data);
// 		console.log(error.response.status);
// 		console.log(error.response.headers);
// 	} else if (error.request) {
// 		// The request was made but no response was received
// 		console.log(error.request);
// 	} else {
// 		// Something happened in setting up the request that triggered an Error
// 		console.log("Error", error.message);
// 	}
// 	console.log(error.config);
// };

export const axiosGet = async (url: string) => {
	return axios.get(url);
};

export const axiosPost = async (url: string, data: unknown) => {
	return axios.post(url, data);
};

export const axiosPut = async (url: string, data: unknown) => {
	return axios.put(url, data);
};

export const axiosDelete = async (url: string) => {
	return axios.delete(url);
};
