import { AxiosResponse } from "axios";
import { main } from "../../configure";
import { axiosPost } from "../AxiosService";

const API_URL = main.api_url;

interface LoginInterface {
	login: string;
	password: string;
}
export interface LoginResponseInterface {
	data: string;
}
export interface LoginErrorInterface {
	message: string;
	response: { data: string };
}

export const appApi = {
	login: (data: LoginInterface): Promise<AxiosResponse> => {
		return axiosPost(API_URL + "/Users/login", data);
	},
};
