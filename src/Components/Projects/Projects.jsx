import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../SASS/Projects.css'; // Assurez-vous d'importer le bon fichier CSS ici

const Projects = () => {
  // Exemple de données pour les cards
  const projects = [
    {
      id: 1,
      title: 'Riding cities',
      description: 'Introduction à HTML, mise à jour d’une page web d’association avec nouveaux éléments, création de section avec titre et boutons, intégration de CSS, utilisation de Figma et Visual Studio Code.',
      imageUrl: '/images/projects/RydingCities.png',
      categories: ['HTML'],
      githubLink: 'https://github.com/Marrackech/Riding-cities'
    },
    {
      id: 2,
      title: 'Booking',
      description: 'Dans ce projet, vous créerez la page d accueil responsive d une agence de voyage en utilisant HTML et CSS, en suivant les maquettes Figma pour mobile, tablette et desktop.',
      imageUrl: '/images/projects/Booki.png',
      categories: ['HTML', 'CSS'],
      githubLink: 'https://github.com/Marrackech/Booking'
    },
    {
      id: 3,
      title: 'Oh my Food',
      description: 'Dans ce projet, vous créerez une interface mobile-first pour une start-up, utiliserez Sass et animations CSS, et versionnerez le projet avec Git et GitHub en suivant les maquettes Figma.',
      imageUrl: '/images/projects/Ohmyfood.png',
      categories: ['Sass', 'CSS', 'Git', 'GitHub', 'Responsive Design'],
      githubLink: 'https://github.com/Marrackech/Proj-Oc'
    },
    {
      id: 4,
      title: 'Print-in',
      description: 'Ce projet vous initiera à JavaScript en ajoutant un carrousel interactif au site statique d une imprimerie, en utilisant Visual Studio Code et GitHub pour le développement et la gestion de version.',
      imageUrl: '/images/projects/Print-in.png',
      categories: ['JavaScript', 'Responsive Design'],
      githubLink: 'https://github.com/Marrackech/Projet5'
    },
    {
      id: 5,
      title: 'Architecte-Sophie_Blue',
      description: 'Créez une page web dynamique pour une architecte d intérieur en utilisant JavaScript et une API, développez une page de connexion et une modale, avec Figma, Visual Studio Code et GitHub',
      imageUrl: '/images/projects/sophie-bluel-picture-2.webp',
      categories: ['JavaScript', 'API', 'Figma', 'GitHub', 'Responsive Design'],
      githubLink: 'https://github.com/Marrackech/Architecte'
    },
    {
      id: 6,
      title: 'Kasa',
      description: 'Implémentez le front-end d une application avec React et React Router pour une expérience utilisateur moderne, en utilisant des maquettes et des données simulées, avec Create React App et Node.js.',
      imageUrl: '/images/projects/KKAsa.png',
      categories: ['React', 'Node.js', 'Create React App', 'Responsive Design'],
      githubLink: 'https://github.com/Marrackech/Kasa'
    },
    {
      id: 7,
      title: 'Argent Bank',
      description: 'Développez le front-end d une application bancaire avec React et Redux, intégrez le back-end via des appels API REST avec Swagger, en utilisant Node.js pour le développement full-stack.',
      imageUrl: '/images/projects/Argent Bank.png',
      categories: ['React', 'Redux', 'API', 'Node.js', 'Swagger', 'Responsive Design'],
      githubLink: 'https://github.com/Marrackech/Argent-Bank-B-E'
    },
    {
      id: 8,
      title: 'Debug',
      description: 'Débuggez et finalisez le développement d un site one-page en utilisant les Chrome DevTools pour l inspection, React Developer Tools pour React, Yarn pour les packages, Node.js pour le back-end, GitHub pour la gestion de version.',
      imageUrl: '/images/projects/debug.webp',
      categories: ['Yarn',, 'Responsive Design', 'React Developer Tools', 'Node.js', 'Chrome DevTools', 'GitHub'],
      githubLink: 'https://github.com/yourusername/debug'
    },
    {
      id: 9,
      title: 'Optimisation SEO',
      description: 'En tant que développeur freelance, optimisez le référencement d un site en améliorant sa performance et son accessibilité, en utilisant des outils comme Lighthouse et Wave, et en créant un rapport détaillé des améliorations apportées.',
      imageUrl: '/images/projects/devblog-debug.png',
      categories: ['SEO', 'Lighthouse', 'Wave' , 'Responsive Design'],
      githubLink: 'https://github.com/yourusername/optimisation-seo'
    },
    {
      id: 10,
      title: 'Qwenta',
      description: 'Planifiez le développement d un site web en rédigeant les spécifications techniques, en effectuant une veille technologique, et en utilisant un outil de gestion de projet pour organiser et suivre le projet.',
      imageUrl: '/images/projects/Qwenta.webp',
      categories: [ 'Responsive Design'],
      githubLink: 'https://github.com/yourusername/qwenta'
    },
    {
      id: 11,
      title: 'Portofolio',
      description: 'Créez et publiez votre portfolio de développeur, incluant deux projets, avec Github Pages. Assurez-vous du responsive design, débuggez et optimisez le code et le référencement SEO.',
      imageUrl: '/images/projects/portofolio.png',
      categories: ['GitHub', 'Responsive Design', 'SEO', 'Responsive Design'],
      githubLink: 'https://github.com/yourusername/portfolio'
    }
  ];

  const [filter, setFilter] = useState(null); // État pour stocker la catégorie de filtrage sélectionnée

  const handleFilterChange = (category) => {
    setFilter(category === 'Tous' ? null : category); // Mettre à jour l'état de filtrage en fonction de la catégorie sélectionnée
  };

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects = filter
    ? projects.filter(project => project.categories.includes(filter))
    : projects;

  return (
    <div className="projects-wrapper">
      <h2 className="grid-title">My Projects</h2>
      <div className="filter-container">
        <label className='label'>- Choose categorie -</label>
        <select className="filter" onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="Tous">Tous</option>
          <option value="HTML">HTML</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Sass">Sass</option>
          <option value="CSS">CSS</option>
          <option value="Git">Git</option>
          <option value="GitHub">GitHub</option>
          <option value="Node.js">Node.js</option>
          <option value="Redux">Redux</option>
          <option value="API">API</option>
          <option value="Swagger">Swagger</option>
          <option value="Yarn">Yarn</option>
          <option value="Chrome DevTools">Chrome DevTools</option>
          <option value="SEO">SEO</option>
          <option value="Responsive Design">Responsive Design</option>
          {/* Ajoutez d'autres options de catégorie ici selon vos besoins */}
        </select>
      </div>
      <div className="projects-container">
        {filteredProjects.map(project => (
          <Link
            to={project.githubLink}
            key={project.id}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
