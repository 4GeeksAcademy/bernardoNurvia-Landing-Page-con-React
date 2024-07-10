import React from "react";
import logoBernardoNurvia from "./../../img/logoBernardoNurvia.jpg";
const NavBar = () => {

    return (
        <nav classNameName="navbar bg-body-tertiary navbar-expand-lg">
            <div classNameName="container-fluid">
                <a classNameName="navbar-brand" href="#">
                    <img src={logoBernardoNurvia} alt="Logo" style={{ width: "30px", height: "30px" }} classNameName="d-inline-block align-text-top" />
                    Bernardo Nurvia
                </a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;