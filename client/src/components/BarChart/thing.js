import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalBarSeries,
	VerticalBarSeriesCanvas,
	LabelSeries,
	DiscreteColorLegend,
	Crosshair,
} from "react-vis";
import BudgetContext from "../../utils/BudgetContext";

const greenData = [
	{ x: "A", y: 10 },
	{ x: "B", y: 5 },
	{ x: "C", y: 15 },
];

const blueData = [
	{ x: "A", y: 12 },
	{ x: "B", y: 2 },
	{ x: "C", y: 11 },
];

/**
 * Event handler for onNearestX.
 * @param {Object} value Selected value.
 * @param {number} index Index of the series.
 * @private
 */

const labelData = greenData.map((d, idx) => ({
	x: d.x,
	y: Math.max(greenData[idx].y, blueData[idx].y),
}));

export default function BarChart() {
	const { budgets, series } = useContext(BudgetContext);
	console.log(budgets);

	const columns = budgets.map((column) => {
		const { expAmt, ...rest } = column;
		console.log(column);
		return { y: expAmt, x: budgets.indexOf, ...rest };
	});

	const data2 = budgets.map((column) => {
		const { timestamps, ...rest } = column;
		console.log(column);
		return { y: timestamps, x: budgets.indexOf, ...rest };
	});

	return (
		<div>
			<XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis />
				<YAxis />
				<VerticalBarSeries
					className="vertical-bar-series-example"
					data={columns}
				/>
				<VerticalBarSeries data={blueData} />
				<LabelSeries data={labelData} getLabel={(d) => d.x} />
			</XYPlot>
		</div>
	);
}


	const columns = this.state.budgets.map((column) => {
		const { expAmt, ...rest } = column;
		console.log(column);
		return { y: expAmt, x: this.state.budgets.indexOf, ...rest };
	});