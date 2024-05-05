import React from 'react'
import ProjectCard from './ProjectCard'
import '../static/css/Projects.css'


function ProjectsSection({lang}) {
  
  const projects = [
    
    {
      title:{
        en:"Predicting Diabetes With Machine Learning",
        pt:"Previsão de Diabetes com Machine Learning"
      },
      github_url:"https://github.com/andreprovensi/diabetes_machine_learning_app",
      web_url:"https://diabetes-prediction-mgje.onrender.com/",
      img_url:""
    },
    
    {
      title:{
        en:"Other Project",
        pt:"Outro Projeto"
      },
      github_url:"https://github.com/andreprovensi/diabetes_machine_learning_app",
      web_url:"https://diabetes-prediction-mgje.onrender.com/",
      img_url:""
    }, 
    
    {
      title:{
        en:"Other Project",
        pt:"Outro Projeto"
      },
      github_url:"https://github.com/andreprovensi/diabetes_machine_learning_app",
      web_url:"https://diabetes-prediction-mgje.onrender.com/",
      img_url:""
    }, 
    
    {
      title:{
        en:"Other Project",
        pt:"Outro Projeto"
      },
      github_url:"https://github.com/andreprovensi/diabetes_machine_learning_app",
      web_url:"https://diabetes-prediction-mgje.onrender.com/",
      img_url:""
    }, 
    {
      title:{
        en:"Other Project",
        pt:"Outro Projeto"
      },
      github_url:"https://github.com/andreprovensi/diabetes_machine_learning_app",
      web_url:"https://diabetes-prediction-mgje.onrender.com/",
      img_url:""
    }, 
    {
      title:{
        en:"Other Project",
        pt:"Outro Projeto"
      },
      github_url:"https://github.com/andreprovensi/diabetes_machine_learning_app",
      web_url:"https://diabetes-prediction-mgje.onrender.com/",
      img_url:""
    }, 
    
  ]

return (
  <section id='projects'>
    <div className="dislocated-div-projects">
      <div className='cards-container'>
        {
          projects.map(p => <ProjectCard lang={lang} project={p}/>)
        }
      </div>
    </div>
  </section>
)
}

export default ProjectsSection