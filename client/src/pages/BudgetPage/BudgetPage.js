import React from 'react'
import axios from 'axios'
import BudgetContext from '../../utils/BudgetContext'
import BudgetForm from '../../components/BudgetForm'
import BudgetAdj from '../../components/BudgetAdj'


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
    BudgetCon: () => {
        axios.get('/budget')
    .then(({data}) => this.setState({ budgets: data}))
    },
    budgetSubmit: e => {
        console.log('submitting names and things')
        e.preventDefault()
        axios.post('/budget', {
            name: this.state.name,
            expense: this.state.expense,
            expAmt: this.state.expAmt,
        })
        .then(({data}) => {
            let arr = JSON.parse(JSON.stringify(this.state.budgets))
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
            <BudgetAdj/>
        </BudgetContext.Provider>
    )
}

}

export default Budgets
