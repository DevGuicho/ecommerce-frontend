import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useUser from '../hooks/useUser'

const PublicRoute = ({ children }) => {
  const { isAuth } = useUser()
  const location = useLocation()

  if (isAuth) return <Navigate to='/shop' state={{ from: location }} replace />

  return children
}

export default PublicRoute
