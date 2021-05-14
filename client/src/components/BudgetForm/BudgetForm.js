import React from 'react'

import BudgetContext from '../../utils/BudgetContext'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BudgetForm = () => {
return(
    <BudgetContext.Consumer>

        {
          ({budgetSubmit, inputChange, name, expense, expAmt}) => (
            <Form>
            <FormGroup>
            <Label for="exampleText">Expense Name</Label>
            <Input onChange={inputChange} value={expense} type="textarea" name="expense" id="exampleText" />
            <Label for="exampleText">Expense Amount</Label>
            <Input onChange={inputChange} value={expAmt} type="number" name="expAmt" id="exampleText" />
            </FormGroup>
            <FormGroup>
    <Label for="exampleText">Budget Name</Label>
    <Input onChange={inputChange} value={name} type="textarea" name="name" id="exampleText" />
    </FormGroup>
    <Button id="submit" onClick={budgetSubmit}>Submit2</Button>
            </Form>

          )
        }


    </BudgetContext.Consumer>
)
}

export default BudgetForm