import React, { useContext, useState, useEffect } from "react"
import instance from './axios-orders.js'
import {  useHistory } from "react-router-dom"
import {useAuth} from "./context/AuthContext"
import LinearIndeterminate from './spinner.js'


const OrdersPush=()=>{
    const {currentUser, logout} = useAuth()
    const [orders,setorders] = useState()
    const [PostRequist,setPostRequist ]=useState(false)
    const [Loading,setLoading] = useState(true)
    const history = useHistory()

    const post =()=>{
 
     instance.post('/orders.json',{ email:currentUser.email,id:currentUser.uid}).then(()=>setPostRequist(!PostRequist))
    console.log("post")

  
    }
 const delet=(orderId)=>{
  instance.delete("/orders/" + orderId + ".json").then(()=>setPostRequist(!PostRequist))
  console.log("delete")
}

    useEffect( 
   
      async () => {
        await instance.get('/orders.json').then((r)=>setorders(r.data))
        setLoading(false)
     }
       
    
    ,[PostRequist])









    async function handleLogout() {
       
    
        try {
          
          await logout()
          history.push("/signin")
        } catch {
          
        }
      }

       if(Loading){
         return (
           <div><LinearIndeterminate/></div>
         )
       }else{
         return (
          <div>
          {orders && currentUser&& Object.keys(orders).map(key=>{if(orders[key].email === currentUser.email){return  <p>{orders[key].email}<button onClick={()=>delet(key)}> X</button></p>}})}
<button onClick={post}>POST</button>
<button onClick={handleLogout}>LOG OUT</button>


        </div>
         )
       }
    }

export default OrdersPush
