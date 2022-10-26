import React from "react";
import {
	BrowserRouter,
	Switch,
	Route
} from "react-router-dom";
// routes
import routes from "./routes";
// component
const AppRoutes = () => {
	return (
			<BrowserRouter >
				<Switch>
					{routes.map((route, i) => {
						return (
							<Route key={i} path={route.layout}>
								<route.component />
							</Route>
						);
					})}
				</Switch>
			</BrowserRouter>
	);
};

export default AppRoutes;