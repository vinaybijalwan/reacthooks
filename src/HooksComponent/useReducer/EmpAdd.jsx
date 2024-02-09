import React, { useReducer } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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


export const EmpAdd = () => {

    const [updateState, dispatch] = useReducer(reducer2, initialState)



    const handleForm = (e) => {
        e.preventDefault()  //prevent from form refresh
        dispatch({type:'SUBMITT'})
        console.log(updateState)
    }


  return (
    <>
        <div>
            <Container>
                <form onSubmit={handleForm}>
                    <Row>
                        <Col>
                            <label>
                                Employee Name: 
                                <input
                                type='text'
                                name='emp_name'
                                value={updateState.emp_name}
                                onChange={(e) => dispatch({type:'EMP_NAME', value:e.target.value})}
                                />
                            </label>
                        </Col>

                        <Col>
                            <label>
                                Employee last Name: 
                                <input
                                type='text'
                                name='emp_lname'
                                value={updateState.emp_lname}
                                onChange={(e) => dispatch({type:'EMP_LNAME', value:e.target.value})}
                                />
                            </label>
                        </Col>

                        <Col>
                            <label>
                                Employee Email: 
                                <input
                                type='text'
                                name='emp_email'
                                value={updateState.emp_email}
                                onChange={(e) => dispatch({type:'EMP_EMAIL', value:e.target.value})}
                                />
                            </label>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <label>
                                Employee DOB: 
                                <input
                                type='date'
                                name='emp_dob'
                                value={updateState.emp_dob}
                                onChange={(e) => dispatch({type:'EMP_DOB', value:e.target.value})}
                                />
                            </label>
                        </Col>

                        <Col>
                            <label>
                                Employee Salary: 
                                <input
                                type='text'
                                name='emp_salary'
                                value={updateState.emp_salary}
                                onChange={(e) => dispatch({type:'EMP_SALARY', value:e.target.value})}
                                />
                            </label>
                        </Col>
                            
                        <Col>
                            <label>
                                Employee Designation: 
                                <input
                                type='text'
                                name='emp_designation'
                                value={updateState.emp_designation}
                                onChange={(e) => dispatch({type:'EMP_DESIGNATION', value:e.target.value})}
                                />
                            </label>
                        </Col>
                        
                    </Row>

                    <button type='submit'>Submit</button>
                </form>
            </Container>
        </div>
    </>
  )
}
