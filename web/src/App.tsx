import { main } from "./configure";
import { Router } from "wouter";
import SwitchRoutesGenerator from "./routes/SwitchRoutesGenerator";

function App() {
	return (
		// Router component with base path
		<Router base={main.basePath}>
			<div className=" space-y-6">
				<div>
					{/* GenerateNavigationButtonsDebug component */}
					{/* Paths in Route should be without base path (even without '/'). If want Route for base path than pass base path */}
					{/* SwitchRoutesGenerator component */}
					<SwitchRoutesGenerator />
				</div>
			</div>
		</Router>
	);
}

export default App;
