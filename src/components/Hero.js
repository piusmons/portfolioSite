import './hero.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {SiJavascript, SiCss3, SiFirebase, } from 'react-icons/si'
import {DiHtml5, DiNodejs, DiMongodb, DiPython, DiReact} from 'react-icons/di'
import {SiMui} from "react-icons/si";

const style = {color: "gold", fontSize: "2em"}
export default function Hero() {


    return (
        <div className="heroContainer">
            <div className='titleContainer'>
                <h1 className='title'>Hi I'm Richard Pius</h1>
                <p className='subTitle'>Web Developer💻 Cat lover 🐱  life long learner 📚  gamer 🎮 </p>
                <ul className='myLinkUl'>
                    <li className='myLink'>
                        <BsLinkedin style={style} /> <a href="https://www.linkedin.com/in/richard-pius-chua-624a45272/" className='myLinkp'>Linkedin</a>
                    </li>
                    <li className='myLink'>
                        <BsGithub style={style} /> <a href="https://github.com/piusmons" className='myLinkp'>Github</a>
                    </li>
                </ul>
                
            </div>
            <div className='techIcons'>
               <h2 className="techTitle"></h2>
               <div className='slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <SiJavascript style={style}/> <p>Javascript</p>
                    </div>
                    <div className='slide'>
                        <SiCss3 style={style} /> <p>CSS</p>
                    </div>
                    <div className='slide'>
                        <DiHtml5 style={style} /> <p>Html</p>
                    </div>
                    <div className='slide'>
                        <DiNodejs style={style} /> <p>Node.js</p>
                    </div>
                    <div className='slide'>
                        <DiMongodb style={style} /> <p>MongoDb</p>
                    </div>
                    <div className='slide'>
                        <SiFirebase style={style} /> <p>Firebase</p>
                    </div>
                    <div className='slide'>
                        <DiPython style={style} /> <p>Python</p>
                    </div>
                    <div className='slide'>
                        <DiReact style={style} /> <p>React</p>
                    </div>  
                    <div className='slide'>
                        <SiMui style={style} /> <p>Material UI</p>
                    </div>
                    
                </div>
               </div>
            </div>

        </div>

    )
}
