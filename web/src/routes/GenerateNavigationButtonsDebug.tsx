import React from "react";
import { v4 } from "uuid";
import { Link } from "wouter";
import * as R from "./routes";
import { Routes } from "./routes";
import inDev from "../utils/inDebug";

const routesCrawler = (
	parentPath?: string,
	routesPack: Routes[] = R.routesRoot,
): JSX.Element[] => {
	// Roll through routes and generate Route for each
	return routesPack.map((route): JSX.Element => {
		// Debug log shows generated routes
		inDev(() =>
			console.log(
				"routesCrawler buttons",
				parentPath ? parentPath + route.path : route.path,
			),
		);
		return (
			<div key={v4()} className="join">
				{/* Check does route have children and perform routing generation for children */}
				<Link
					className={`btn join-item hover:btn-primary duration-75 `}
					href={
						parentPath ? parentPath + route.path : route.path != "/" ? route.path : ""
					}
				>
					{/* Render icon */}
					{route.icon && React.createElement(route.icon, { className: "h-6 w-6" })}
					{/* Makes first letter uppercase */}
					{route.name[0].toUpperCase() + route.name.slice(1)}
				</Link>
				{route.children
					? routesCrawler(parentPath ?? "" + route.path, route.children)
					: null}
			</div>
		);
	});
};

/**
 * This component is used to generate buttons for debug navigation
 */
const GenerateNavigationButtonsDebug = () => {
	return <div className="space-y-2 space-x-2 mb-6">{routesCrawler()}</div>;
};

export default GenerateNavigationButtonsDebug;
