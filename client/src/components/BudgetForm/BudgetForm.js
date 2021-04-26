import React from 'react'

import BudgetContext from '../../utils/BudgetContext'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BudgetForm = () => {
return(
    <BudgetContext.Consumer>
        {
({budgetItems, getBudgets}) =>(


  budgetItems.map( ({BudgetSubmit, inputChange, name, expense, expAmt }, index, budget) => {
    console.log("The current iteration is: " + index);
    console.log("The current element is: " + budget);
    console.log("\n");
    return (
      <Form>
      <FormGroup>
<Label for="exampleText">Budget Name</Label>
<Input onChange={inputChange} value={name} type="textarea" name="name" id="exampleText" />
</FormGroup>
<FormGroup>
<Label for="exampleText">Expense Name</Label>
<Input onChange={inputChange} value={expense} type="textarea" name="expense" id="exampleText" />
</FormGroup>
<FormGroup>
<Label for="exampleText">Expense Amount</Label>
<Input onChange={inputChange} value={expAmt} type="number" name="expamt" id="exampleText" />
</FormGroup>
<Button id="submit" onClick={BudgetSubmit}>Submit2</Button>
  </Form>


    )
  })

        
)

        }


    </BudgetContext.Consumer>
)
}

export default BudgetForm