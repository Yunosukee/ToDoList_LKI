import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { v4 } from "uuid";
import * as R from "./routes";
import { Routes as IRoutes } from "./routes";

const routesCrawler = (
	parentPath?: string,
	routesPack: IRoutes[] = R.routesRoot,
): JSX.Element[] => {
	// Roll through routes and generate Route for each
	return routesPack.map((route): JSX.Element => {
		// Debug log shows generated routes
		// inDev(() =>
		// 	console.log(
		// 		"routesCrawler routes",
		// 		parentPath ? parentPath + route.path : route.path,
		// 	),
		// );
		return route.children ? (
			<React.Fragment key={v4()}>
				{routesCrawler(parentPath ?? "" + route.path, route.children)}
				<Route
					key={v4()}
					path={parentPath ? parentPath + route.path : route.path}
					Component={route.component}
				/>
			</React.Fragment>
		) : (
			<Route
				key={v4()}
				path={parentPath ? parentPath + route.path : route.path}
				Component={route.component}
			/>
		);
	});
};

/**
 * This component is used to generate Switch with Routes for given routes object
 */
const SwitchRoutesGenerator = () => {
	return (
		<Routes key={"switch_component"}>
			{routesCrawler()}
			{/* Redirect any unmatched path to /login */}
			<Route path="/" element={<Navigate to="login" />} />
			<Route path="*" element={<>404</>} />
		</Routes>
	);
};

export default SwitchRoutesGenerator;
