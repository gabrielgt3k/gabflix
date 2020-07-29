import React from 'react';
import { Main } from './styles';
import Header from '../Header';
import Footer from '../Footer';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
