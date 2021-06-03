import React, { useContext } from "react";
import axios from "axios";
import BudgetContext from "../../utils/BudgetContext";
import { DataGrid } from "@material-ui/data-grid";
import {
	randomCreatedDate,
	randomTraderName,
	randomUpdatedDate,
} from "@material-ui/x-grid-data-generator";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function EditRowModelControlGrid() {
	const [editRowsModel, setEditRowsModel] = React.useState({});
	const { budgets } = useContext(BudgetContext);

	const handleEditRowModelChange = React.useCallback((params) => {
		setEditRowsModel(params.model);
	}, []);

	const rows = budgets.map((row) => {
		const { _id, ...rest } = row;
		console.log(row);
		return { id: _id, ...rest };
	});

	return (
		console.log(budgets),
		(
			<div style={{ width: "85%" }}>
				<code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
				<div style={{ height: 750, width: "60%" }}>
					<DataGrid
						rows={rows}
						columns={columns}
						editRowsModel={editRowsModel}
						onEditRowModelChange={handleEditRowModelChange}
					/>
				</div>
			</div>
		)
	);
}

const columns = [
	{
		field: "id",
		headerName: "id",
		width: 180,
		editable: false,
	},
	{
		field: "name",
		headerName: "Name",
		width: 180,
		editable: true,
	},
	{
		field: "expense",
		headerName: "Expense",
		width: 180,
		editable: true,
	},
	{
		field: "expAmt",
		headerName: "ExpAmt",
		width: 125,
		type: "number",
		editable: true,
	}
	];
