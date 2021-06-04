import React from "react";
import { XYPlot, LineSeriesCanvas, MarkSeriesCanvas } from "react-vis";
const k = 100;
const data = Array(k)
	.fill(0)
	.map((n, x) => ({ x, y: x % 2 ? 180 : -180 }));

export default class LineChart extends React.Component {
	state = {
		nearestXY: data[0],
	};

	render() {
		const { nearestXY } = this.state;
		return (
			<XYPlot
				width={500}
				height={300}
				domainX={[0, 2 * k]}
				domainY={[-200, 200]}
			>
				{
					<LineSeriesCanvas
						onNearestXY={(point) => this.setState({ nearestXY: point })}
						data={data}
					/>
				}
				{
					<MarkSeriesCanvas
						size={5}
						fill={"yellow"}
						stroke={"red"}
						style={{ pointerEvents: "none" }}
						data={[nearestXY]}
					/>
				}
			</XYPlot>
		);
	}
}
