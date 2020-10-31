import React from "react"
import { Route } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

 const ProtectedRouteAdminDash=({ component: Component, ...rest })=> {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser && currentUser.email == "admin@admin.com" ?( console.log(currentUser), <Component {...props} /> ):  console.log('.')
      }}
    >

    </Route>
  )
}
export default ProtectedRouteAdminDash  ;