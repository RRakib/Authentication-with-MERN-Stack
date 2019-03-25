import axios from "axios"
import Thunk from "redux-thunk"
import { SET_USER , USERS_ERROR } from "./types"

export const register = user => dispatch => {
    axios.post("/api/user/register" , user)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
           dispatch({
               type : USERS_ERROR,
               payload: {
                   errors : err.response.data
               }  
           })
        })
}