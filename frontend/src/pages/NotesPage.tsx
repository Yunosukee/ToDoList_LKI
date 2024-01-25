import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EditNoteInterface, appApi } from "../api/services/AppApi";
import AddIcon from "../assets/icons/AddIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import SettingsOutlineIcon from "../assets/icons/SettingsOutlineIcon";
import Note from "../components/Note";
import ThemeButton from "../components/ThemeButton";
import { SETTINGS } from "../consts";
import { sessionToken, setSessionToken } from "./LoginPage";
import { json } from "stream/consumers";

const NotesPage = () => {
	const navigate = useNavigate();
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		if (sessionToken !== null) {
			appApi
				.getNote(sessionToken)
				.then((response) => {
					setNotes(response.data as unknown as []);
				})
				.catch((error) => {
					console.log("error getting notes " + error);
				});
		} else {
			navigate("/");
		}
	}, []);

	const renderedNotes = notes.map((item: EditNoteInterface, index) => (
		<Note
			key={index}
			header={item.note_header}
			body={item.note_body}
			noteId={item.id}
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
							<Link to={SETTINGS}>
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
									navigate("/");
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
											ownerId: sessionToken
										})
										.then((response) => {
											console.log(JSON.stringify(response));
										})
									}
								}
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
