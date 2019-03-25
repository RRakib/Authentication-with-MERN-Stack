import axios from "axios"
import Thunk from "redux-thunk"
import { SET_USER , USERS_ERROR } from "./types"

export const register = (user , history) => dispatch => {
    axios.post("/api/user/register" , user)
        .then(res => {
            dispatch({
                type : USERS_ERROR,
                payload: {
                    errors : {}
                }  
            })
            console.log(res)
            history.push("/Login")
        })
        .catch(err => {
            console.log(err.response)
           dispatch({
               type : USERS_ERROR,
               payload: {
                    errors : err.response? err.response.data : {}
                }  
           })
        })
}