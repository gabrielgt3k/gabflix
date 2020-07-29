import React from 'react';
import { Link } from 'react-router-dom';
import logoHackaflix from '../../assets/logo.png';
import { Button } from './Button';
import './Header.css';

const Header: React.FC = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logoHackaflix} alt="Hackaflix logo" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Header;
