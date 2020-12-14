import React from "react";
import Footer from "./footer";


const About = () => {
    return (
        <div>
            <div className="hero fullscreen u-align-center hero-img">
         
            <div className="hero-body u-flex u-flex-column u-justify-center u-text-center">
            <div className=" content u-text-center">
                
                <div className="row ">
                    <div className="col-2 level"></div>
                    <div className="col-8">
                        <p className="u-text-left my-2 text-Dark font-bold">
                        Hi! My name is Eddie Villarreal and I am a full stack web developer.  
                        Originally from Laredo, Texas, I moved to San Antonio in 2001 and have been here ever since.  
                        As an undergrad at UTSA I studied technology but soon fell into an operations management position for a medical
                        organization and realized I was rather good at it.  Throughout my 15-year career in health and wellness management 
                        I was still dabbling in the tech field here and there and was usually the go-to person for most of the software 
                        upgrades and new software integration projects at my company.  Finally, my love for tech boiled over and realized 
                        I wanted to make a career change.  I decided to take the leap and enrolled in the UTSA Coding Bootcamp.  
                        I found the projects and classes fun and intriguing.  
                        So far, the decision to change career paths and pursue web development has been fun, exciting, terrifying and I am 
                        grateful I did it because sometimes you have to just take a deep breath and jump.
                        </p>
                    </div>
                    <div className="col-2 level"></div>
                </div>
                <div className="divider text-warning"></div>
                <h1 className="font-light text-dark">Technologies I'm Savvy In</h1>
                <div className="row text-dark">
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">HTML5</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">CSS3</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">BootStrap</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="row text-dark">
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">JQuery</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">Node.js</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">MySQL</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">MongoDB</p>
                        </div>
                    </div>
                    </div>
                    <div className="row text-dark">   
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">Express.js</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">React.js</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">GitHub Technologies</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">Other CSS Framworks</p>
                        </div>
                    </div>
                </div>
                <div className="space xlarge"></div>
                
            </div>


            </div>
            </div>
            <Footer />
        </div>



    )
}


export default About;