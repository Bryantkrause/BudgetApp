
import React, { useContext } from 'react'
import axios from 'axios'
import BudgetContext from '../../utils/BudgetContext'
import { DataGrid } from '@material-ui/data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@material-ui/x-grid-data-generator';


 
export default function EditRowModelControlGrid() {
  
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const { budgets} = useContext(BudgetContext)

  const handleEditRowModelChange = React.useCallback((params) => {
    setEditRowsModel(params.model);
  }, []);
  
  const rows = budgets.map((row) => {
    const {_id, ...rest} = row
    console.log(row)
    return {id:_id, ...rest}
    
  })

  return (
    console.log(budgets),
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
  { field: 'id', headerName: 'id', width: 180, editable: false },
  { field: 'expense', headerName: 'Expense', width: 180, editable: true },
  { field: 'expAmt', headerName: 'ExpAmt', width: 125, type: 'number', editable: true },
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

