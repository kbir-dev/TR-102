import React, { useState } from "react";

function Navbar(props) {

  const [mode , setMode] = useState('light');
  const [name , setName] = useState("");

  // (mode === 'light') ? "bg-light" : "bg-dark"
  // .value;

  const changeMode = () => {
    if(mode === 'light'){
      setMode("dark");
    }else{
      setMode("light");
    }
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${mode === 'light' ? "bg-body-tertiary" : "bg-dark"}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${mode === 'light' ? "text-dark" : "text-light"}`} href="#">
            {props.logo}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active ${mode === 'light' ? "text-dark" : "text-light"}`} aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <button className="btn btn-warning" onClick={changeMode}>
               {mode === 'light' ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      </nav>

      <div className="mt-5 w-100 bg-tertiary">
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="ms-5" placeholder="Enter your name"/>
         <h1>{name}</h1>
      </div>
    </div>
  );
}

export default Navbar;
