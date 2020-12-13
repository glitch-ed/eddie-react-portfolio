import React from "react";
import Footer from "./footer";


const About = () => {
    return (
        <div>
                    <div className="hero fullscreen u-position-relative hero-img">
         
            <div className="hero-body u-flex u-flex-column u-justify-center u-text-center">
            <div className=" content u-text-center">
                
                <div className="row ">
                    <div className="col-3 level">
                        <img src="assets/my-avi.jpg" className="u-circle" alt="" ></img>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-8">
                        <p className="u-text-left my-2 text-light">
                           <span className="font-bold text-primary bigText">Howdy!</span>My name is Eddie Villarreal and I am a full stack web developer.  
            Originally from Laredo, Texas, I moved to San Antonio in 2001 and have been here ever since.  
            As an undergrad at UTSA I studied technology but soon fell into an operations management position for a medical
             organization and realized I was rather good at it.  Throughout my 15-year career in health and wellness management 
             I was still dabbling in the tech field here and there and was usually the go-to person for most of the software 
             upgrades and new software integration projects at my company.  Finally, my love for tech boiled over and realized 
             I wanted to make a career change.  I decided to take the leap and enrolled in the UTSA Coding Bootcamp.  
             I found the projects and classes fun and intriguing.  I am confident in achieving my goals because I know I can be good at this.  
             So far, the decision to change career paths and pursue web development has been fun, exciting, terrifying and I am 
             grateful I did it because sometimes you have to just take a deep breath and jump.
                        </p>
                    </div>
                </div>
                <div className="divider text-primary"></div>
                <h1 className="font-light text-light">Top Technologies</h1>
                <div className="row text-light">
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">HTML5<i className="text-primary fab fa-html5"></i>                            
                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">CSS3<i className="text-primary fab fa-css3"></i>
                            </p>
                
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">BootStrap<i className="text-primary fab fa-js-square"></i>
                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">JavaScript<i className="text-primary fab fa-mdb"></i>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="row text-light">
                    <div className="col-3">
                        <div>
                            
                            <p className="lead font-bold">JQuery<i className="text-primary fab fa-bootstrap"></i>
                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            

                            <p className="lead font-bold">Node.js<i className="text-primary fab fa-node-js"></i>

                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">MySQL<i className="text-primary fas fa-database"></i>
         
                            </p>



                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            
                            <p className="lead font-bold">MongoDB <i className="text-primary fab fa-react"></i>

                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            
                            <p className="lead font-bold">Express.js <i className="text-primary fab fa-react"></i>

                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            
                            <p className="lead font-bold">React.js <i className="text-primary fab fa-react"></i>

                            </p>

                        </div>
                    </div>
                </div>
                <div className="space xlarge"></div>
                <div className="">
                    <a href="../assets/resume.pdf"><button className=" btn-primary btn-small hover-grow"><span className="text-light"></span>Download CV</button></a>
                    <a href="#/work"><button className="btn-small hover-grow">See My Work</button></a>
                </div>
            </div>


            </div>
            </div>
            <Footer />
        </div>



    )
}


export default About;