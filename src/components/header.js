import React from "react";


const Header = () => {
    return (
       
        <div className="header mb-0 u-position-absolute">
            
            <div className="header-nav bg-dark ">
                <div className="nav-center">
                <a className="m-1 text-warning uppercase hover-grow"  href="#/">Home</a>
                <a className="m-1 text-warning uppercase hover-grow"  href="#/about">About Me</a>
                <a className="m-1 text-warning uppercase hover-grow"  href="#/work">Portfolio</a>
                <a className="m-1 text-warning uppercase hover-grow"  href="#/assets/resume.pdf">Resume</a>
                <a className="m-1 text-warning uppercase hover-grow"  href="#/contactme">Contact</a>
            </div>
            </div>
        </div>




    )

}



export default Header;