import React, { useState } from 'react'

export const FromuseState = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

  return (
    <div>
        <form>
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
                Email : 
                <input 
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
        </form>
    </div>
  )
}
