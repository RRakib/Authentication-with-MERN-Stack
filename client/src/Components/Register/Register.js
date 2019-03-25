import Home from "../Home/Home"
import { connect } from "react-redux"
import React,{Component} from "react"
import { Link } from "react-router-dom"
import {register} from "../../Store/Actions/authAction"

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            password1 : "",
            password2 : "",
            error: {}
        }
    }

    handleChange = (e) => {
        const { name , value } = e.target; 
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {name , email , password1 , password2} = this.state
        this.props.register({
            name ,
            email ,
            password1 , 
            password2
        })
    }


    render(){
        const {name , email , password1 , password2} = this.props.state.auth.errors;
        return(
            <div>
                <Home nav="nav"/>
                <div className="form-group col-md-7">
                    <h2 className="pt-3 pb-3">Register</h2>
                    <form onSubmit={this.handleSubmit}>
                            <p className="text-danger ml-1"> {name}</p>
                            <input
                                name = "name"
                                type = "text"
                                className="form-control"
                                value = {this.state.name}
                                onChange = {this.handleChange}
                                placeholder = "Please Enter Your Name..."
                            /> 
                            <br />
                            <p className="text-danger ml-1"> {email}</p>
                            <input 
                                name = "email"
                                type = "email"
                                className="form-control"
                                value = {this.state.email}
                                onChange = {this.handleChange}
                                placeholder = "Please Enter Your email..."
                            />
                            <br />
                            <p className="text-danger ml-1"> {password1}</p>
                            <input 
                                type = "password"
                                name = "password1"
                                className="form-control"
                                value = {this.state.password1}
                                onChange = {this.handleChange}
                                placeholder = "Please Enter Your Password..."
                            />
                            <br />
                            <p className="text-danger ml-1"> {password2}</p>
                            <input
                                type = "password" 
                                name = "password2"
                                className="form-control"
                                value = {this.state.password2}
                                onChange = {this.handleChange}
                                placeholder = "Please Enter Your Password..."
                            />
                            <br />
                            <button className="btn btn-primary mr-2" >Register</button>
                            Already Have An Accout? <Link to="/Login">Login</Link>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = (state) =>{
    return{
        state
    }
}



const mapDispatchToProps = (dispatch) =>{
    return{
        register : (user) => dispatch(register(user))
    }
}

export default connect(mapStoreToProps , mapDispatchToProps)(Register)