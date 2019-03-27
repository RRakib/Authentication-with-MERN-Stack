import axios from "axios"
import Thunk from "redux-thunk"
import JWTDecode from "jwt-decode"
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
           dispatch({
               type : USERS_ERROR,
               payload: {
                    errors : err.response? err.response.data : {}
                }  
           })
        })
}

export const login = (user,history) => dispatch => {
    axios.post("/api/user/login" , user)
        .then(res => {
            let Token = res.data.token;
            let Decode = JWTDecode(Token)
            console.log(Decode)
            localStorage.setItem("auth_token", Token)

            dispatch({
                type: SET_USER,
                payload:{
                    user : Decode
                }
            })

            history.push("/")
        })
        .catch(err => {
            dispatch({
                type : USERS_ERROR,
                payload : {
                    errors : err.response? err.response.data : {}
                }
            })
        })
}