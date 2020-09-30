import React from "react";
function SearchBar() {
  return (
    <div  style={{display:"inline-block"}}>
      <form className="" style={{textAlign:"center"}} >
        <input
          className="form-control form-control-sm mr-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}
export default SearchBar
