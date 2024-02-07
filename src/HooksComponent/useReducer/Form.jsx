import React, { useReducer } from 'react'
import { reducer } from './reducer';


export const Form = () => {

    const initialState = {
        username: "",
        email: "",
        password: "",
        };

    
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'submit' });
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                User Name: 
                <input 
                type='text'
                name='username'
                value={state.username}
                onChange={(e) => dispatch({ type: 'username', payload: e.target.value })}
                />
            </label>

            <label>
                Email : 
                <input 
                type='text'
                name='email'
                value={state.email}
                onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
                />
            </label>

            <label>
                Password : 
                <input 
                type='password'
                name='password'
                value={state.password}
                onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
