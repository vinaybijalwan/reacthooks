import React, { useReducer } from 'react'

import { reducer1 } from './reducer1'

const intialStateValue  = {
    username:"",
    password:"",
    formdata:{},
    loggedIn:false,
    error:false   
    
}


export const Login_01 = () => {

 

    const[updatedState, dispatch] = useReducer(reducer1, intialStateValue)



    const handleForm = (e) => {
        e.preventDefault()
        // console.log(username, password)
        // setFromdata({...formdata, username:username, password:password} )
        if(updatedState.username === "vinay" && updatedState.password === "admin"){
            console.log("Success")
            dispatch({type:'SUCCESS'})
            // setLoggedIn(true)
            // setUsername("")
            // setPassword("")
            // setError("")
            
        } 
        else{
            console.log("Error")
            // setError("Invalid")
            dispatch({type:'ERROR'})
            // setUsername("")
            // setPassword("")
        }
    }






  return (
    <>
    {updatedState.loggedIn ? ( 
     <div className="logout">
         <h2>You have Successfully Log in </h2>
         <button onClick={
            () => 
            // setLoggedIn(false)
            dispatch({type:'LOGOUT'})
            
                }>
                Log Out
                </button>
         <div className="main">
             <p>Your User Name is : {updatedState.username}</p>
             <p>Your Password: {updatedState.password}</p>
             
         </div>
         <br/>
     </div>
     )
     :(
     <div>
         <h2>Login Account</h2>
         <br />
         <div>
             <p>{updatedState.error}</p>
         </div>
         <form onSubmit={handleForm} autoComplete='off'>
             <label>
                 User Name: 
                 <input 
                 type='text'
                 name='username'
                 value={updatedState.username}
                 onChange={(e) => dispatch({type:'USERNAME', value:e.target.value})}
                 />
             </label>

             <label>
                 Password : 
                 <input 
                 type='password'
                 name='password'
                 value={updatedState.password}
                 onChange={(e) => dispatch({type:'PASSWORD', value:e.target.value})}
                 />
             </label>
             <button className='btn btn-success' type='submit'>Log In</button>
         </form>
         <br />
         
         
     </div>
     )
     }
 </>
  )
}
