import React from 'react'
import '../static/css/ProjectCard.css'

function ProjectCard({lang, project}) {

    const backgroundImage = `url(${project.img_url})`;
    const imageStyle = {
      background: backgroundImage,
      'backgroundSize':'contain'
    };
    
    return (
        <div className='project-card-container'>
            <div className='card'>

                {/* <div className='image-container' style={imageStyle} >
                    
                </div> */}

                <a className='image-container' style={imageStyle} href={project.github_url} target="blank_" rel="noreferrer" >
                    
                </a>

                <div className='project-title-container'>
                    <div className='project-tile'>
                        <a href={project.github_url} target="blank_" rel="noreferrer">{project.title[lang]}</a>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default ProjectCard