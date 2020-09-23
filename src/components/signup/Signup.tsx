import React from "react";
import Normal from "./Normal"
function Signup() {
    return (
        <div>
            <a href="/signup/normal" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Signup Normal User</a><br /><br />
            <a href="/signup/normal" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Signup Dorm Owner</a>
        </div>
    )
}
export default Signup;