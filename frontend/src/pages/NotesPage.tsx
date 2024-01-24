import Note from "../components/Note";
import ThemeButton from "../components/ThemeButton";
import SettingsOutlineIcon from "../assets/icons/SettingsOutlineIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import AddIcon from "../assets/icons/AddIcon";
import { SETTINGS } from "../consts";
import useSessionStorage from "../hooks/useSessionStorage";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { appApi } from "../api/services/AppApi";



const NotesPage = () => {
	const [, setToken] = useSessionStorage<string | null>("token", null);
	const navigate = useNavigate();
	const [data, setData] = useState([]);
  
	useEffect(() => {
	  const fetchNotes = async () =>{
		const userId = sessionStorage.getItem('token');
		try {
			appApi
	  		.getNote(userId)
				.then((response) => {
					setData(response.data)
				})
				} catch (err) {
				console.log("error getting notes " + err);
				}
			}
		fetchNotes();	
	}, [])
	
	const renderedNotes = data.map(item => (
	<Note header={item.note_header} body={item.note_body} noteId={item.id}/>
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
									setToken(null);
									navigate("/");
								}}
							>
								<LogoutIcon />
							</button>
						</div>
						<div className="tooltip tooltip-left" data-tip="Add new note">
							<button  className="btn btn-circle">
								<AddIcon />
							</button>
						</div>
					</div>
					{renderedNotes}
					<Note header="" body="" noteId="6"/>
					{/*
					<Note header="Header" body="Body" noteId={5}/>
					*/}
				</div>
			</div>
		</div>
	);
};

export default NotesPage;
