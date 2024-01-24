import { Axios, AxiosResponse } from "axios";
import { main } from "../../configure";
import { axiosGet, axiosPost } from "../AxiosService";

const API_URL = main.api_url;

interface LoginInterface {
	login: string;
	password: string;
}
interface NewNoteInterface {
  noteHeader: string;
	noteBody: string;
	ownerId: number;
}
interface UserIdInterface {
	ownerId: string;
}
export interface EditNoteInterface {
	noteId: string;
	note_header: string;
	note_body: string;
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
  newNote: (data: NewNoteInterface): Promise<AxiosResponse> => {
		return axiosPost(API_URL + "/Notes/createNote", data)
	},
	getNote: (data: UserIdInterface): Promise<AxiosResponse> => {
	  return axiosGet(API_URL + "/Notes/getNotesByUserId/" +  data);
	},
	editNote: (data: EditNoteInterface): Promise<AxiosResponse> => {
		return axiosPost(API_URL + "/Notes/editNoteByNoteId", data)
	}
};


