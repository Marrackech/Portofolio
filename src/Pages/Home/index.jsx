import React from 'react';
import '../../SASS/Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <div className="content-wrapper">
        <h1 className='Home-title'>Web----🤖-💻-DEVELOPER</h1>
        <div className="card-Home">
        <img src="/images/Haroun.JPG" alt="photo-WhatsApp" className='card-image-Home' />
          <div className="card-content-Home">
            <h2 className="card-title-Home">Haroun </h2>
            <p className="card-description-Home">Integrateur web:only new technology
            check out my skills </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
