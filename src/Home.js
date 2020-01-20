import React from 'react';

import Logo from "./Logo";
import HomeContentCard from './HomeContentCard';
import "./Home.css";

const Home = () => (
  <div className="home">
    <div className="home-image">
      <div className="home-logo">
        <Logo />
      </div>
    </div>
    <div className="home-content-grid">
      <HomeContentCard
        title="Torça pelo seu time"
        text="qualquer coisa"
      />
      <HomeContentCard
        title="Torça pelo seu time"
        text="qualquer coisa"
      />
      <HomeContentCard
        title="Torça pelo seu time"
        text="qualquer coisa"
      />
    </div>
  </div>

  );

export default Home;