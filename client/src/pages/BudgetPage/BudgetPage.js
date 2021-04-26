import React from 'react'
import axios from 'axios'
import BudgetContext from '../../utils/BudgetContext'
import BudgetForm from '../../components/BudgetForm'

class Budgets extends React.Component{
state = {
    user: '',
    name: '',
    expense: '',
    expAmt: '',
    budgetItems: [0,1,2,3,4,5,6,7,8,9,10],
    budget: '',
    budgets: [],
    inputChange: e => { 
        this.setState({[e.target.name]: e.target.value})
    },
    getBudgets: (item, index, arr) => {
        arr[index] =console.log(item)
    },
    budgetSubmit: e => {
        console.log('submitting names and things')
        e.preventDefault()
        axios.post('/budget', {
            name: this.state.name,
            
        })
        .then(({data}) => {
            let arr = JSON.parse(JSON.stringify(this.state.users))
            arr.push(data)
            this.setState({budgets: arr, name: ''})
        })
    }
}

componentDidMount() {
    axios.get('/budget')
    .then(({data}) => this.setState({ budgets: data}))
  }
  
render() {
    return(
        <BudgetContext.Provider value={this.state}>
            <BudgetForm/>
        </BudgetContext.Provider>
    )
}

}

export default Budgets
