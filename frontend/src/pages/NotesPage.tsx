import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetNoteInterface, appApi } from "../api/services/AppApi";
import AddIcon from "../assets/icons/AddIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import SettingsOutlineIcon from "../assets/icons/SettingsOutlineIcon";
import Note from "../components/Note";
import ThemeButton from "../components/ThemeButton";
import { SETTINGS } from "../consts";
import useSessionStorage from "../hooks/useSessionStorage";

const NotesPage = () => {
	const [notes, setNotes] = useState<Array<GetNoteInterface>>([]);
	const [sessionToken, setSessionToken] = useSessionStorage<string | null>(
		"token",
		null,
	);

	const getNotes = () => {
		if (sessionToken !== null) {
			appApi
				.getNote(sessionToken)
				.then((response) => {
					setNotes(
						response.data.sort(
							(a, b) => Number(a.note_id ?? a.id) - Number(b.note_id ?? b.id),
						),
					);
				})
				.catch((error) => {
					console.error("error getting notes " + error);
				});
		} else {
			window.location.pathname = "/";
		}
	};

	useEffect(() => {
		getNotes();
	}, []);

	const renderedNotes = notes.map((item, index) => (
		<Note
			key={index}
			header={item.note_header}
			body={item.note_body}
			noteId={item.note_id ?? item.id}
		/>
	));

	return (
		<div className="min-h-screen">
			<div className="text-center p-4">
				<div className="flex gap-4 flex-wrap relative">
					<div className="absolute flex flex-col top-1 right-1 gap-4">
						<div className="tooltip tooltip-left" data-tip="Theme">
							<ThemeButton />
						</div>
						<div className="tooltip tooltip-left" data-tip="Settings">
							<Link to={"/" + SETTINGS}>
								<button className="btn btn-circle">
									<SettingsOutlineIcon />
								</button>
							</Link>
						</div>
						<div className="tooltip tooltip-left" data-tip="Logout">
							<button
								className="btn btn-circle"
								onClick={() => {
									setSessionToken(null);
									window.location.pathname = "/";
								}}
							>
								<LogoutIcon />
							</button>
						</div>
						<div className="tooltip tooltip-left" data-tip="Add new note">
							<button
								className="btn btn-circle"
								onClick={() => {
									appApi
										.newNote({
											noteHeader: "",
											noteBody: "",
											ownerId: sessionToken || "1",
										})
										.then(() => {
											getNotes();
											window.location.reload();
										});
								}}
							>
								<AddIcon />
							</button>
						</div>
					</div>
					{renderedNotes}
				</div>
			</div>
		</div>
	);
};

export default NotesPage;
