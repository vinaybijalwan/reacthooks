import React, { useReducer } from 'react'
import { reducer2 } from './reducer2';


const initialState = {
    emp_name:"",
    emp_lname:"",
    emp_email:"",
    emp_dob:"",
    emp_salary:"",
    emp_designation:"",
    emp_department:"",
    emp_phone:"",
}


export const EmpAdd_02 = () => {

    const [updateState, dispatch] = useReducer(reducer2, initialState)



    const handleForm = (e) => {
        e.preventDefault()  //prevent from form refresh
        dispatch({type:'SUBMITT'})
        console.log(updateState)
        
    }


  return (
    <>  <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4 mb-4">
                <div className="w-full md:w-full px-4 mb-4">
                    <div className="bg-gray-30 min-h-screen flex items-center justify-center">
                        <div className="bg-white p-4 rounded shadow-md w-96">
                            <h2 className="text-2xl font-semibold mb-4">Register Employee</h2>
                            
                            <form onSubmit={handleForm}>
                                <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">Name </label>
                                <input
                                type='text'
                                name='emp_name'
                                value={updateState.emp_name}
                                onChange={(e) => dispatch({type:'EMP_NAME', value:e.target.value})}
                                className='mt-1 p-2 w-full border rounded-md'
                                />

                                </div>

                                <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">Last Name </label>
                                <input
                                type='text'
                                name='emp_lname'
                                value={updateState.emp_lname}
                                onChange={(e) => dispatch({type:'EMP_LNAME', value:e.target.value})}
                                className='mt-1 p-2 w-full border rounded-md'
                                />

                                </div>



                                <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">Email </label>
                                <input
                                type='text'
                                name='emp_email'
                                value={updateState.emp_email}
                                onChange={(e) => dispatch({type:'EMP_EMAIL', value:e.target.value})}
                                className='mt-1 p-2 w-full border rounded-md'
                                />

                                </div>


                                <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">Date of Birth </label>
                                <input
                                type='date'
                                name='emp_dob'
                                value={updateState.emp_dob}
                                onChange={(e) => dispatch({type:'EMP_DOB', value:e.target.value})}
                                className='mt-1 p-2 w-full border rounded-md'
                                />

                                </div>

                                <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">Salary </label>
                                <input
                                type='number'
                                name='emp_salary'
                                value={updateState.emp_salary}
                                onChange={(e) => dispatch({type:'EMP_SALARY', value:e.target.value})}
                                className='mt-1 p-2 w-full border rounded-md'
                                />

                                </div>

                                <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">DESIGNATION </label>
                                <input
                                type='text'
                                name='emp_designationy'
                                value={updateState.emp_designation}
                                onChange={(e) => dispatch({type:'EMP_DESIGNATION', value:e.target.value})}
                                className='mt-1 p-2 w-full border rounded-md'
                                />

                                </div>


                                


                                <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                                Submit
                                </button>

                            </form>

                        </div>
                        
                    </div>
                </div>     
            </div>
        </div>
    </>
  )
}
