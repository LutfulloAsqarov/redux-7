import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const userData = useSelector((state) => state.user);

    return (
        <div className="navbar">
            <h2>Redux Toolkit</h2>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/create-user"}>Create user</NavLink>
            <NavLink to={"/all-users"}>
                All users <sup>{userData.length}</sup>
            </NavLink>
        </div>
    );
}

export default Navbar;
