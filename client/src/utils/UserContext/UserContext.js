import { createContext} from 'react'

const UserContext = createContext({
name: '',
names: [],
inputChange: () => {},
getNames: () => {},
nameSubmit: () => {}
})

export default UserContext