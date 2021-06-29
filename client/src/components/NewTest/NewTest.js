import React, { useEffect, useState, useContext } from "react";
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalBarSeries,
	VerticalBarSeriesCanvas,
	LabelSeries,
	VerticalRectSeries,
	LineSeries,
	DiscreteColorLegend,
	Crosshair,
} from "react-vis";
import BudgetContext from "../../utils/BudgetContext";

const NewTest = () => {
	const {
		budgets,
		actual,
		series,
		updateSeries,
		budgetable,
		actuals,
		seriable,
		setSeries,
	} = useContext(BudgetContext);
	console.log(budgetable, actuals);
	console.log(series);
	// const budgetable = budgets.map((column) => {
	// 	const { expAmt, expense, ...rest } = column;
	// 	console.log(column);
	// 	return { y: expAmt, x: expense, ...rest };
	// });

	// const actuals = actual.map((column) => {
	// 	const { expAmt, expense, ...rest } = column;
	// 	console.log(column);
	// 	return { y: expAmt, x: expense, ...rest };
	// });

	// const seriable = series.map((x) => {
	// 	const { budgets, actual, ...rest } = x;
	// 	console.log(x);
	// 	series.push(x);
	// 	setbudgetState({...budgetState, series})
	// });
	// console.log(setSeries());

	return (
		<div>
			<XYPlot xType="ordinal" width={1000} height={500} xDistance={100}>
				<HorizontalGridLines />
				<XAxis />
				<YAxis />
				<Crosshair data={actuals} />
				<VerticalRectSeries data={actuals} curve="curveMonotoneX" />
				<LineSeries data={budgetable} curve="curveMonotoneX" />
			</XYPlot>
			<button onClick={setSeries}> click me</button>
		</div>
	);
};

export default NewTest;
