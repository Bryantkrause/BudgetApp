import React from 'react'
import axios from 'axios'
import UserContext from '../../utils/UserContext'
import UserForm from '../../components/UserForm'

class Users extends React.Component{
state = {
    name: '',
    users: [],
    inputChange: e => { 
        this.setState({[e.target.name]: e.target.value})
    },
    NameSubmit: e => {
        console.log('submitting names and things')
        e.preventDefault()
        axios.post('/user', {
            name: this.state.name,
            
        })
        .then(({data}) => {
            window.sessionStorage.setItem("userName", this.state.name)
            let arr = JSON.parse(JSON.stringify(this.state.users))
            arr.push(data)
            this.setState({users: arr, name: ''})
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
