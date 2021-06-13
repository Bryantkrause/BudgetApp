import React, { useEffect, useState } from "react";
import axios from "axios";
import BudgetContext from "../../utils/BudgetContext";
import BudgetForm from "../../components/BudgetForm";
import BudgetAdj from "../../components/BudgetAdj";
import NavBar from "../../components/NavBar.js";
import Chart from "../../components/Chart";

import ComplexChart from "../../components/ComplexChart";
import LineChart from "../../components/LineChart";

import BudgetAPI from "../../utils/BudgetAPI";

const { getBudget, addBudget, updateBudget, deleteBudget } = BudgetAPI;

const BudgetPage = () => {
	const [budgetState, setBudgetState] = useState({
		user: "",
		name: "",
		expense: "",
		expAmt: "",
		crosshairValues: [],
		series: [],
		budgetItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		budget: "",
		budgets: [],
		crosshairValues: [],
	});

	budgetState.budgetSubmit = (event) => {
		event.preventDefault();
		addBudget({
			name: budgetState.name,
			expense: budgetState.expense,
			expAmt: budgetState.expAmt,
		}).then(({ data }) => {
			let budgets = JSON.parse(JSON.stringify(budgetState.budgets));
			budgets.push(data);
			setBudgetState({ ...budgetState, budgets });
		});
	};

	useEffect(() => {
		getBudget()
			.then(({ data: budgets }) => {
				setBudgetState({ ...budgetState, budgets });
			})
			.catch((e) => console.error(e));
	}, []);
	return (
		<BudgetContext.Provider value={budgetState}>
			<ComplexChart />
		</BudgetContext.Provider>
	);
};

export default BudgetPage;
