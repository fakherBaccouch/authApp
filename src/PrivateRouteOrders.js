import React from "react"
import { useHistory, Route, Redirect } from "react-router-dom"
import { useAuth } from "./context/AuthContext"


export default function PrivateRouteOrders({ component: Component, ...rest }) {
  const { currentUser } = useAuth()


  return (
    <Route
      {...rest}
      render={(props) => {

        if (currentUser) { return <Component {...props} /> }
      }}
    ></Route>
  )
}