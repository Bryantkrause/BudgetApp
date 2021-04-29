
import React, { useContext } from 'react'
import BudgetContext from '../../utils/BudgetContext'
import { DataGrid } from '@material-ui/data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@material-ui/x-grid-data-generator';

export default function EditRowModelControlGrid() {
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const {budgetItems} = useContext(BudgetContext)

  const handleEditRowModelChange = React.useCallback((params) => {
    setEditRowsModel(params.model);
  }, []);

  return (
      console.log(budgetItems),
    <div style={{ width: '85%' }}>
      <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          editRowsModel={editRowsModel}
          onEditRowModelChange={handleEditRowModelChange}
        />
      </div>
    </div>
  );
}

const columns = [
  { field: 'Expense', headerName: 'Expense', width: 180, editable: true },
  { field: 'ExpAmt', headerName: 'ExpAmt', width: 125, type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    Expense: randomTraderName(),
    ExpAmt: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    Expense: randomTraderName(),
    ExpAmt: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    Expense: randomTraderName(),
    ExpAmt: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    Expense: randomTraderName(),
    ExpAmt: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    Expense: randomTraderName(),
    ExpAmt: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];