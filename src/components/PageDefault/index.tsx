/* eslint-disable react/prop-types */
import React from 'react';
import { Main } from './styles';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
  removePadding?: boolean;
}

const PageDefault: React.FC<Props> = ({ children, removePadding }) => {
  return (
    <>
      <Header />
      <Main removePadding={removePadding}>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
