
// top version up to row 51 is the updated version that changes from a class component to a function
import React, { useState } from "react";
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

const labelData = greenData.map((d, idx) => ({
	x: d.x,
	y: Math.max(greenData[idx].y, blueData[idx].y),
}));

export default function BarChart () {

		return (
            <div>

				<XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
					<VerticalGridLines />
					<HorizontalGridLines />
					<XAxis />
					<YAxis />
					<VerticalBarSeries className="vertical-bar-series-example" data={greenData} />
					<VerticalBarSeries data={blueData} />
					<LabelSeries data={labelData} getLabel={(d) => d.x} />
				</XYPlot>
			</div>
		);
	
}

// back up and junk
import React from "react";
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

const labelData = greenData.map((d, idx) => ({
	x: d.x,
	y: Math.max(greenData[idx].y, blueData[idx].y),
}));

export default class BarChart extends React.Component {
	state = {
		useCanvas: false,
	};

	render() {
		const { useCanvas } = this.state;
		const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS";
		const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
		return (
			<div>
				<Button
					onClick={() => this.setState({ useCanvas: !useCanvas })}
					buttonContent={content}
				>
					click me
				</Button>
				<XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
					<VerticalGridLines />
					<HorizontalGridLines />
					<XAxis />
					<YAxis />
					<BarSeries className="vertical-bar-series-example" data={greenData} />
					<BarSeries data={blueData} />
					<LabelSeries data={labelData} getLabel={(d) => d.x} />
				</XYPlot>
			</div>
		);
	}
}