

export const reducer1 = (state, action) => {
    switch(action.type){
        case "SUCCESS":
            console.log("data to submitted")
            console.log(state.formdata)
            return {
                ...state,
                loggedIn:true,
                username:'',
                password:''
            }
        
        case "ERROR":
            return {
                ...state,
                error:"invalid"
            }   
    
        case "LOGOUT":
            return {
                ...state,
                error:false,
                loggedIn:false
            }
        case "USERNAME":
            return {
                ...state,
                username:action.value
            }
        case "PASSWORD":
            return {
                ...state,
                password:action.value
            }
            
    }
}