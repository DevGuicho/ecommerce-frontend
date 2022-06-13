import { useContext } from 'react'
import UserContext from '../state/user/UserContext'

const useUser = () => {
  const userContext = useContext(UserContext)

  return {
    id: userContext.id,
    name: userContext.name,
    lastname: userContext.lastname,
    email: userContext.email,
    password: userContext.password,
    isAuth: userContext.isAuth,
    login: userContext.login,
    logout: userContext.logout,
    checkToken: userContext.checkToken,
    error: userContext.error
  }
}

export default useUser
