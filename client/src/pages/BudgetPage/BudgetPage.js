import React from "react";
import axios from "axios";
import BudgetContext from "../../utils/BudgetContext";
import BudgetForm from "../../components/BudgetForm";
import BudgetAdj from "../../components/BudgetAdj";
import NavBar from "../../components/NavBar.js";
import Chart from "../../components/Chart";
import BarChart from "../../components/BarChart";
import ComplexChart from "../../components/ComplexChart";
import LineChart from "../../components/LineChart";
import { Line } from "@nivo/line";

class Budgets extends React.Component {
	state = {
		user: "",
		name: "",
		expense: "",
		expAmt: "",
		crosshairValues: [],
		series: [],
		budgetItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		budget: "",
		budgets: [],
		inputChange: (e) => {
			this.setState({ [e.target.name]: e.target.value });
		},
		getBudgets: (item, index, arr) => {
			arr[index] = console.log(item);
		},
		updateBudget: (e) => {
			console.log(e.target);
		},
		_mouseLeaveHandler() {
			this.setState({ crosshairValues: [] });
		},
		_nearestXHandler(value, { index }) {
			const { series } = this.state;
			this.setState({
				crosshairValues: series.map((s) => s.data[index]),
			});
		},
		_formatCrosshairTitle(values) {
			console.log(values);
			return {
				title: "X",
				value: values[0].left,
			};
		},
		_formatCrosshairItems(values) {
			console.log(values);
			const { series } = this.state;
			return values.map((v, i) => {
				return {
					title: series[i].title,
					value: v.top,
				};
			});
		},
		BudgetCon: () => {
			axios.get("/budget").then(({ data }) => this.setState({ budgets: data }));
		},
		budgetSubmit: (e) => {
			console.log("submitting names and things");
			e.preventDefault();
			axios
				.post("/budget", {
					name: this.state.name,
					expense: this.state.expense,
					expAmt: this.state.expAmt,
				})
				.then(({ data }) => {
					let arr = JSON.parse(JSON.stringify(this.state.budgets));
					arr.push(data);
					this.setState({ budgets: arr, name: "" });
				});
		},
	};

	componentDidMount() {
		axios.get("/budget").then(({ data }) => this.setState({ budgets: data }));
	}

	render() {
		return (
			<BudgetContext.Provider value={this.state}>
				<NavBar />
				<BudgetForm />
				<BudgetAdj />
				<Chart />
				<BarChart />
				<ComplexChart />
				<LineChart />
			</BudgetContext.Provider>
		);
	}
}

export default Budgets;
