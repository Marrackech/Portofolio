
import React, { useState } from 'react';
import '../../SASS/Skills.css';

function Skills() {
  const handleMouseMove = (e) => {
    const skillImage = e.currentTarget.querySelector('.skill-image');
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateX = (deltaY / centerY) * 20;
    const rotateY = (deltaX / centerX) * -20;

    skillImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const skillImage = e.currentTarget.querySelector('.skill-image');
    skillImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const skills = [
    {
      id: 1,
      title: 'HTML',
      description: 'Langage de balisage pour créer des pages web.',
      imageUrl: '/images/skills/HTML.webp',
      categories: 'Languages',
    },
    {
      id: 2,
      title: 'CSS',
      description: 'Langage de style pour la mise en forme des pages web.',
      imageUrl: '/images/skills/CSS.webp',
      categories: 'Languages',
    },
    {
      id: 3,
      title: 'SASS',
      description: 'Extension de CSS avec des fonctionnalités avancées.',
      imageUrl: '/images/skills/SASS.png',
      categories: 'Languages',
    },
    {
      id: 4,
      title: 'JS',
      description: 'Langage de programmation pour rendre les pages web interactives.',
      imageUrl: '/images/skills/JS.webp',
      categories: 'Languages',
    },
    {
      id: 5,
      title: 'GIT',
      description: 'Système de gestion de versions pour suivre les changements de code.',
      imageUrl: '/images/skills/GIT.png',
      categories: 'LOGICIELS',
    },
    {
      id: 6,
      title: 'GITHUB',
      description: 'Plateforme de gestion de code source basée sur Git.',
      imageUrl: '/images/skills/GITHUB.png',
      categories: 'LOGICIELS',
    },
    {
      id: 7,
      title: 'NODE',
      description: 'Environnement d exécution pour exécuter du code JavaScript côté serveur.',
      imageUrl: '/images/skills/NODE.png',
      categories: 'Languages',
    },
    {
      id: 8,
      title: 'REDUX',
      description: 'Bibliothèque JavaScript pour gérer l état des applications.',
      imageUrl: '/images/skills/REDUX.jpeg',
      categories: 'Languages',
    },
    {
      id: 9,
      title: 'SWAGGER',
      description: 'Cadre de travail pour concevoir, créer, documenter et consommer des services web RESTful.',
      imageUrl: '/images/skills/SWAGGER.png',
      categories: 'LOGICIELS',
    },
    {
      id: 10,
      title: 'YARN',
      description: 'Gestionnaire de paquets rapide, fiable et sécurisé pour les applications JavaScript.',
      imageUrl: '/images/skills/YARN.png',
      categories: 'Languages',
    },
    {
      id: 11,
      title: 'API',
      description: 'Interface de programmation d application permettant à des logiciels de communiquer entre eux.',
      imageUrl: '/images/skills/API.jpeg',
      categories: 'Languages',
    },
    {
      id: 12,
      title: 'YAML',
      description: 'Format de sérialisation de données couramment utilisé pour les configurations.',
      imageUrl: '/images/skills/YAML.png',
      categories: 'Languages',
    },
    {
      id: 13,
      title: 'DEVTOOLS',
      description: 'Outils de développement intégrés pour le débogage et l inspection des applications web.',
      imageUrl: '/images/skills/SEO.png',
      categories: 'LOGICIELS',
    },
    {
      id: 14,
      title: 'TERMINAL',
      description: 'Interface utilisateur en ligne de commande pour interagir avec un ordinateur.',
      imageUrl: '/images/skills/Terminal.png',
      categories: 'LOGICIELS',
    },
    {
      id: 15,
      title: 'VISUAL STUDIO CODE',
      description: 'Éditeur de code source léger mais puissant.',
      imageUrl: '/images/skills/Visuel_Studio.jpeg',
      categories: 'LOGICIELS',
    },
    {
      id: 16,
      title: 'POSTMAN',
      description: 'Outil de collaboration pour le développement d API.',
      imageUrl: '/images/skills/postman.png',
      categories: 'LOGICIELS',
    },
    {
      id: 17,
      title: 'CHAT GPT',
      description: 'IA de conversation conçue pour interagir avec les utilisateurs de manière naturelle.',
      imageUrl: '/images/skills/chatgpt.jpeg',
      categories: 'LOGICIELS',
    },
    {
      id: 18,
      title: 'FIGMA',
      description: 'Outil de conception d interfaces utilisateur basé sur le Web.',
      imageUrl: '/images/skills/figma.png',
      categories: 'LOGICIELS',
    }
  ];

  return (
    <div className="skills-container">
      <div className='Robot'>
      <div class="cloud-bubble">
    <div class="cloud-top"></div>
    <div class="cloud-bottom"></div>
    <div class="cloud-content">
        <h2 class="skills-title">KNOWLEDGE FROM PRACTICE </h2>
    </div>
</div>
      <h2 className='skills-title'>My Skills</h2>
      <div 
        className="skills-content" 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
      >
        <img src="../../images/RobotB.png" alt="Logo" className="skill-image" />
        
    </div>
    </div>
      <div className="reflection-container">
        {skills.map(skill => (
          <div key={skill.id} className="reflection-grid-cell">
            <div className="reflection-content">
              <div className="skill-card">
                <img src={skill.imageUrl} alt={skill.title} className="skill-image" />
                <h3 className="skills-tittle">{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Skills;
