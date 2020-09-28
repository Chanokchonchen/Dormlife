import React from "react";
import {term} from "./constant"
import './style.css'
function Termservice() {
  return (
    <div style={{display:"inline-block"}} >
      <button
        type="button"
        className="link"
        data-toggle="modal"
        data-target="#exampleModalScrollable"
      >
         Term of Service and Privacy policy
      </button>
      <div
        className="modal fade"
        id="exampleModalScrollable"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalScrollableTitle">
                Term of Service and Privacy policy
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                {term}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Termservice;
