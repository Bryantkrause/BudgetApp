import { createContext} from 'react'

const BudgetContext = createContext({
    user: '',
    name: '',
    expense: '',
    expAmt: '',
    budget: '',
    budgetItems: [],
    budgets: [],
    budgetCreation: () => {},
    inputChange: () => {},
    
    getBudgets: () => {},
    budgetSubmit: () => {}
    })

export default BudgetContext