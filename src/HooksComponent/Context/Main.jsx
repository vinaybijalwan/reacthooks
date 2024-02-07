import React from 'react'
import { Context } from './Context';


export const Main = () => {
    const value = 'My Context Value';
    

  return (
    <div>
        <Context.Provider value={value}>

        </Context.Provider>
    </div>
  )
}
