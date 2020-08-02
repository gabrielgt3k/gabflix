import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Loading, Categories, Category, BackHome } from './styles';
import PageDefault from '../../components/PageDefault';
import Field from '../../components/Field';
import { Button } from '../../components/Header/Button';

import egirl from '../../assets/ju-egirl.png';
import souto from '../../assets/souto.png';
import paulo from '../../assets/paulo.png';
import boss from '../../assets/boss.png';

interface Category {
  id?: number;
  name: string;
  description: string;
  color: string;
}

const RegisterCategory: React.FC = () => {
  const [category, setCategory] = useState<Category>({
    name: '',
    description: '',
    color: '#DB202C',
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  }

  useEffect(() => {
    async function loadData(): Promise<void> {
      setLoading(true);
      const URL = 'https://gabflix.herokuapp.com/';
      const response = await fetch(`${URL}/categorias`);
      const json = await response.json();
      setTimeout(() => {
        setLoading(false);
        setCategories(json);
      }, 1500);
    }
    loadData();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData();
    data.append('name', category.name);
    data.append('description', category.description);
    data.append('color', category.color);

    const URL = 'https://gabflix.herokuapp.com/';

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    await fetch(`${URL}/categorias`, {
      body: JSON.stringify(category),
      method: 'POST',
      headers,
    });

    setCategories([...categories, category]);
    setCategory({
      name: '',
      description: '',
      color: category.color,
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>

      <form onSubmit={handleSubmit}>
        <Field
          fieldType="input"
          label="Nome da categoria"
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
        />
        <Field
          fieldType="textarea"
          label="Descrição"
          type="textarea"
          name="description"
          value={category.description}
          onChange={handleChange}
        />
        <Field
          fieldType="input"
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      {loading && (
        <Loading>
          <span>Carregando...</span>
          <div>
            <img src={egirl} alt="egirl" />
            <img src={souto} alt="souto" />
            <img src={paulo} alt="paulo" />
            <img src={boss} alt="boss" />
          </div>
        </Loading>
      )}
      <Categories>
        {!loading && <h1>Categorias</h1>}
        <ul>
          {categories.map(cat => (
            <Category key={cat.id} color={cat.color}>
              <span>{cat.name}</span>
            </Category>
          ))}
        </ul>
      </Categories>
      <BackHome as={Link} to="/">
        <FiChevronLeft size={20} />
        <span>Ir para home</span>
      </BackHome>
    </PageDefault>
  );
};

export default RegisterCategory;
