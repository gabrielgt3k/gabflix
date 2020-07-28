import React from 'react';
import logoHackaflix from '../../assets/logo.png';
import { Button } from './Button';
import './Header.css';

const Header: React.FC = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logoHackaflix} alt="Hackaflix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Header;
