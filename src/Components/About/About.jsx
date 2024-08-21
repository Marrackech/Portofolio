import React, { useState } from 'react';
import '../../SASS/About.css';

const About = () => {
  const [language, setLanguage] = useState('fr'); // Default language is French

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
   
    <div className='sea'>
      <div className='About-Content'>
        <div className='About-Card'>
          <h1 className='About-Title'>-About-</h1>
          <button className='About-button'>HEY !✋ENGLISH OR SPANISH ⬇️</button>
          <div className='language-options'>
            <button onClick={() => handleLanguageChange('fr')}>Français /</button>
            <button onClick={() => handleLanguageChange('en')}>English /</button>
            <button onClick={() => handleLanguageChange('es')}>Español</button>
          </div>
          {language === 'fr' && (
            <p className='About-P'>"Je suis Haroun, un développeur web formé chez OpenClassroom, passionné par l'écriture de code propre et respectueux de l'environnement. Motivé par l'apprentissage continu et les défis techniques, je m'efforce d'intégrer les meilleures pratiques de développement durable dans mes projets. Mon parcours m'a équipé de solides compétences en conception et développement web, avec une vision claire de devenir ingénieur en intelligence artificielle. Je suis déterminé à contribuer de manière significative à des projets innovants tout en cultivant mon expertise dans le domaine numérique."</p>
          )}
          {language === 'en' && (
            <p className='About-P'>"I'm Haroun, a web developer trained at OpenClassroom, passionate about writing clean and environmentally friendly code. Motivated by continuous learning and technical challenges, I strive to integrate the best practices of sustainable development into my projects. My journey has equipped me with strong skills in web design and development, with a clear vision of becoming an artificial intelligence engineer. I am determined to make a meaningful contribution to innovative projects while cultivating my expertise in the digital field."</p>
          )}
          {language === 'es' && (
            <p className='About-P'>"Soy Haroun, un desarrollador web formado en OpenClassroom, apasionado por escribir código limpio y respetuoso con el medio ambiente. Motivado por el aprendizaje continuo y los desafíos técnicos, me esfuerzo por integrar las mejores prácticas de desarrollo sostenible en mis proyectos. Mi trayectoria me ha dotado de sólidas habilidades en diseño y desarrollo web, con una clara visión de convertirme en ingeniero en inteligencia artificial. Estoy decidido a contribuir de manera significativa a proyectos innovadores mientras cultivo mi experiencia en el campo digital."</p>
          )}
        </div>
        <div className='circle-wrapper'>
          <div className='bubble'></div>
          <div className='submarine-wrapper'>
            <div className='submarine-body'>
              <div className='window'></div>
              <div className='engine'></div>
              <div className='light'></div>
            </div>
            <div className='helix'></div>
            <div className='hat'>
              <div className='leds-wrapper'>
                <div className='periscope'></div>
                <div className='leds'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='About-cards'>
        <div className='About-card-certification'>
          <h3>Certification</h3>
          <h5>Integrateur web</h5>
          <p>Level 5</p>
          <a href='#'>click to download certification</a>
        </div>
        <div className='About-card-source'>
          <h3>Sources</h3>
          <a href='https://github.com/Marrackech/'><img src='/images/gitt.png' alt='GitHub'></img></a>
          <a href='##'><img src='/images/linkdin.jpeg' alt='LinkedIn'></img></a>
          <a href='mailto:linasafe5@gmail.com'><img src='/images/gmail.png' alt='Gmail'></img></a>
        </div>
      </div>
      
    </div>
    
  );
};

export default About;
