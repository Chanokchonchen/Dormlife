import React from "react";
import { Link , Route } from "react-router-dom"
import Signup from './signup/Signup'
import "bootstrap/dist/css/bootstrap.min.css";
import Normal from "./signup/Normal";
import Home from "./home/Home";
function App() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route  exact path="/signup" component={Signup} />
            <Route  exact path="/signup/normal" component={Normal} />
        </div>
    )
}
export default App;