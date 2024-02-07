


export const reducer = (state, action) => {
    switch(action.type) {
        case "username":
            return {
                ...state,
                username: action.payload
            }
        case "email":
            return {
                ...state,
                email: action.payload
            }
        case "password":
            return {
                ...state,
                password: action.payload
            }
            case "submit":
                // Handle form submission logic, you can send the data to an API, perform validation, etc.
                console.log("Form submitted with data:", state);
                return state;    
        
        default:
            return state;       
        
    }
}