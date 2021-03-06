import React, { useEffect, useState } from "react";
import BudgetContext from "../../utils/BudgetContext";
import BudgetForm from "../../components/BudgetForm";
import BudgetAdj from "../../components/BudgetAdj";
import NavBar from "../../components/NavBar.js";
import Chart from "../../components/Chart";
import NewTest from "../../components/NewTest";
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
		actuals: [],
		actual: [
			{
				name: "life",
				expense: "rent",
				expAmt: "1350",
			},
			{
				name: "life",
				expense: "food",
				expAmt: "1500",
			},
			{
				name: "life",
				expense: "phone",
				expAmt: "170",
			},
			{
				name: "life",
				expense: "electricity",
				expAmt: "75",
			},
		],
		budgetItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		budget: "",
		budgets: [],
	});

	budgetState.budgetable = budgetState.budgets.map((column) => {
		const { expAmt, expense, ...rest } = column;
		return { y: expAmt, x: expense, ...rest };
	});
	budgetState.actuals = budgetState.actual.map((column) => {
		const { expAmt, expense, ...rest } = column;
		return { y: expAmt, x: expense, ...rest };
	});
	// budgetState.setSeries = (x) => {
	// 	let seriable = budgetState.series;
	// 	seriable.push(budgetState.actuals);
	// 	seriable.push(budgetState.budgetable);
	// 	setBudgetState({ ...budgetState, seriable });
	// };

	budgetState.updateBudget = (event) => {
		setBudgetState({ ...budgetState, [event.target.name]: event.target.value });
	};

	budgetState.budgetSubmit = (event) => {
		event.preventDefault();
		addBudget({
			name: budgetState.name,
			expense: budgetState.expense,
			expAmt: budgetState.expAmt,
		}).then(({ data }) => {
			let budgets = JSON.parse(JSON.stringify(budgetState.budgets));
			let actuals = JSON.parse(JSON.stringify(budgetState.budgets));
			budgets.push(data);
			actuals.push(data);
			setBudgetState({ ...budgetState, budgets, actuals });
		});
	};
	budgetState.setSeries = () => {
		let x = budgetState.budgetable;
		budgetState.series.push(x);

		let y = budgetState.actuals;
		budgetState.series.push(y);

		console.log(budgetState.series);
	};

	budgetState.deleteBudget = (id) => {
		deleteBudget(id).then(() => {
			let budgets = JSON.parse(JSON.stringify(budgetState.budgets));
			let budgetUpdated = budgets.filter((budget) => budget._id !== id);
			setBudgetState({ ...budgetState, budgets: budgetUpdated });
		});
	};

	useEffect(() => {
		getBudget()
			.then(({ data: budgets }) => {
				setBudgetState({ ...budgetState, budgets });
			})
			.catch((e) => console.error(e));
	}, []);

	useEffect(() => {
		budgetState.setSeries();
	}, []);
	return (
		<BudgetContext.Provider value={budgetState}>
			<NavBar />
			<ComplexChart />
			<BudgetForm />
			<BudgetAdj />
			<NewTest />
		</BudgetContext.Provider>
	);
};

export default BudgetPage;
