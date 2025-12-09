import "./nav.css";
import React from "react";

export function Nav() {
    return (
        <nav className="nav">
            <NavItem 
                icon="/icons/home.svg"
                label="Home"
                active={true}
            />
            <NavItem
                icon="/icons/quiz.svg"
                label="Quiz"
                active={false}
            />
            </nav>
    );
}