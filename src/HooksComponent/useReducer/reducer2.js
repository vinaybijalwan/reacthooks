

export const reducer2 = (state, action) => {
    // console.log(state, action)
    switch(action.type){
        case "EMP_NAME":
            return {
                ...state,
                emp_name:action.value
            }
        case "EMP_LNAME":
            return {
                ...state,
                emp_lname:action.value
            }
        case "EMP_EMAIL":
            return {
                ...state,
                emp_email:action.value
            }
        case "EMP_DOB":
            return {
                ...state,
                emp_dob:action.value
            }
        case "EMP_SALARY":
            return {
                ...state,
                emp_salary:action.value
            }

        case "EMP_DESIGNATION":
            return{
                ...state,
                emp_designation:action.value
            }
        case "EMP_DEPARTMENT":
            return {
                ...state,
                emp_department:action.value
            }
        
        case "SUBMITT":
            return {
                ...state
                
            }
    }
    
}