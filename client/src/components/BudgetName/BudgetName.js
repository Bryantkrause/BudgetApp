import React from 'react'

import BudgetContext from '../../utils/BudgetContext'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BudgetName = () => {
    return(
        <BudgetContext.Consumer>
    
            {
    ({BudgetSubmit, inputChange, name, expense, expAmt }) =>(
    
       
          <Form>
    <FormGroup>
    <Label for="exampleText">Budget Name</Label>
    <Input onChange={inputChange} value={name} type="textarea" name="name" id="exampleText" />
    </FormGroup>
    <Button id="submit" onClick={BudgetSubmit}>Submit2</Button>
      </Form>
        
        
    )
            }
    
    
        </BudgetContext.Consumer>
    )
    }
    export default BudgetName