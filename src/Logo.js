import React from 'react';

import './Logo.css';
import urlDaBola from './static/bola.png';

const height = '2em';

const Logo = () => ( 
  <div className="logo">
    <img src={urlDaBola} alt="logotipo" style={{ height }} />
    <h3 style={{ lineHeight: height, fontSize: height }}>
      <strong>
        Platzi
      </strong>
      Soccer
    </h3>
  </div>
);

export default Logo;