import config from '../config';

interface Video {
  id: number;
  categoriaId: number;
  titulo: string;
  url: string;
}

interface WithVideos {
  id: number;
  name: string;
  description: string;
  color: string;
  videos: Video[];
}

interface Category {
  id?: number;
  name: string;
  description: string;
  color: string;
}

async function getAllWithVideos(): Promise<WithVideos[]> {
  return fetch(`${config.API_URL}/categorias?_embed=videos`).then(
    async response => {
      if (response.ok) {
        const res = await response.json();
        return res;
      }
      throw new Error('Não foi possível pegar os dados');
    },
  );
}

async function findAll(): Promise<Category[]> {
  return fetch(`${config.API_URL}/categorias`).then(async response => {
    if (response.ok) {
      const res = await response.json();
      return res;
    }
    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  getAllWithVideos,
  findAll,
};
