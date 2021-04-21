import React from 'react'

import UserContext from '../../utils/UserContext'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserForm = () => {
return(
    <UserContext.Consumer>
        {
        ({NameSubmit, inputChange, name,}) => (
            <Form>
                <FormGroup>
        <Label for="exampleText">Name</Label>
        <Input onChange={inputChange} value={name} type="textarea" name="name" id="exampleText" />
      </FormGroup>
      <Button id="submit" onClick={NameSubmit}>Submit</Button>
            </Form>
        )
        }
    </UserContext.Consumer>
)
}

export default UserForm