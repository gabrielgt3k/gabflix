import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import CategoriesRepository from '../../repositories/categories';

interface Video {
  id: number;
  categoriaId: number;
  titulo: string;
  url: string;
}

interface InitialData {
  id: number;
  name: string;
  description: string;
  color: string;
  videos: Video[];
}

const Home: React.FC = () => {
  const [initialData, setInitialData] = useState<InitialData[]>([
    {
      id: 0,
      name: 'string',
      description: 'string',
      color: 'string',
      videos: [
        {
          id: 0,
          categoriaId: 0,
          titulo: '',
          url: '',
        },
      ],
    },
  ]);

  useEffect(() => {
    CategoriesRepository.getAllWithVideos()
      .then(categoriesWithVideos => {
        setInitialData(categoriesWithVideos);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    initialData && (
      <PageDefault removePadding>
        <BannerMain
          videoTitle={initialData[0].videos[0].titulo}
          url={initialData[0].videos[0].url}
          videoDescription="Entrevista coletiva de imprensa do técnico Vanderlei Luxemburgo após a partida entre Palmeiras e Água Santa, válida pelo Campeonato Paulista de 2020."
        />

        {initialData.map((data, index) => {
          if (index === 0) {
            return <Carousel key={data.id} ignoreFirstVideo category={data} />;
          }

          return <Carousel key={data.id} category={data} />;
        })}
      </PageDefault>
    )
  );
};

export default Home;
