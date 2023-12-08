import React from "react";
import { NavLink } from "react-router-dom";


function Navbar({fixed}) {
    return (
        <div>
            <nav className={`sm:h-20 h-16 bg-zinc-800 w-full flex flex-row justify-around items-center font-outfit gap-2 text-xl ${fixed && fixed === true ? 'fixed z-[1000]' : ''}`}>

                <NavLink
                    style={{ backgroundColor: "rgb(39, 39, 42)" }}
                    to="/"
                    className="text-blue-50 hover:text-blue-100 lg:block hidden"
                >
                    Projets
                </NavLink>

                <NavLink
                    style={{ backgroundColor: "rgb(39, 39, 42)" }}
                    to="/cv"
                    className="text-blue-50 hover:text-blue-100 lg:block hidden"
                >
                    CV
                </NavLink>

                <NavLink
                    style={{ backgroundColor: "rgb(39, 39, 42)" }}
                    to="/parcours"
                    className="text-blue-50 hover:text-blue-100 lg:block hidden"
                >
                    Parcours
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;