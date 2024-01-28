import ThemeButton from "../components/ThemeButton";
import LogoutIcon from "../assets/icons/LogoutIcon";
import { LOGIN, NOTES } from "../consts";
import NotesOutlineIcon from "../assets/icons/NotesOutlineIcon";
import { Link } from "react-router-dom";
import { LoginErrorInterface, appApi } from "../api/services/AppApi";
import useSessionStorage from "../hooks/useSessionStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import ToastMessage from "../components/ToastMessage";

const SettingsPage = () => {
	const [popupMessage, setPopupMessage] = useState<string | null>(null);
	const [isError, setIsError] = useState(false); // Error status
	const [sessionUserName] = useSessionStorage<string | null>(
		"userName",
		null,
	);
	const [,setSessionUserDeleted] = useSessionStorage<boolean | null>(
		"userDeleted",
		null,
	);
	const [sessionToken, setSessionToken] = useSessionStorage<string | null>(
		"token",
		null,
	);
	const passwordChangeSchema = z.object({
		password1: z.string().min(4, "Password must be at least 4 characters"),
		password2: z.string().min(4, "Password must be at least 4 characters")
	}).refine((data) => data.password1 === data.password2, {
		message: "Passwords must match",
		path: ["password2"]
	});

	// Define the type for the form datas
	type LoginFormInputs = z.infer<typeof passwordChangeSchema>;

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({
		resolver: zodResolver(passwordChangeSchema),
	}); // Message to display in the popup

	// ---- FUNCTIONS ----
	// Function to handle form submission (login request)
	const onSubmit: SubmitHandler<LoginFormInputs> = (passwordChangeSchema) => {
		if (sessionToken) {
			appApi
				.editPassword(
					{
						userId: sessionToken,
						newPassword: passwordChangeSchema.password1
					}
				)
				.then(() => {
					// Display OK message
					setPopupMessage("Password changed successfully!");
				})
				.catch((error: LoginErrorInterface) => {
					setPopupMessage(error.message + " " + "(" + error.response.data + ")");
				})
				.finally(() => {
					reset();
				})
		} else console.log("CHUJ NIE MASZ TOKENA")
	};

	// Function to handle the toast

	// ---- EFFECTS ----
	useEffect(() => {
		const timer = setTimeout(() => {
			setPopupMessage(null);
			setIsError(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [popupMessage]);
	useEffect(() => {
		if (!sessionToken) window.location.pathname = "/login";
	});

	return (
		<div className="min-h-screen hero">
		<ToastMessage toastMessage={popupMessage} isError={isError}/>
			<div className="hero-content flex-col">
				<div>{"Hiellow "+ sessionUserName}</div>
				<form className="card w-96 bg-neutral text-neutral-content" onSubmit={handleSubmit(onSubmit)}>
					<div className="card-body items-center text-center p-10">
						<h1 className="card-title">Change Password</h1>
						<label className="form-control w-full">
							<input
								type="password"
								placeholder="New Password"
								className="input input-bordered w-full max-w-xs"
								{...register("password1")}
								
							/>
							<div className="label">
								<span className="label-text-alt">
									{errors.password1 && <p>{errors.password1.message}</p>}
								</span>
							</div>
						</label>
						<label className="form-control w-full">
							<input
								type="password"
								placeholder="Repeat Password"
								className="input input-bordered w-full max-w-xs"
								{...register("password2")}
							/>
							<div className="label">
								<span className="label-text-alt">
									{errors.password2 && <p>{errors.password2.message}</p>}
								</span>
							</div>
						</label>
						<div className="card-actions justify-end w-full">
							<button type="submit" className="btn btn-primary">Accept</button>
						</div>
					</div>
				</form>
				<div className="card w-96 bg-neutral text-neutral-content">
					<div className="collapse border border-error collapse-arrow">
						<input type="checkbox" className="w-full" />
						<div className="collapse-title flex">DANGER ZONE !</div>
						<div className="collapse-content justify-center flex">
							<button className="btn btn-error" onClick={() => {
								if(parseInt(sessionToken || "0") !== 1 && sessionToken)
								{
									appApi.deleteUser(parseInt(sessionToken))
									.then(() => {
										// Display OK message
										setSessionUserDeleted(true);
										setSessionToken(null);
										window.location.pathname = "/login";
									})
									.catch((error: LoginErrorInterface) => {
										setPopupMessage(error.message + " " + "(" + error.response.data + ")");
										setIsError(true);
									})
								} else 
								{
									setPopupMessage("Admin account can't be disabled!");
									setIsError(true);
								}
							}}>Delete Account</button>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute flex flex-col top-5 right-5 gap-4">
				<div className="tooltip tooltip-left" data-tip="Theme">
					<ThemeButton />
				</div>
				<div className="tooltip tooltip-left" data-tip="Settings">
					<Link to={"/"+NOTES}>
						<button className="btn btn-circle">
							<NotesOutlineIcon />
						</button>
					</Link>
				</div>
				<div className="tooltip tooltip-left" data-tip="Logout">
					<Link to={"/"+LOGIN}>
						<button className="btn btn-circle"
							onClick={() => {
								setSessionToken(null);
								window.location.pathname = "/";
							}}>
							<LogoutIcon />
						</button>
					</Link>
				</div>
			</div>
		</div >
	);
};

export default SettingsPage;
