import React from 'react'
import '../static/css/Home.css'
import '../public/images/andre_profile.png'
import profilePicture from '../public/images/andre_profile.png'

function HomeSection({ lang }) {
  
  
  const texts = {
    homeText:{
      en:"Hi, I'm André",
      pt:"André Provensi"
    },
    aboutText:{
      en:"I'm a Data Scientist",
      pt:'Cientista de Dados'
    },
  }

  return (
    <section>

      <div className='dislocated-div'>
        <div className='home-text'>
          <p id='name'>{texts.homeText[lang]}</p>
          <p id='description'>{texts.aboutText[lang]}</p>
        </div>

        <div className='personal-image'>
          <img src={profilePicture} alt="profile-image" />
        </div>
      </div>
      
    </section>
  )
}

export default HomeSection