import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Field from '../../components/Field';

interface Category {
  name: string;
  description: string;
  color: string;
}

const RegisterCategory: React.FC = () => {
  const [category, setCategory] = useState<Category>({
    name: '',
    description: '',
    color: '#7159C1',
  });
  const [categories, setCategories] = useState<Category[]>([]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
          name="name"
          value={category.name}
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

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {categories.map((categoryArr, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoryArr.name}${index}`}>{categoryArr.name}</li>
        ))}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default RegisterCategory;
