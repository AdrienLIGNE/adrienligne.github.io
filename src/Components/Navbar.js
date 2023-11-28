import React from "react";
import { NavLink } from "react-router-dom";


function NavBar({fixed}) {
    return (
        <div>
            <nav className={`sm:h-20 h-16 bg-zinc-800 w-full flex flex-row justify-around items-center font-outfit gap-2 text-xl ${fixed && fixed === true ? 'fixed z-[1000]' : ''}`}>
                <NavLink
                    style={{ backgroundColor: "rgb(39, 39, 42)" }}
                    to="/"
                    className="logo flex flex-row h-full items-center"
                >
                    <img src="" alt="logo" className="h-1/2 mx-1 mr-3" />

                    <h2 className="text-3xl text-orange-200 md:block hidden">
                        cloth2you
                    </h2>
                </NavLink>

                <NavLink
                    style={{ backgroundColor: "rgb(39, 39, 42)" }}
                    to="/cv"
                    className="text-orange-50 hover:text-orange-100 lg:block hidden"
                >
                    CV
                </NavLink>

                <NavLink
                    style={{ backgroundColor: "rgb(39, 39, 42)" }}
                    to="/projets"
                    className="text-orange-50 hover:text-orange-100 lg:block hidden"
                >
                    Projets
                </NavLink>

                <NavLink
                    style={{ backgroundColor: "rgb(39, 39, 42)" }}
                    to="/parcours"
                    className="text-orange-50 hover:text-orange-100 lg:block hidden"
                >
                    Parcours
                </NavLink>
            </nav>
        </div>
    );
}

export default NavBar;