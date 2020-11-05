import React, { Component } from "react";
import logo from './static/moview.png'
import "./components.css"
import {Link} from 'react-router-dom'
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
      <div className= "container">
          <a className="navbar-brand" href="/#"> <img src={logo} alt= "logo" width = "150"></img> </a>
          <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav  mt-lg-0 ml-auto">
              <li className="nav-item active">
              <Link to = "/">
                <span className="nav-link"> <i className="fa fa-home" aria-hidden="true"></i> Home <span className="sr-only">(current)</span></span>
              </Link>
              </li>
    {/* 
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-filter" aria-hidden="true"></i> Filters</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/#">Action 1</a>
                  <a className="dropdown-item" href="/#">Action 2</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-user" aria-hidden="true"></i> Guest</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/#">Action 1</a>
                  <a className="dropdown-item" href="/#">Action 2</a>
                </div>
              </li>
        */}
            </ul>
          </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;
