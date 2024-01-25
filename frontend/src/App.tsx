import { useEffect } from "react";
import useSessionStorage from "./hooks/useSessionStorage";
import SwitchRoutesGenerator from "./routes/SwitchRoutesGenerator";
import LoginPage from "./pages/LoginPage";

function App() {
	const [sessionToken] = useSessionStorage<string | null>("token", null);

	useEffect(() => {
		if (!sessionToken && window.location.pathname !== "/login") {
			window.location.pathname = "/login";
		}
	});

	return (
		// Router component with base path
		<>
			<div>
				{/* <DevInfo /> */}
				{!sessionToken ? <LoginPage /> : <SwitchRoutesGenerator />}
				{/* GenerateNavigationButtonsDebug component */}
				{/* Paths in Route should be without base path (even without '/'). If want Route for base path than pass base path */}
				{/* SwitchRoutesGenerator component */}
			</div>
		</>
	);
}

export default App;
