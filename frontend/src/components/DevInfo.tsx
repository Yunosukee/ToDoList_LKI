import { main } from "../configure";
import GenerateNavigationButtonsDebug from "../routes/GenerateNavigationButtonsDebug";
import ThemeButton from "./ThemeButton";

const DevInfo = () => {
	return (
		<div className="border border-base-content flex gap-4 p-4 absolute w-full bottom-0 bg-base-300 z-50">
			<div className="px-5 mt-6">
				{/* Displaying program name and version */}
				<p className="text-center">
					{main.program_name} v{main.program_version}
					<p>Base path is: {main.basePath}</p>
				</p>
				<div>
					{/* ThemeButton component */}
					<ThemeButton />
				</div>
			</div>
			{/* Separator */}
			<GenerateNavigationButtonsDebug />
		</div>
	);
};

export default DevInfo;
