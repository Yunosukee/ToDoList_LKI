import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DevInfo from "./components/DevInfo";
import useSessionStorage from "./hooks/useSessionStorage";
import SwitchRoutesGenerator from "./routes/SwitchRoutesGenerator";
import LoginPage from "./pages/LoginPage";

function App() {
	const [sessionToken] = useSessionStorage<string | null>("token", null);
	const navigate = useNavigate();
	useEffect(() => {
		if (!sessionToken && window.location.pathname !== "/login") {
			navigate("/login");
		}
	});

	return (
		// Router component with base path
		<>
			<div>
				<DevInfo />
				{!sessionToken ? <LoginPage /> : <SwitchRoutesGenerator />}
				{/* GenerateNavigationButtonsDebug component */}
				{/* Paths in Route should be without base path (even without '/'). If want Route for base path than pass base path */}
				{/* SwitchRoutesGenerator component */}
			</div>
		</>
	);
}

export default App;
