import React, { Component } from "react";
import {
	XYPlot,
	LineSeries,
	VerticalGridLines,
	HorizontalGridLines,
} from "react-vis";

class Chart extends Component {
	render() {
		const data = [
			{ x: 0, y: 1 },
			{ x: 1, y: 2 },
			{ x: 2, y: 4 },
			{ x: 3, y: 5 },
			{ x: 4, y: 1 },
			{ x: 10, y: 7 },
			{ x: 6, y: 6 },
			{ x: 7, y: 3 },
			{ x: 8, y: 2 },
			{ x: 9, y: 0 },
		];
		return (
			<div className="App">
				<XYPlot height={500} width={600}>
					<LineSeries data={data} />
					<VerticalGridLines />
					<HorizontalGridLines />
				</XYPlot>
			</div>
		);
	}
}

export default Chart;
