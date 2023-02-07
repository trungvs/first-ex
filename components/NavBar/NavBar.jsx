import React, { useState, useEffect } from "react";

import "./NavBar.css"

export default function NavBar() {

    const [openMobile, setOpenMobile] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const handleCheckMobile = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
            setOpenMobile(false)
        } else {
            setIsMobile(false)
            setOpenMobile(false)
        }
    }

    window.addEventListener("resize", handleCheckMobile)

    return (
        <nav id="nav">
            <ul className="nav__list" style={
                isMobile && openMobile
                ? {display: "block"}
                : isMobile && openMobile === false
                ? {display: "none"}
                : !isMobile && !openMobile
                && {display: "block"}}>
                <li className="nav__list-item">
                    <a href="#" className="nav__list-item-link nav__list-item-link--bold">Home</a>
                </li>
                <li className="nav__list-item">
                    <a href="/services" className="nav__list-item-link">Services</a>
                </li>
                <li className="nav__list-item">
                    <a href="/news" className="nav__list-item-link nav__list-item-link--active">News</a>
                </li> 
                <li className="nav__list-item">
                    <a href="/blog" className="nav__list-item-link">Blog</a>
                </li>
                <li className="nav__list-item">
                    <a href="/contact" className="nav__list-item-link">Contact</a>
                </li>    
            </ul>
            <div className="nav__mobile">
                <img src="https://img.icons8.com/fluency/256/menu-rounded.png" alt="LOGO ICON" className="nav__logo" onClick={() => {
                    setOpenMobile(!openMobile)
                }} />
            </div>
        </nav>
    )
}