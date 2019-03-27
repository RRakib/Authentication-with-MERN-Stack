import {USERS_ERROR , SET_USER} from "../Actions/types"

const init = {
    user: {},
    errors: {},
    isAuthenticate : false
}

const authReducer = (state = init , action) => {
    switch(action.type) {
        case SET_USER:{
            return {
                user : action.payload.user,
                isAuthenticate : Object.keys(action.payload.user).length !== 0,
                errors : {},
            }
        }
        case USERS_ERROR: {
            return{
                ...state,
                errors: action.payload.errors
            }
        }
        default: return state
    }
}

export default authReducer;