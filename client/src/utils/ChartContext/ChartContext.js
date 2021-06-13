import { createContext } from "react";

const ChartContext = createContext({
	user: "",
	name: "",
	expense: "",
	expAmt: "",
	budget: "",
	budgetItems: [],
	crosshairValues: [],
	budgets: [],
	data: [],
	chartCon: () => {},
	chartCreation: () => {},
	inputChange: () => {},
	getCharts: () => {},
	updateChart: () => {},
	chartSubmit: () => {},
	_nearestXHandler: () => {},
	_mouseLeaveHandler: () => {},
	_updateButtonClicked: () => {},
	_legendClickHandler: () => {},
	_formatCrosshairItems: () => {},
	_formatCrosshairTitle: () => {},
});

export default ChartContext;
