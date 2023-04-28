
import "./card.css"
import { useState, useEffect } from "react"


const projects = [{
    id: 0,
    projectName: 'HoneyComb Labs Landing Page',
    projectInfo: 'A landing page for a pseudo-agency using React for the front-end, & Vercel for hosting. Utilised Discord, Meme API, ThreeJS for 3d assets, and emailJS for email functionality. ',
    siteLink: 'https://landingpagesite.vercel.app/',
    githubLink: 'https://github.com/piusmons/portfolioSite',
    gif: 'https://i.imgur.com/bLzGqDp.gif'
},{
    id: 1,
    projectName: 'Cat News Site',
    projectInfo: 'A Cat News site built using react for the front-end, Vercel for hosting, and Firebase for the Back-end. Includes CRUD functionality, user-registration with sign-out and sign-in',
    siteLink: 'https://catnews-theta.vercel.app/',
    githubLink: 'https://catnews-theta.vercel.app/',
    gif: 'https://i.imgur.com/VtKat6W.gif'   
}]


export default function Card() {
    const [display, setDisplay] = useState(projects)
    const [select, setSelect] = useState(0);
    
    useEffect(() => {
        const filteredProject = projects.filter((p) => p.id == select);
        setDisplay(filteredProject)
        console.log(display)
      }, [select]);
      


    return(
        <>
            <div className="dropdownContainer">
                <h1 className="projectH1">Portfolio Projects</h1>
                <select className="projectDropdown" onChange={(e) => setSelect(e.target.value)}>
                {projects.map((project, index) => 
                    <option value={project.id}>{project.projectName}</option>)}
                </select>
            </div>
        
        {display.map((project) => (
            <div className='cardWrapper' key={project.id}>
                
                
                        
                        <div className='card'>                      
                            <img className="projectPrev" src={project.gif}></img>
                            
                            <div className='buttonContainer'>
                                <a type="submit" href={project.siteLink} >Live Site</a>
                                <a type="submit" href={project.githubLink}>Github Repo</a>
                                
                            </div>
                            
                            
                        </div>
                        <div className='infoContainer'>
                                <h2 className='infoTitle'>{project.projectName}</h2>
                                <p className='infoText'>{project.projectInfo} </p>

                            </div>
                    
                        
                    </div>
        ))}
         </>
                
    )
}