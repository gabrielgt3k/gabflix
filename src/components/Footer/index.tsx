import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/gabriel-gt/">
        <img src={logo} alt="Logo" width="105" />
      </a>
      <p>
        Criado por
        <span> </span>
        <a href="https://www.linkedin.com/in/gabriel-gt/">Gabriel Oliveira</a>
        <span> </span>
        durante
        <span> </span>
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
};

export default Footer;
