import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Users from "./pages/UserPage";
import Budgets from "./pages/BudgetPage";
import ChartPage from "./pages/ChartPage";

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Users />
					</Route>
					<Route exact path="/Budget">
						<Budgets />
					</Route>
					<Route exact path="/Chart">
						<ChartPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
