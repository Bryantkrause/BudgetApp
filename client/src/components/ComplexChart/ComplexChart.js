import React from "react";
import axios from "axios";
import {
	XAxis,
	YAxis,
	FlexibleWidthXYPlot,
	HorizontalGridLines,
	LineSeries,
	VerticalRectSeries,
	DiscreteColorLegend,
	Crosshair,
} from "react-vis";
import BudgetContext from "../../utils/BudgetContext";
/**
 * Get the array of x and y pairs.
 * The function tries to avoid too large changes of the chart.
 * @param {number} total Total number of values.
 * @returns {Array} Array of data.
 * @private
 */
function getRandomSeriesData(total) {
	const result = [];
	let lastY = Math.random() * 40 - 20;
	let y;
	const firstY = lastY;
	for (let i = 0; i < Math.max(total, 3); i++) {
		y = Math.random() * firstY - firstY / 2 + lastY;
		result.push({
			left: i,
			top: y,
		});
		lastY = y;
	}
	return result;
}

export default class ComplexChart extends React.Component {
	constructor(props) {
		super(props);
		const totalValues = Math.random() * 50;
		this.state = {
			crosshairValues: [],
			budgets: [],
			series: [
				{
					title: "Apples",
					disabled: false,
					data: getRandomSeriesData(totalValues),
				},
				{
					title: "Bananas",
					disabled: false,
					data: getRandomSeriesData(totalValues),
				},
			],
		};
		this._nearestXHandler = this._nearestXHandler.bind(this);
		this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
		this._updateButtonClicked = this._updateButtonClicked.bind(this);
		this._legendClickHandler = this._legendClickHandler.bind(this);
		this._formatCrosshairItems = this._formatCrosshairItems.bind(this);
		this._formatCrosshairTitle = this._formatCrosshairTitle.bind(this);
		this._columns = this._columns.bind(this);
	}

	_updateButtonClicked() {
		const { series } = this.state;
		const totalValues = Math.random() * 50;
		series.forEach((s) => {
			s.data = getRandomSeriesData(totalValues);
		});
		this.setState({ series });
	}
	componentDidMount() {
		axios.get("/budget").then(({ data }) => this.setState({ budgets: data }));
	}

	/**
	 * Event handler for onNearestX.
	 * @param {Object} value Selected value.
	 * @param {number} index Index of the series.
	 * @private
	 */
	_nearestXHandler(value, { index }) {
		const { series } = this.state;
		const { budgets } = this.state;
		console.log(budgets);
		this.setState({
			crosshairValues: series.map((s) => s.data[index]),
		});
	}

	/**
	 * Event handler for onMouseLeave.
	 * @private
	 */
	_mouseLeaveHandler() {
		this.setState({ crosshairValues: [] });
	}

	/**
	 * Format the title line of the crosshair.
	 * @param {Array} values Array of values.
	 * @returns {Object} The caption and the value of the title.
	 * @private
	 */
	_formatCrosshairTitle(values) {
		return {
			title: "X",
			value: values[0].left,
		};
	}

	/**
	 * A callback to format the crosshair items.
	 * @param {Object} values Array of values.
	 * @returns {Array<Object>} Array of objects with titles and values.
	 * @private
	 */
	_formatCrosshairItems(values) {
		const { series } = this.state;
		return values.map((v, i) => {
			return {
				title: series[i].title,
				value: v.top,
			};
		});
	}

	_columns(column) {
		const { expAmt, ...rest } = column;

		return { y: expAmt, x: this.state.budgets.indexOf, ...rest };
	}
	/**
	 * Click handler for the legend.
	 * @param {Object} item Clicked item of the legend.
	 * @param {number} i Index of the legend.
	 * @private
	 */
	_legendClickHandler(item, i) {
		const { series } = this.state;
		series[i].disabled = !series[i].disabled;
		this.setState({ series });
	}

	render() {
		const { series, crosshairValues, budgets } = this.state;
		return (
			console.log(budgets),
			(
				<div className="example-with-click-me">
					<div className="legend">
						<DiscreteColorLegend
							onItemClick={this._legendClickHandler}
							width={180}
							items={series}
						/>
					</div>

					<div className="chart">
						<FlexibleWidthXYPlot
							animation
							getX={(d) => d.left}
							getY={(d) => d.top}
							onMouseLeave={this._mouseLeaveHandler}
							xDomain={[-0.5, budgets.length - 1]}
							height={300}
						>
							<HorizontalGridLines />
							<YAxis
								className="cool-custom-name"
								tickSizeInner={0}
								tickSizeOuter={8}
							/>
							<XAxis
								className="even-cooler-custom-name"
								tickSizeInner={0}
								tickSizeOuter={8}
							/>
							<VerticalRectSeries
								data={series[1].data}
								curve="curveMonotoneX"
								{...(series[1].disabled ? { opacity: 0.2 } : null)}
							/>
							<LineSeries data={budgets.expAmt} curve="curveMonotoneX" />
							<Crosshair
								itemsFormat={this._formatCrosshairItems}
								titleFormat={this._formatCrosshairTitle}
								values={crosshairValues}
							/>
						</FlexibleWidthXYPlot>
					</div>

					<button className="click-me" onClick={this._updateButtonClicked}>
						Click to update
					</button>
				</div>
			)
		);
	}
}
