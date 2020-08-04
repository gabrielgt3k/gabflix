import { useState, ChangeEvent } from 'react';

interface UseForm {
  values: any;
  handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void;
  clearForm(): void;
}

export function useForm(inicialValues: any): UseForm {
  const [values, setValues] = useState(inicialValues);

  function setValue(key: any, value: any) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = event.target;

    setValue(name, value);
  }

  function clearForm() {
    setValues(inicialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
