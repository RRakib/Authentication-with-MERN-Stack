import Home from "../Home/Home"
import React,{Component} from "react"

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
    }


    render(){
        return(
             <div>
                <Home nav="nav"/>
                <h2 className="pt-3 pb-3">Log-IN</h2>
                <form>
                    <div className="form-group">
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
                            name = "password"
                            className="form-control"
                            value = {this.state.password1}
                            onChange = {this.handleChange}
                            placeholder = "Please Enter Your Password..."
                        />
                        <br />
                        <button className="btn btn-primary" onSubmit={this.handleSubmit}>Login</button>
                    </div>
                </form>
            </div>
    )
}
}

export default Login