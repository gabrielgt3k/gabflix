import React from 'react';
import { LoadingContainer } from './styles';

import egirl from '../../assets/ju-egirl.png';
import souto from '../../assets/souto.png';
import paulo from '../../assets/paulo.png';
import boss from '../../assets/boss.png';

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <span>Carregando...</span>
      <div>
        <img src={egirl} alt="egirl" />
        <img src={souto} alt="souto" />
        <img src={paulo} alt="paulo" />
        <img src={boss} alt="boss" />
      </div>
    </LoadingContainer>
  );
};

export default Loading;
