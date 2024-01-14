import ThemeButton from "./components/ThemeButton";
import { main } from "./configure";
import { Router } from "wouter";
import SwitchRoutesGenerator from "./routes/SwitchRoutesGenerator";
import GenerateNavigationButtonsDebug from "./routes/GenerateNavigationButtonsDebug";

function App() {
	return (
		// Router component with base path
		<Router base={main.basePath}>
			<div className=" space-y-6">
				<div className="px-5 mt-6">
					{/* Displaying program name and version */}
					<h1 className="text-center ">
						{main.program_name} v{main.program_version}
						<p>Base path is: {main.basePath}</p>
					</h1>
					<div>
						{/* ThemeButton component */}
						<ThemeButton />
					</div>
				</div>
				{/* Separator */}
				<hr className="my-12 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-current to-transparent opacity-25 dark:opacity-100" />
				<div>
					{/* GenerateNavigationButtonsDebug component */}
					<GenerateNavigationButtonsDebug />
					{/* Paths in Route should be without base path (even without '/'). If want Route for base path than pass base path */}
					{/* SwitchRoutesGenerator component */}
					<SwitchRoutesGenerator />
				</div>
			</div>
		</Router>
	);
}

export default App;
