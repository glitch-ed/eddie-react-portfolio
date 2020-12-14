import React from "react";
import Footer from "./footer";
import Project from "./portfolio";

const dataOne = [{
    imgUrl: "../assets/Rapsheet.jpg",
    title: "Rapsheet",
    siteUrl: "https://infinite-journey-37798.herokuapp.com/",
    github: "https://github.com/xtasherx/project2"
},
{
    imgUrl: "../assets/RandomFoodGen.jpg",
    title: "What Do You Want?",
    siteUrl: "https://glitch-ed.github.io/random_food_project/",
    github: "https://github.com/glitch-ed/random_food_project"
},
{
    imgUrl: "../assets/weatherapp.jpg",
    title: "Realtime Weather",
    siteUrl: "https://glitch-ed.github.io/hw6_weather_dashboard/",
    github: "https://github.com/glitch-ed/hw6_weather_dashboard"
}
]

const dataTwo = [{
    imgUrl: "../assets/planner.jpg",
    title: "Daily Planner",
    siteUrl: "http://dispatchcenter.net",
    github: "http://dispatchcenter.net"
},
{
    imgUrl: "../assets/planner.jpg",
    title: "Employee Directory",
    siteUrl: "https://glitch-ed.github.io/hw19-react-ee-directory/",
    github: "https://github.com/glitch-ed/hw19-react-ee-directory"
},
{
    imgUrl: "../assets/planner.jpg",
    title: "Budget Tracker",
    siteUrl: "https://burger-love-23775.herokuapp.com/",
    github: "https://github.com/glitch-ed/hw18_Budget_Tracker_App"
}
]




const Projects = () => {
    return (
        <div>
            <div className="hero fullscreen u-position-relative hero-img">
        
            <div className="content my-5 mt-20">
                <Project dataOne = {dataOne} dataTwo={dataTwo}/>
              
            </div>
    
        </div>
        <Footer />
        </div>



    )
}


export default Projects;
