import React from "react";
import logoBernardoNurvia from "./../../img/logoBernardoNurvia.jpg";
const NavBar = () => {

    return (
        <nav className="bg-secondary sticky-top text-secondary-emphasis navbar-expand-lg">

            <ul className="d-flex col nav">
                <li className="nav-item me-auto pt-2 ps-2">
                    <a className="navbar-brand nav-item-text" href="#">
                        <img src={logoBernardoNurvia} alt="Logo Bernardo Nurvia" style={{border:"5%", width: "30px", height: "30px", marginRight: "3px", marginBottom: "4px"}} classNameName="aling-itetext-center" />
                        Bernardo Nurvia
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-item-text nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className=" nav-item-text nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-item-text" href="#">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-item-text" href="#">Contact</a>
            </li>
        </ul>
        </nav>
    );
}

export default NavBar;