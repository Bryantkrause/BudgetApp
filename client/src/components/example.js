budgetItems.map( ({BudgetSubmit, inputChange, name, expense, expAmt }) => 
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