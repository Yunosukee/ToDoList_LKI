// ----- IMPORT ICONS -----
import { RiHome3Fill } from "react-icons/ri";
import { IoMdOptions } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
// ----- IMPORT PAGES -----
import AdministrationPage from "../pages/AdministrationPage";
import HomePage from "../pages/HomePage";
// ----- IMPORT CONSTS -----
import { ADMINISTRATION, SETTINGS } from "../consts";
import SettingsAdvancedPage from "../pages/SettingsAdvancedPage";

// ----- TYPE DEFINITIONS -----
export type Routes = {
	name: string;
	path: string;
	component: () => JSX.Element;
	icon?: () => JSX.Element;
	children?: Routes[];
};
type RoutesObject = {
	[key: string]: Routes[];
};

// ----- ROUTES DEFINITIONS -----
//! Don't leave trailor '/' in paths
//! Paths in Route should be without base path (even without '/'). If want Route for base path than pass base path
//* Wouter is basically join paths with each other, so if base path is "/" every sub path souldn't have "/" at the beginning

// const routesSecondLevel = {};

const routesFirstLevel: RoutesObject = {
	[ADMINISTRATION]: [
		{
			name: "Users",
			path: "/users",
			component: () => <>UserPage</>,
			icon: FaUsers,
		},
		{
			name: "Roles",
			path: "/roles",
			component: () => <>Roles</>,
		},
		{
			name: "Permissions",
			path: "/permissions",
			component: () => <>Permissions</>,
		},
	],
	[SETTINGS]: [
		{
			name: "General",
			path: "/general",
			component: () => <>General</>,
		},
		{
			name: "Appearance",
			path: "/appearance",
			component: () => <>Appearance</>,
		},
		{
			name: "Advanced",
			path: "/:id",
			component: SettingsAdvancedPage,
		},
	],
};

export const routesRoot: Routes[] = [
	{
		name: "Home",
		path: "/",
		component: HomePage,
		icon: RiHome3Fill,
	},
	{
		name: ADMINISTRATION,
		path: "administration",
		component: AdministrationPage,
		icon: IoMdOptions,
		children: routesFirstLevel[ADMINISTRATION],
	},
	{
		name: SETTINGS,
		path: "settings",
		component: () => <>Settings</>,
		icon: IoMdOptions,
		children: routesFirstLevel[SETTINGS],
	},
];
