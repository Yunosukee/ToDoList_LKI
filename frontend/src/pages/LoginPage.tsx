import ThemeButton from "../components/ThemeButton";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
	login: z.string().min(1, "Login is required"),
	password: z.string().min(4, "Password must be at least 4 characters"),
});

// Define the type for the form data
type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage = () => {
	// Use the useForm hook with Zod resolver
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({
		resolver: zodResolver(loginSchema),
	});

	// Function to handle form submission
	const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
		console.log(data);
		// Handle login logic here
	};

	return (
		<div className="hero min-h-screen relative">
			<div className="absolute flex flex-col top-5 right-5 gap-4">
				<div className="tooltip tooltip-left" data-tip="Theme">
					<ThemeButton />
				</div>
			</div>
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

				<button type="submit" className="btn btn-primary">
					Login
				</button>
				{/* <Link href={NOTES} className="btn btn-primary">
					Login
				</Link> */}
			</form>
		</div>
	);
};

export default LoginPage;
