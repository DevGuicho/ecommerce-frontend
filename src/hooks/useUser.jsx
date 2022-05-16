import { useContext } from 'react'
import UserContext from '../state/user/UserContext'

const useUser = () => {
  const userContext = useContext(UserContext)

  return {
    name: userContext.name,
    lastname: userContext.lastname,
    email: userContext.email,
    password: userContext.password,
    isAuth: userContext.isAuth,
    login: userContext.login,
    logout: userContext.logout
  }
}

export default useUser
