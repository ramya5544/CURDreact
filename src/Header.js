import React from "react";

function Header({ text }) {
  return (
    <div className="row">
      <div className="col col-sm-12  bg-dark border-bottom border-bottom-dark text-white">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default Header;