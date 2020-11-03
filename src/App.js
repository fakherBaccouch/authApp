import React from 'react';
import './App.css';
import SignIn from './components/signin'
import Admin from './components/admin'
import PrivateRoute from "./PrivateRoute"
import PrivateRouteOrders from "./PrivateRouteOrders"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from './context/AuthContext'
import ProtectedRouteAdminDash from './adminDash';
import OrdersPush from './orders.js'
import SignUp from './components/signup.js'
import Home from "./components/home"

function App() {
  return (
    <Router>

      <AuthProvider>
        <Switch>
          <Route path='/' exact component={Home} />
        
          <PrivateRoute path="/signup" exact component={SignUp} />
          <PrivateRouteOrders path="/orders" exact component={OrdersPush} />
          <PrivateRoute path="/signin" exact component={SignIn} />
          <ProtectedRouteAdminDash path="/admin" component={Admin} />


        </Switch>
     </AuthProvider>
    </Router>


  );
}

export default App;
