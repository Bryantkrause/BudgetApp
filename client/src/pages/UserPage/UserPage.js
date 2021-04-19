import React from 'react'
import axios from 'axios'
import UserContext from '../../utils/UserContext'
import UserForm from '../../components/UserForm'

class Users extends React.Component{
state = {
    name: '',
    names: [],
    inputChange: e => { 
        this.setState({[e.target.name]: e.target.value})
    },
    NameSubmit: e => {
        e.preventDefault()
        axios.post('/user', {
            name: this.state.name,
        })
        .then(({data}) => {
            let arr = JSON.parse(JSON.stringify(this.state.name))
            arr.push(data)
            this.setState({names: arr, name: ''})
        })
    }
}

componentDidMount() {
    axios.get('/user')
    .then(({data}) => this.setState({ users: data}))
  }
  
render() {
    return(
        <UserContext.Provider value={this.state}>
            <UserForm/>
        </UserContext.Provider>
    )
}

}

export default Users
