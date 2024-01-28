import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { LoginErrorInterface, appApi } from "../api/services/AppApi";
import ThemeButton from "../components/ThemeButton";
import ToastMessage from "../components/ToastMessage";
import useSessionStorage from "../hooks/useSessionStorage";

const loginSchema = z.object({
	login: z.string().min(1, "Login is required"),
	password: z.string().min(4, "Password must be at least 4 characters"),
});

// Define the type for the form data
type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage = () => {
	// ---- HOOKS ----
	const [isSubmitting, setIsSetsubmitting] = useState(false); // Locks login button while submitting
	const [isError, setIsError] = useState(false); // Error status
	// const navigate = useNavigate(); // Location hook from wouter (used to redirect to the notes page)
	const [popupMessage, setPopupMessage] = useState<string | null>(null);
	const [sessionToken, setSessionToken] = useSessionStorage<string | null>(
		"token",
		null,
	);
	const [, setSessionUserName] = useSessionStorage<string | null>(
		"userName",
		null,
	);
	// Use the useForm hook with Zod resolver
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({
		resolver: zodResolver(loginSchema),
	}); // Message to display in the popup

	// ---- FUNCTIONS ----
	// Function to handle form submission (login request)
	const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
		setIsError(false);
		setIsSetsubmitting(true);
		appApi
			.login(data)
			.then((response) => {
				// Set the session token
				setSessionToken(response.data);
				setSessionUserName(data.login);
				// Display OK message
				setPopupMessage("Login successful!");
				window.location.pathname = "/notes";
				// navigate("/notes");
			})
			.catch((error: LoginErrorInterface) => {
				setIsError(true);
				setPopupMessage(error.message + " " + "(" + error.response.data + ")");
			})
			.finally(() => {
				setIsSetsubmitting(false);
			});
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
		if (sessionToken) window.location.pathname = "/notes";
	});

	// ---- RENDER ----
	return (
		<div className="hero min-h-screen relative">
			{/* Toolbox */}
			<div className="absolute flex flex-col top-5 right-5 gap-4">
				<div className="tooltip tooltip-left" data-tip="Theme">
					<ThemeButton />
				</div>
			</div>
			{/* Toast */}
			<ToastMessage toastMessage={popupMessage} isError={isError} />
			{/* Login */}
			<div className="hero-content flex-col">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="p-8 w-full md:w-144 flex flex-col gap-4 bg-neutral rounded-xl drop-shadow-2xl"
				>
					<label className="form-control">
						<input
							type="text"
							placeholder="Login"
							className={`input input-bordered w-full ${errors.login && "input-error"}`}
							{...register("login")}
						/>
						<div className="label">
							<span className="label-text-alt">
								{errors.login && <p>{errors.login.message}</p>}
							</span>
						</div>
					</label>

					<label className="form-control">
						<input
							type="password"
							placeholder="Password"
							className={`input input-bordered w-full ${errors.login && "input-error"}`}
							{...register("password")}
						/>
						<div className="label">
							<span className="label-text-alt">
								{errors.password && <p>{errors.password.message}</p>}
							</span>
						</div>
					</label>
					<button type="submit" className="btn btn-primary" disabled={isSubmitting}>
						{isSubmitting ? "Loading..." : "Login"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
