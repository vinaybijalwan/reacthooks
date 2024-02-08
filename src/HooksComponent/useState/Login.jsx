import React, { useState } from 'react'

export const Login = () => {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[formdata, setFromdata] = useState({})
    const[loggedIn, setLoggedIn] = useState(false)
    const[error, setError] = useState(false)


    
                
        
  

const handleForm = (e) => {
    e.preventDefault()
    console.log(username, password)
    setFromdata({...formdata, username:username, password:password} )
    if(username === "vinay" && password === "admin"){
        console.log("Success")
        setLoggedIn(true)
        setUsername("")
        setPassword("")
        setError("")
        
    }
    else{
        console.log("Error")
        setError("Invalid")
        setUsername("")
        setPassword("")
    }
}



  return (
    <>
       {loggedIn ? ( 
        <div className="logout">
            <h2>You have Successfully Log in </h2>
            <button onClick={() => setLoggedIn(false)}>Log Out</button>
            <div className="main">
                <p>Your User Name is : {formdata.username}</p>
                <p>Your Password: {formdata.password}</p>
                
            </div>
            <br/>
        </div>
        )
        :(
        <div>
            <h2>Login Account</h2>
            <br />
            <div>
                <p>{error}</p>
            </div>
            <form onSubmit={handleForm} autoComplete='off'>
                <label>
                    User Name: 
                    <input 
                    type='text'
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label>
                    Password : 
                    <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
