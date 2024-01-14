// ----- IMPORT ICONS -----
//---
// ----- IMPORT PAGES -----
import LoginPage from "../pages/LoginPage";
// ----- IMPORT CONSTS -----
import { NOTES, SETTINGS } from "../consts";
import { capitalizeFirstLetter } from "../utils/StringTransformationUtils";
import NotesPage from "../pages/NotesPage";
import SettingsOutlineIcon from "../assets/icons/SettingsOutlineIcon";
import LoginIcon from "../assets/icons/LoginIcon";
import NotesIcon from "../assets/icons/NotesIcon";

// ----- TYPE DEFINITIONS -----
export type Routes = {
	name: string;
	path: string;
	component: () => JSX.Element;
	icon?: () => JSX.Element;
	children?: Routes[];
};
// type RoutesObject = {
// 	[key: string]: Routes[];
// };

// ----- ROUTES DEFINITIONS -----
//! Don't leave trailor '/' in paths
//! Paths in Route should be without base path (even without '/'). If want Route for base path than pass base path
//* Wouter is basically join paths with each other, so if base path is "/" every sub path souldn't have "/" at the beginning

export const routesRoot: Routes[] = [
	{
		name: "Login",
		path: "login",
		component: LoginPage,
		icon: LoginIcon,
	},
	{
		name: capitalizeFirstLetter(NOTES),
		path: NOTES,
		component: NotesPage,
		icon: NotesIcon,
	},
	{
		name: capitalizeFirstLetter(SETTINGS),
		path: SETTINGS,
		component: () => <>⚙️ Settings ⚙️</>,
		icon: SettingsOutlineIcon,
	},
];
