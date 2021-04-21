import { createContext} from 'react'

const UserContext = createContext({
user: '',
name: '',
users: [],
inputChange: () => {},
getNames: () => {},
nameSubmit: () => {}
})

export default UserContext