import React from 'react';
import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import data from '../../data/dados_iniciais.json';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription="Entrevista coletiva de imprensa do técnico Vanderlei Luxemburgo após a partida entre Palmeiras e Água Santa, válida pelo Campeonato Paulista de 2020."
      />
      <Carousel ignoreFirstVideo category={data.categorias[0]} />
      <Carousel category={data.categorias[1]} />
      <Carousel category={data.categorias[2]} />
      <Carousel category={data.categorias[3]} />
      <Footer />
    </>
  );
};

export default Home;
