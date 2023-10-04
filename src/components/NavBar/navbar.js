
import CardWidget from "./cardwidget"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const NavBar = (id) => {
    return(
        <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
        </header>
    )

}

export default NavBar