import React from "react";
function Navbar() {
  return (
    <div style={{paddingTop: "60px"}}>
      <div>
        <nav className="navbar navbar-expand-lg navbar fixed-top  navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            DormLife
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li  className="nav-item">
                <a className="btn btn-light mr-1 ml-1 mt-1 mb-1" href="/signin" role="button">Signup</a>
            </li>
            <li  className="nav-item">
                <a className="btn btn-light mr-1 ml-1 mt-1 mb-1" href="/signup" role="button">Signin</a>
            </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
