import React from "react";
function DormSuggest() {
  return (
    <div style={{ display: "inline-block" }}>
      <div
        className="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light"
        style={{ textAlign: "center", maxWidth: "800px", maxHeight: "800px" }}
      >
        <div className="row">
          <div className="col-12">
            <button onClick={()=> {
                console.log("Click")
            }}>
            <img
              src="https://pix10.agoda.net/hotelImages/122/1220420/1220420_18051110480065351844.jpg?s=1024x768"
              alt="..."
            /></button>
          </div>
          <br />
          <div className="col-12">
            <img
              src="https://pix10.agoda.net/hotelImages/122/1220420/1220420_18051110480065351844.jpg?s=1024x768"
              alt="..."
            />
          </div>
          <div className="col-12">Column</div>
          <div className="col-12">Column</div>
        </div>
      </div>
    </div>
  );
}
export default DormSuggest;
