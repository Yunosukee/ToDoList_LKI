import { Link } from "wouter";
import ThemeButton from "../components/ThemeButton";
import { NOTES } from "../consts";

const LoginPage = () => {
	return (
		<div className="hero min-h-screen relative">
			<div className="absolute flex flex-col top-5 right-5 gap-4">
				<div className="tooltip tooltip-left" data-tip="Theme">
					<ThemeButton />
				</div>
			</div>
			<div className="p-8 w-full md:w-144 flex flex-col gap-4 bg-neutral rounded-xl drop-shadow-2xl">
				<input
					type="text"
					placeholder="Login"
					className="input input-bordered w-full"
				/>
				<input
					type="password"
					placeholder="Password"
					className="input input-bordered w-full"
				/>
				<Link href={NOTES} className="btn btn-primary">
					Login
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
