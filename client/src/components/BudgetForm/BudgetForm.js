import React from 'react'

import BudgetContext from '../../utils/BudgetContext'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BudgetForm = () => {
return(
    <BudgetContext.Consumer>

        {
({budgetItems}) =>(

  budgetItems.map( ({BudgetSubmit, inputChange, name, expense, expAmt }, index, budget) => {
    return (
      <Form>
<FormGroup>
<Label for="exampleText">Expense Name</Label>
<Input onChange={inputChange} value={expense} type="textarea" name="expense" id="exampleText" />
<Label for="exampleText">Expense Amount</Label>
<Input onChange={inputChange} value={expAmt} type="number" name="expamt" id="exampleText" />
</FormGroup>
  </Form>
    )
  })       
)
        }


    </BudgetContext.Consumer>
)
}

export default BudgetForm