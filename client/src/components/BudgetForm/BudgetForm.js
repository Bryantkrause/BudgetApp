import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import BudgetContext from "../../utils/BudgetContext";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function BudgetForm() {
	const classes = useStyles();

	return (
		<BudgetContext.Consumer>
			{({ inputChange, budgetSubmit, name, expense, expAmt }) => (
				<form className={classes.root} noValidate autoComplete="off">
					<TextField
						id="standard-basic"
						label="Budget Name"
						variant="outlined"
						onChange={inputChange}
						name="name"
						value={name}
					/>
					<TextField
						id="filled-basic"
						label="Expense Name"
						variant="outlined"
						onChange={inputChange}
						name="expense"
						value={expense}
					/>
					<TextField
						id="outlined-basic"
						label="Expense Amount"
						variant="outlined"
						onChange={inputChange}
						name="expAmt"
						value={expAmt}
					/>
					<Button id="submit" onClick={budgetSubmit}>
						Submit2
					</Button>
				</form>
			)}
		</BudgetContext.Consumer>
	);
}
