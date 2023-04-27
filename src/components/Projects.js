import './projects.css'


export default function Projects() {


    return (
        <div className='projectsContainer'>
            <div className='projectsContent'>
                <h2 className='infoTitle'>wew</h2>
                <div className='cardWrapper'>
                    <div className='card'>                      
                        <img className="projectPrev" src="https://i.imgur.com/bLzGqDp.gif"></img>
                        <div className='infoContainer'>
                            <p className='infoText'>
                                wewmon
                            </p>

                        </div>
                        <div className='buttonContainer'>
                            <button className='button-3'>Live Site</button>
                            <button>Source Code</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}