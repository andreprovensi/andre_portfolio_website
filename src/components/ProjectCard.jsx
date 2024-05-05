import React from 'react'
import '../static/css/ProjectCard.css'

function ProjectCard({lang, project}) {
  return (
    <div className='project-card-container'>
        <div className='card'>

            <div className='image-container'>
                <img src="" alt="" />imagem
            </div>

            <div className='project-title-container'>
                <div className='project-tile'>
                    {project.title[lang]}
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProjectCard