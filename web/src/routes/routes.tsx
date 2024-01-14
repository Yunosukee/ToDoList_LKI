// ----- IMPORT ICONS -----
import { RiHome3Fill } from "react-icons/ri";
import { IoMdOptions } from "react-icons/io";
// ----- IMPORT PAGES -----
import LoginPage from "../pages/LoginPage";
// ----- IMPORT CONSTS -----
import { NOTES, SETTINGS } from "../consts";
import { capitalizeFirstLetter } from "../utils/StringTransformationUtils";
import NotesPage from "../pages/NotesPage";

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

// const routesSecondLevel = {};

// const routesFirstLevel: RoutesObject = {
// 	[NOTES]: [
// 		{
// 			name: "Users",
// 			path: "/users",
// 			component: () => <>UserPage</>,
// 			icon: FaUsers,
// 		},
// 		{
// 			name: "Roles",
// 			path: "/roles",
// 			component: () => <>Roles</>,
// 		},
// 		{
// 			name: "Permissions",
// 			path: "/permissions",
// 			component: () => <>Permissions</>,
// 		},
// 	],
// 	[SETTINGS]: [
// 		{
// 			name: "General",
// 			path: "/general",
// 			component: () => <>General</>,
// 		},
// 		{
// 			name: "Appearance",
// 			path: "/appearance",
// 			component: () => <>Appearance</>,
// 		},
// 		{
// 			name: "Advanced",
// 			path: "/:id",
// 			component: SettingsAdvancedPage,
// 		},
// 	],
// };

export const routesRoot: Routes[] = [
	{
		name: "Login",
		path: "login",
		component: LoginPage,
		icon: RiHome3Fill,
	},
	{
		name: capitalizeFirstLetter(NOTES),
		path: NOTES,
		component: NotesPage,
		icon: IoMdOptions,
	},
	{
		name: capitalizeFirstLetter(SETTINGS),
		path: SETTINGS,
		component: () => <>⚙️ Settings ⚙️</>,
		icon: IoMdOptions,
	},
];
