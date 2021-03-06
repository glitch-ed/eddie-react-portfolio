import React from "react";
import Footer from "./footer";


const Contact = () => {
    return (
        <div>
                    <div className="hero fullscreen u-position-relative hero-img">
         
            <div className="hero-body u-flex u-flex-column u-justify-center u-text-center">
            <div>
            <h1 className="title text-dark">HOW TO FIND ME</h1>
            <div className=" ignore-screen level-item text-dark"><p className="m-0">Name:</p></div>
            <div className="ignore-screen level-item "><input type="name" value=""></input> </div>


            <div className=" ignore-screen level-item text-dark"><p className="m-0">Email:</p></div>
            <div className="ignore-screen level-item"><input type="email" value=""></input></div>

            <div className=" ignore-screen level-item text-dark"><p className="m-0">Message:</p></div>
            <textarea></textarea>
            <input type="submit" class="btn-dark pull-right"/>
            </div>
            <div className="u-flex">
                <a href="https://github.com/glitch-ed"><h2 className="m-1 text-dark"><i class="fab fa-github"></i></h2></a>
                <a href="https://www.linkedin.com/in/eddie-villarreal-8babb0105/"><h2 className="m-1 text-dark"><i class="fab fa-linkedin-in"></i></h2></a>
            </div>

            </div>
            </div>
            <Footer />
        </div>



    )
}

export default Contact
