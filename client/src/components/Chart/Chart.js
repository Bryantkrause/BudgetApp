import React, { Component } from "react";
import {
	XYPlot,
	LineSeries,
	VerticalGridLines,
	HorizontalGridLines,
	XAxis,
	YAxis
} from "react-vis";

class Chart extends Component {
	render() {
		const data = [
			{ x: 0, y: 1 },
			{ x: 1, y: 2 },
			{ x: 2, y: 3 },
			{ x: 3, y: 5 },
			{ x: 4, y: 7 },
			{ x: 5, y: 7 },
			{ x: 6, y: 9 },
			{ x: 7, y: 12 },
			{ x: 8, y: 113 },
			{ x: 9, y: 4 },
		];
		return (
			<div className="App">
				<XYPlot height={500} width={600}>
					<LineSeries data={data} />
					<XAxis />
					<YAxis />
					<VerticalGridLines />
					<HorizontalGridLines />
				</XYPlot>
			</div>
		);
	}
}

export default Chart;
