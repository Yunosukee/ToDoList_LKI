import { AxiosResponse } from "axios";
import { main } from "../../configure";
import { axiosDelete, axiosGet, axiosPost } from "../AxiosService";
import { editNoteSendDataRecast } from "../editNoteSendDataRecast";
import internal from "stream";

const API_URL = main.api_url;

interface LoginInterface {
	login: string;
	password: string;
}
interface ResetPasswordInterface{
	userId: string,
	newPassword: string
}
interface NewNoteInterface {
	noteHeader: string;
	noteBody: string;
	ownerId: string;
}
export interface NoteInterface {
	id: number;
	note_header: string;
	note_body: string;
	owner_id: number;
	date_added: string;
	date_last_edit: string;
	note_id: number | null;
	user_id: number | null;
	canedit: number | null;
}
export interface EditNoteInterface {
	id: string;
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
		return axiosPost(API_URL + "/Notes/createNote", data);
	},
	getNote: (data: string): Promise<AxiosResponse> => {
		return axiosGet(API_URL + "/Notes/getNotesByUserId/" + data);
	},
	editNote: (data: EditNoteInterface): Promise<AxiosResponse> => {
		return axiosPost(
			API_URL + "/Notes/editNoteByNoteId",
			editNoteSendDataRecast(data),
		);
	},
	deleteNote: (data: string): Promise<AxiosResponse> => {
		return axiosDelete(API_URL + "/Notes/deteteNoteByNoteId/" + data);
	},
	editPassword: (data: ResetPasswordInterface) =>{
		return axiosPost(API_URL + "/Users/editUserPasswordByUserId/", data);
	},
	deleteUser: (data: number) =>{
		return axiosDelete(API_URL + "/User/disableUserByUserId/" + data);
	}
};
