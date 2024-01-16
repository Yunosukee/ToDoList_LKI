import { AxiosResponse } from "axios";
import { main } from "../../configure";
import { axiosPost } from "../AxiosService";

const API_URL = main.api_url;

interface LoginInterface {
	login: string;
	password: string;
}
export interface LoginResponseInterface {
	id: string;
}
export interface LoginErrorInterface {
	stack: string;
	message: string;
	name: string;
	code: string;
	config: string;
	request: string;
	response: { data: string };
}

export const appApi = {
	login: (
		data: LoginInterface,
	): Promise<AxiosResponse<LoginResponseInterface, LoginErrorInterface>> => {
		return axiosPost(API_URL + "/Users/login", data);
	},
};
