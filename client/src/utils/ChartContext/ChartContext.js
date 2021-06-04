import { createContext } from "react";

const ChartContext = createContext({
	user: "",
	name: "",
	expense: "",
	expAmt: "",
	budget: "",
	budgetItems: [],
    budgets: [],
    data: [],
	chartCon: () => {},
	chartCreation: () => {},
	inputChange: () => {},
	getCharts: () => {},
	updateChart: () => {},
	chartSubmit: () => {},
});

export default ChartContext;
