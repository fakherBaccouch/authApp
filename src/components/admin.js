import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import {useAuth} from "../context/AuthContext"

const Admin = ()=>{
    const [error, setError] = useState("")
    const {  logout } = useAuth()
    const history = useHistory()
    async function handleLogout() {
        
    
        
         logout()
          history.push("/signin")
        
      }
    return (
        <div>
            welcome to admin Doashboard
            <button onClick={handleLogout}>LOG OUT</button>
        </div>
    )
}
export default Admin