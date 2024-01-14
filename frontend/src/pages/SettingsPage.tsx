import ThemeButton from "../components/ThemeButton";
import { Link } from "wouter";
import LogoutIcon from "../assets/icons/LogoutIcon";
import { LOGIN, NOTES } from "../consts";
import NotesOutlineIcon from "../assets/icons/NotesOutlineIcon";

const SettingsPage = () => {
	return (
		<div className="min-h-screen">
			<div className="absolute flex flex-col top-5 right-5 gap-4">
				<div className="tooltip tooltip-left" data-tip="Theme">
					<ThemeButton />
				</div>
				<div className="tooltip tooltip-left" data-tip="Settings">
					<Link href={NOTES}>
						<button className="btn btn-circle">
							<NotesOutlineIcon />
						</button>
					</Link>
				</div>
				<div className="tooltip tooltip-left" data-tip="Logout">
					<Link href={LOGIN}>
						<button className="btn btn-circle">
							<LogoutIcon />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
