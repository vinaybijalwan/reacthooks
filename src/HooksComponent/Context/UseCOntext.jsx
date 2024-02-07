import React, { useContext } from 'react'
import { Context } from './Context';

//consuming the cotext value
export const UseCOntext = () => {

     const myvalue = useContext(Context)
  return (
    <div>
        <span>{myvalue}</span>
    </div>
  )
}
