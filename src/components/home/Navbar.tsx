import React from "react";
function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/about">
            DormLife
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li  className="nav-item">
                <a className="btn btn-light mr-1 ml-1 mt-1 mb-1" href="/signup" role="button">Signup</a>
            </li>
            <li  className="nav-item">
                <a className="btn btn-light mr-1 ml-1 mt-1 mb-1" href="/signin" role="button">Signin</a>
            </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
