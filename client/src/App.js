import { connect } from "react-redux"
import React, { Component } from 'react';
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import { BrowserRouter , Route , Switch} from "react-router-dom";

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <div className="container bg-light pb-5">
          <h2 className="text-primary ml-3">Authentication</h2>
          <Switch>
            <Route path="/" exact component={() => <Home nav="nav" />} />
            <Route path="/Login"  component={Login}  />
            <Route path="/Register"  component={Register}  />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}



export default App;
