import React from "react";
import { v4 } from "uuid";
import { Redirect, Route, Switch } from "wouter";
import inDev from "../utils/inDebug";
import * as R from "./routes";
import { Routes } from "./routes";

const routesCrawler = (
	parentPath?: string,
	routesPack: Routes[] = R.routesRoot,
): JSX.Element[] => {
	// Roll through routes and generate Route for each
	return routesPack.map((route): JSX.Element => {
		// Debug log shows generated routes
		inDev(() =>
			console.log(
				"routesCrawler routes",
				parentPath ? parentPath + route.path : route.path,
			),
		);
		return route.children ? (
			<React.Fragment key={v4()}>
				{routesCrawler(parentPath ?? "" + route.path, route.children)}
				<Route
					key={v4()}
					path={parentPath ? parentPath + route.path : route.path}
					component={route.component}
				/>
			</React.Fragment>
		) : (
			<Route
				key={v4()}
				path={parentPath ? parentPath + route.path : route.path}
				component={route.component}
			/>
		);
	});
};

/**
 * This component is used to generate Switch with Routes for given routes object
 */
const SwitchRoutesGenerator = () => {
	return (
		<Switch key={"switch_component"}>
			{routesCrawler()}
			{/* Redirect any unmatched path to /login */}
			<Route path="/">
				<Redirect to="login" />
			</Route>
			{/* This 404 Route will never be reached as the above * path will always match */}
			<Route>
				<>404</>
			</Route>
		</Switch>
	);
};

export default SwitchRoutesGenerator;
