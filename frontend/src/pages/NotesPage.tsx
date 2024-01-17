import Note from "../components/Note";
import ThemeButton from "../components/ThemeButton";
import SettingsOutlineIcon from "../assets/icons/SettingsOutlineIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import AddIcon from "../assets/icons/AddIcon";
import { SETTINGS } from "../consts";
import useSessionStorage from "../hooks/useSessionStorage";
import { Link, useNavigate } from "react-router-dom";

const NotesPage = () => {
	const [, setToken] = useSessionStorage<string | null>("token", null);
	const navigate = useNavigate();
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
							<button className="btn btn-circle">
								<AddIcon />
							</button>
						</div>
					</div>
					<Note header="Header" body="Body" />
				</div>
			</div>
		</div>
	);
};

export default NotesPage;
