import Home from "../Home/Home"
import React,{Component} from "react"

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
    }


    render(){
        return(
            <div>
                <Home nav="nav"/>
                <h2 className="pt-3 pb-3">Register</h2>
                <form>
                    <div className="form-group">
                        <input
                            name = "name"
                            type = "text"
                            className="form-control"
                            value = {this.state.name}
                            onChange = {this.handleChange}
                            placeholder = "Please Enter Your Name..."
                        />
                        <br />
                        <input 
                            name = "email"
                            type = "email"
                            className="form-control"
                            value = {this.state.email}
                            onChange = {this.handleChange}
                            placeholder = "Please Enter Your email..."
                        />
                        <br />
                        <input 
                            type = "password"
                            name = "password1"
                            className="form-control"
                            value = {this.state.password1}
                            onChange = {this.handleChange}
                            placeholder = "Please Enter Your Password..."
                        />
                        <br />
                        <input
                            type = "password" 
                            name = "password2"
                            className="form-control"
                            value = {this.state.password2}
                            onChange = {this.handleChange}
                            placeholder = "Please Enter Your Password..."
                        />
                        <br />
                        <button className="btn btn-primary" onSubmit={this.handleSubmit}>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register