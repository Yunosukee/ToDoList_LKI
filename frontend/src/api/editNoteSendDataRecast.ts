import { EditNoteInterface } from "./services/AppApi";

export const editNoteSendDataRecast = (data: EditNoteInterface) => {
	return {
		noteId: data.id,
		note_header: data.note_header,
		note_body: data.note_body,
	};
};
