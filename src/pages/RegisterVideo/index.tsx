import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../../components/Header/Button';
import { useForm } from '../../hooks/useForm';
import Field from '../../components/Field';
import PageDefault from '../../components/PageDefault';
import videosRepository from '../../repositories/videos';
import CategoriesRepository from '../../repositories/categories';

interface Category {
  id?: number;
  name: string;
}

const RegisterVideo: React.FC = () => {
  const initialValues = {
    titulo: '',
    url: '',
    categoria: '',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categories, setCategories] = useState<Category[]>([]);
  const categoriesTitles = categories.map(category => category.name);
  const history = useHistory();

  useEffect(() => {
    CategoriesRepository.findAll()
      .then(response => {
        setCategories(response);
      })
      .catch(err => console.log(err));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { titulo, url, categoria } = values;
    const categoriaIdIndex = categories.findIndex(
      category => category.name === categoria,
    );

    const categoriaId = Number(categories[categoriaIdIndex].id);

    videosRepository
      .create({
        titulo,
        url,
        categoriaId,
      })
      .then(() => {
        history.push('/');
      });

    clearForm();
  }
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <form onSubmit={handleSubmit}>
        <Field
          fieldType="input"
          label="Titulo do vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <Field
          fieldType="input"
          label="Url"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <Field
          fieldType="input"
          label="Categorias"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoriesTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default RegisterVideo;
