import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Categories, Category, BackHome } from './styles';
import CategoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';
import Field from '../../components/Field';
import Loading from '../../components/Loading';
import { Button } from '../../components/Header/Button';
import config from '../../config';

interface Category {
  id?: number;
  name: string;
  description: string;
  color: string;
}

function useForm() {
  const [category, setCategory] = useState<Category>({
    name: '',
    description: '',
    color: '#DB202C',
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  }

  function clearForm() {
    setCategory({
      name: '',
      description: '',
      color: category.color,
    });
  }

  return {
    category,
    handleChange,
    clearForm,
  };
}

const RegisterCategory: React.FC = () => {
  const { API_URL } = config;
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const { category, handleChange, clearForm } = useForm();

  useEffect(() => {
    setLoading(true);

    CategoriesRepository.findAll()
      .then(response => {
        setTimeout(() => {
          setCategories(response);
          setLoading(false);
        }, 1500);
      })
      .catch(err => console.log(err));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    await fetch(`${API_URL}/categorias`, {
      body: JSON.stringify(category),
      method: 'POST',
      headers,
    });

    clearForm();
    setCategories([...categories, category]);
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

      {loading && <Loading />}
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
