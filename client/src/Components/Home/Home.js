import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            <h2>Home</h2>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
        </div>
    )
}

export default Home