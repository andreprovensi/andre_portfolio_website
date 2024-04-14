import React from 'react'
import '../static/css/About.css'
import { AiOutlineUser } from "react-icons/ai";
import { DiCodeBadge } from "react-icons/di";
import { BsMortarboard } from "react-icons/bs";


function AboutSection({ lang }) {
  
    const texts = {
        aboutMeText:{
          en:`Experienced data scientist with a proven track record of leveraging Python, PySpark, Pandas, Numpy, Scikit-learn, SQL, AWS, and PowerBI to extract valuable insights and
          drive data-driven decision-making.I have successfully applied data science, AI, and machine learning to tackle business challenges such as fraud detection, customer
          segmentation, and understanding customer behavior and product relationships. I have collaborated closely with cross-functional teams in fraud, marketing, and product,
          developing my skills in ETL processes and data integration.My work involved wrangling diverse datasets, ranging in size and complexity, to uncover actionable insights and
          develop robust machine learning models. I also have good interdisciplinary communication skills, demonstrated through my ability
          to explain technical concepts and present insights to diverse audiences with varying backgrounds`,
          pt:`Cientista de dados com experiência em machine learning, análise de dados e proficiência
          em Python, PysPark, Pandas, Numpy, Scikit-learn, SQL, AWS e PowerBI.
          Apliquei Ciência de Dados, Inteligência Artificial e Aprendizado de Máquina para apoiar a
          tomada de decisões e resolver problemas de negócios relacionados à detecção de
          fraudes, segmentação de clientes, comportamento do cliente e relação cliente-produto.
          Trabalhei em colaboração com equipes de fraude, marketing e produto, o que me permitiu
          ter contato com diversos tipos e tamanhos de dados, desenvolvendo habilidades sólidas
          em ETL, integração e manipulação de diferentes bancos de dados para descobrir insights
          e construir modelos de aprendizado de máquina.
          A diversidade de equipes com as quais trabalhei me proporcionou habilidades sólidas de
          comunicação para explicar conceitos técnicos e relatar insights e resultados para pessoas
          de diferentes formações e áreas de negócio`
        },

        skillsList:{
          en:[
            'Python',
            'SQL',
            'AWS',
            'Power BI',
            'Machine Learning',
            'Statistics'
          ],
          pt:[
            'Python',
            'SQL',
            'AWS',
            'Power BI',
            'Machine Learning',
            'Estatística'
          ],
        },

        educationList:{
          en:[
            'Python',
            'SQL',
            'AWS',
            'Power BI',
            'Machine Learning',
            'Statistics'
          ],
          pt:[
            'Python',
            'SQL',
            'AWS',
            'Power BI',
            'Machine Learning',
            'Estatística'
          ],
        },

        aboutText:{
            'en':'ABOUT',
            'pt':'SOBRE'
        },
        
        skillsText:{
            'en':'SKILLS',
            'pt':'SKILLS'
        },
        educationText:{
            'en':'EDUCATION',
            'pt':'FORMAÇÃO'
        },

      }

    return (
    <section id='about'>
        <div className="dislocated-div-about">

            <div className="topic">
                <div className='icon-container'>
                    <AiOutlineUser className='topic-icon' />{texts.aboutText[lang]}
                </div>
                <div className='text-container'>
                    {texts.aboutMeText[lang].split('.').map((s,i)=><div key={i}><p>{s+'.'}</p><br/></div>)}
                </div>
            </div>

            <div className="topic" id="skills-topic">
                <div className='icon-container' id='skills-icon-container'>
                    <DiCodeBadge  className='topic-icon' id='skills-icon'/> {texts.skillsText[lang]}
                </div>

                <div className='skills-list-container'>
                    <ul className="skills-list">
                        {texts.skillsList[lang].map((s,i)=><li key={i}>{s}</li>)}
                    </ul>
                </div>
           
            </div>
            <div className="topic" id="education-topic">
                <div className='icon-container' id='skills-icon-container'>
                    <BsMortarboard className='topic-icon' id='skills-icon'/> {texts.educationText[lang]}
                </div>

                <div className='skills-list-container'>
                    <ul className="skills-list">
                        {texts.educationList[lang].map((s,i)=><li key={i}>{s}</li>)}
                        
                    </ul>
                </div>
           
            </div>
        </div>
    </section>
  )
}

export default AboutSection