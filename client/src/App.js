import React, { Component } from 'react';
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import { BrowserRouter , Route , Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login"  component={Login}  />
            <Route path="/Register"  component={Register}  />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
