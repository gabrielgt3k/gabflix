import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

const RegisterVideo: React.FC = () => {
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default RegisterVideo;
