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
	setCrosshairValues: () => {},
	_nearestXhandler: () => {},
	_updateButtonClicked: () => {},
	_formatCrosshairItems: () => {},
	formatCrosshairTitle: () => {},
	_legendClickHandler: () => {},
	setSeries: () => {},
	budgetCreation: () => {},
	inputChange: () => {},
	getBudgets: () => {},
	updateBudget: () => {},
	budgetSubmit: () => {},
});

export default BudgetContext;
