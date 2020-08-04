/* eslint-disable react/prop-types */
import React, { ChangeEvent } from 'react';
import { FormFieldWrapper, Label, Input } from './styles';

interface Category {
  id?: number;
  name: string;
}

interface FieldProps {
  fieldType: 'input' | 'textarea';
  label: string;
  name: string;
  value: string;
  type?: string;
  suggestions?: string[];
  onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

const Field: React.FC<FieldProps> = ({
  fieldType,
  label,
  name,
  value,
  type,
  onChange,
  suggestions,
}) => {
  const fieldId = `id_${name}`;
  const hasSuggestions = Boolean(suggestions?.length);
  return (
    <FormFieldWrapper>
      {fieldType === 'input' ? (
        <Input
          id={fieldId}
          as={fieldType}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'on' : 'off'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
      ) : (
        <Input as={fieldType} name={name} value={value} onChange={onChange} />
      )}
      <Label>{label}</Label>
      {hasSuggestions && (
        <datalist id={`suggestionFor_${fieldId}`}>
          {suggestions?.map(suggestion => (
            <option key={`suggestionFor_${fieldId}_option${suggestion}`}>
              {suggestion}
            </option>
          ))}
        </datalist>
      )}
    </FormFieldWrapper>
  );
};

export default Field;
