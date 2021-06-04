import { createContext } from "react";

const BudgetContext = createContext({
	user: "",
	name: "",
	expense: "",
	expAmt: "",
	budget: "",
	series: "",
	budgetItems: [],
	crosshairValues: [],
	budgets: [],
	BudgetCon: () => {},
	budgetCreation: () => {},
	inputChange: () => {},
	getBudgets: () => {},
	updateBudget: () => {},
	budgetSubmit: () => {},
});

export default BudgetContext;
