import React from "react";

const LoginPage = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md flex flex-col gap-4 w-auto">
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
					<button className="btn btn-primary">Login</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
