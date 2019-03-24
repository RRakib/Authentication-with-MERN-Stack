import React from "react"
import { Link } from "react-router-dom"

const Home = (props) => {
    return(
        <div>
            <nav className={props.nav}>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Login" className="nav-link">Login</Link>
                <Link to="/Register" className="nav-link">Register</Link>
            </nav>
        </div>
    )
}

export default Home