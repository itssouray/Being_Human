import React from "react";



function NavBar(){
    return(
        <div className="head">
            <span className="logo">
                <h3>BEING HUMAN</h3>
            </span>

            <span className="nav">
                <a href="#">WHAT WE DO</a>
                <a href="#">WHO WE ARE</a>
                <a href="#">BEING HERE</a>
                <a href="#">CONTACT US</a>
            </span>
        </div>
    )
}


export default NavBar;