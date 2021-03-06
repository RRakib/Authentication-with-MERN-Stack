import Home from "../Home/Home"
import { connect } from "react-redux"
import React,{Component} from "react"
import { Link } from "react-router-dom"
import { login } from "../../Store/Actions/authAction"

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
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
        const {email , password} = this.state
        this.props.login({email ,password} , this.props.history)
    }


    render(){
        const err = this.props.auth.errors;
        return(
             <div>
                <Home nav="nav"/>
                <div className="form-group col-md-7">
                    <h2 className="pt-3 pb-3">Log-IN</h2>
                    <form onSubmit={this.handleSubmit}>
                    { err && <p className="text-danger ml-1"> {err.email}</p>}
                            <input 
                                name = "email"
                                type = "email"
                                className="form-control"
                                value = {this.state.email}
                                onChange = {this.handleChange}
                                placeholder = "Please Enter Your email..."
                            />
                            <br />
                    { err && <p className="text-danger ml-1"> {err.password}</p>}
                    { err && <p className="text-danger ml-1"> {err.message}</p>}
                            <input 
                                type = "password"
                                name = "password"
                                className="form-control"
                                value = {this.state.password1}
                                onChange = {this.handleChange}
                                placeholder = "Please Enter Your Password..."
                            />
                            <br />
                            <button className="btn btn-primary mr-2">Login</button>
                            Don't Have Any Accout? <Link to="/register">Register</Link>
                    </form>
                </div>
            </div>
    )
}
}

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return{
        login : (user , history) => dispatch(login(user , history))
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(Login)