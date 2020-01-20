import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import './NavBar.css';

const links = [{
  to: '/',
  text: 'Home'
}, {
  to: '/brasileirao',
  text: 'Brasileirão 2019'
}, {
  to: '/ao-vivo',
  text: 'Espanha X Suiça AO VIVO'
}]

const NavBar = () => {
  const isBigEnough = useMediaQuery({query: "(min-width: 575px)" });
  const [open, setOpen] = React.useState();
  const appLinks = links.map(l => (
    <Link key={l.to} to={l.to} className="nav-link">
      {l.text}
    </Link>
  ));
  return (
  <nav className="nav-bar">
    {isBigEnough ? (
      <div className="nav-big">
        {appLinks}
      </div>
    ) : (
      <div className="nav-small">
      <button 
        className="nav-small__button" 
        onClick={() => setOpen(o => !o)}
        style={{
          borderBottom: `1px solid ${open ? "#FFFFFF" : "transparent"}`
        }}
      >MENU</button>
      <div className="nav-small__links" style={{ display: open ? "block" : "none"}}>
        {appLinks}
      </div>
    </div>
    )}
    
  </nav>
  );
};

export default NavBar;