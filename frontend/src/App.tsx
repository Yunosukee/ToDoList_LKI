import { BrowserRouter as Router } from "react-router-dom";
import DevInfo from "./components/DevInfo";
import { main } from "./configure";
import useSessionStorage from "./hooks/useSessionStorage";
import LoginPage from "./pages/LoginPage";
import SwitchRoutesGenerator from "./routes/SwitchRoutesGenerator";

function App() {
	const [sessionToken] = useSessionStorage<string | null>("token", null);
	if (!sessionToken) return <LoginPage />;
	else {
		return (
			// Router component with base path
			<Router base={main.basePath}>
				<>
					<div>
						<DevInfo />
						<SwitchRoutesGenerator />
						{/* GenerateNavigationButtonsDebug component */}
						{/* Paths in Route should be without base path (even without '/'). If want Route for base path than pass base path */}
						{/* SwitchRoutesGenerator component */}
					</div>
				</>
			</Router>
		);
	}
}

export default App;
