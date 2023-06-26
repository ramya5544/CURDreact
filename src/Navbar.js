import React from "react";

function Navbar({ text1, text2, text3, text4, text5, text6, Link }) {
  return (
    <nav
      className="navbar bg-primary d-flux  justify-content-center"
      data-bs-theme="dark"
    >
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container d-flux align-items-center justify-content-center">
          <Link className="navbar-brand btn btn-primary" to="/">
            {text1}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active btn" to="/Create-Appointment">
                  {text2}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active btn" to="/Read-Appointment">
                  {text3}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active btn" to="/Update-Appointment">
                  {text4}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active btn" to="/Delete-Appointment">
                  {text5}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active btn" to="/About">
                  {text6}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;