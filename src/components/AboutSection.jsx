import React from 'react'
import '../static/css/About.css'
import { AiOutlineUser } from "react-icons/ai";
import { DiCodeBadge } from "react-icons/di";

function AboutSection({ lang }) {
  
    const texts = {
        aboutMeText:{
          en:`Experienced data scientist with a proven track record of leveraging Python, PySpark, Pandas, Numpy, Scikit-learn, SQL, AWS, and PowerBI to extract valuable insights and
          drive data-driven decision-making.I have successfully applied data science, AI, and machine learning to tackle business challenges such as fraud detection, customer
          segmentation, and understanding customer behavior and product relationships. I have collaborated closely with cross-functional teams in fraud, marketing, and product,
          developing my skills in ETL processes and data integration.My work involved wrangling diverse datasets, ranging in size and complexity, to uncover actionable insights and
          develop robust machine learning models. I also have good interdisciplinary communication skills, demonstrated through my ability
          to explain technical concepts and present insights to diverse audiences with varying backgrounds`,
          pt:"André Provensi"
        },

        skillsText:{
          en:[
            'Python',
            'SQL',
            'AWS',
            'Power BI',
            'Machine Learning',
            'Statistics'
          ],
          pt:'Cientista de Dados'
        },
      }

    return (
    <section id='about'>
        <div className="dislocated-div-about">

            <div className="topic">
                <div className='icon-container'>
                    <AiOutlineUser className='topic-icon' /> ABOUT ME
                </div>
                <div className='text-container'>
                    {texts.aboutMeText[lang].split('.').map((s,i)=><div key={i}><p>{s+'.'}</p><br/></div>)}
                </div>
            </div>

            <div className="topic" id="skills-topic">
                <div className='icon-container' id='skills-icon-container'>
                    <DiCodeBadge  className='topic-icon' id='skills-icon'/> SKILLS
                </div>

                <div className='skills-list-container'>
                    <ul className="skills-list">
                        {texts.skillsText[lang].map((s,i)=><li key={i}>{s}</li>)}
                    </ul>
                </div>
           
            </div>
        </div>
    </section>
  )
}

export default AboutSection