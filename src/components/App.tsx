import React from "react";
import { Route } from "react-router-dom"
import Signup from './signup/Signup'
import "bootstrap/dist/css/bootstrap.min.css";
import Normal from "./signup/Normal";
import Home from "./home/Home";
import DormOwner from "./signup/DormOwner";
function App() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route  exact path="/signup" component={Signup} />
            <Route  exact path="/signup/normal" component={Normal} />
            <Route  exact path="/signup/dormowner" component={DormOwner} />
        </div>
    )
}
export default App;