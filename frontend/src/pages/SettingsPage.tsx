import ThemeButton from "../components/ThemeButton";
import LogoutIcon from "../assets/icons/LogoutIcon";
import { LOGIN, NOTES } from "../consts";
import NotesOutlineIcon from "../assets/icons/NotesOutlineIcon";
import { Link } from "react-router-dom";

const SettingsPage = () => {
	return (
		<div className="min-h-screen hero">
			<div className="hero-content flex-col">
				<div>$USERNAME$</div>
				<div className="card w-96 bg-neutral text-neutral-content ">
					<div className="card-body items-center text-center p-10">
						<h1 className="card-title">Change Password</h1>
						<input
							type="password"
							placeholder="New Password"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							type="password"
							placeholder="Repeat Password"
							className="input input-bordered w-full max-w-xs"
						/>

						<div className="card-actions justify-end w-full">
							<button className="btn btn-primary">Accept</button>
						</div>
					</div>
				</div>
				<div className="card w-96 bg-neutral text-neutral-content">
					<div className="collapse border border-error collapse-arrow">
						<input type="checkbox" className="w-full" />
						<div className="collapse-title flex">DANGER ZONE !</div>
						<div className="collapse-content justify-center flex">
							<button className="btn btn-error">Delete Account</button>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute flex flex-col top-5 right-5 gap-4">
				<div className="tooltip tooltip-left" data-tip="Theme">
					<ThemeButton />
				</div>
				<div className="tooltip tooltip-left" data-tip="Settings">
					<Link to={NOTES}>
						<button className="btn btn-circle">
							<NotesOutlineIcon />
						</button>
					</Link>
				</div>
				<div className="tooltip tooltip-left" data-tip="Logout">
					<Link to={LOGIN}>
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
