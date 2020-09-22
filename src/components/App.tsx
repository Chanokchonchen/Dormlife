import React from "react";
import { Link , Route } from "react-router-dom"
import Signup from './signup/Signup'
function App() {
    return (
        <div>
            <Link to="/signup">Sign up</Link>
            <Route  exact path="/signup" component={Signup} />

        </div>
    )
}
export default App;