import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useTheme = (): [boolean, () => void] => {
	const [theme, setTheme] = useLocalStorage<string>("theme", "light");
	const isDark = theme === "dark";

	const toggleTheme = () => {
		console.log("toggleTheme called");
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.dataset.theme = newTheme;
	};

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	return [isDark, toggleTheme];
};

export default useTheme;
