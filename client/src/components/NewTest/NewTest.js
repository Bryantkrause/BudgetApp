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
	const { budgets, actual, series, updateSeries } = useContext(BudgetContext);
	console.log(budgets, actual);

	const budgetable = budgets.map((column) => {
		const { expAmt, expense, ...rest } = column;
		console.log(column);
		return { y: expAmt, x: expense, ...rest };
	});

	const actuals = actual.map((column) => {
		const { expAmt, expense, ...rest } = column;
		console.log(column);
		return { y: expAmt, x: expense, ...rest };
	});
	console.log(actuals);

	
	return (
		<div>
			<XYPlot xType="ordinal" width={1000} height={500} xDistance={100}>
				<HorizontalGridLines />
				<XAxis />
				<YAxis />

				<VerticalRectSeries data={actuals} curve="curveMonotoneX" />
				<LineSeries data={budgetable} curve="curveMonotoneX" />
			</XYPlot>
		</div>
	);
};

export default NewTest;
