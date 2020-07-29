import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterVideo from '../pages/RegisterVideo';
import RegisterCategory from '../pages/RegisterCategory';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={RegisterVideo} path="/cadastro/video" />
      <Route component={RegisterCategory} path="/cadastro/categoria" />
      <Route
        component={() => (
          <h1 style={{ color: '#fff' }}>Página não encontrada</h1>
        )}
      />
    </Switch>
  );
};

export default routes;
