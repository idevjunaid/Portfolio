import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import HomeMaxRoundedIcon from "@mui/icons-material/HomeMaxRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";

function Navbar() {
  useEffect(() => {
    const div = document.getElementById("animatedDiv");
    div.classList.remove("d-none");
    div.classList.add("slideInAnimation");
  }, []);

  return (
    <nav className="navbar col-md-12 col-lg-3 animatedDiv d-none" id="animatedDiv">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <HomeMaxRoundedIcon />
          <span>Home</span>
        </NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink exact className="nav-link d-flex align-items-center" to="/" activeClassName="active">
              <HomeMaxRoundedIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/about" activeClassName="active">
              <AccountCircleRoundedIcon />
              <span>About</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/work" activeClassName="active">
              <WorkRoundedIcon />
              <span>Work</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/experience" activeClassName="active">
              <AutoAwesomeRoundedIcon />
              <span>Experience</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/contact" activeClassName="active">
              <ContactPageRoundedIcon />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
