import config from '../config';

interface Video {
  id?: number;
  categoriaId: number;
  titulo: string;
  url: string;
}

async function create(video: Video): Promise<Video> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return fetch(`${config.API_URL}/videos`, {
    body: JSON.stringify(video),
    method: 'POST',
    headers,
  }).then(async response => {
    if (response.ok) {
      const res = await response.json();
      return res;
    }
    throw new Error('Não foi possível cadastrar o video');
  });
}

export default {
  create,
};
