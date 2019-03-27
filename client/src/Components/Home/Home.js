import {connect} from "react-redux"
import React , {Component} from "react"
import { Link } from "react-router-dom"

class Home extends Component{
    render(){
        console.log(this.props)
    return(
        <div>
            <nav className={this.props.nav}>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Login" className="nav-link">Login</Link>
                <Link to="/Register" className="nav-link">Register</Link>
                {this.props.isAuthenticate && <Link to="/Register" className="nav-link">Logout</Link>}
            </nav>
            {
                this.props.isAuthenticate ? (<div>
                    <h2>Welcome {this.props.user.name}</h2>
                    <p>{this.props.user.email}</p>
                    </div>) : null
            }
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return state.auth
}

export default connect(mapStateToProps)(Home)