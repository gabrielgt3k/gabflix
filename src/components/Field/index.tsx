/* eslint-disable react/prop-types */
import React, { ChangeEvent } from 'react';
import { FormFieldWrapper, Label, Input } from './styles';

interface FieldProps {
  fieldType: 'input' | 'textarea';
  label: string;
  name: string;
  value: string;
  type: string;
  onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

const Field: React.FC<FieldProps> = ({
  fieldType,
  label,
  name,
  value,
  type,
  onChange,
}) => (
  <FormFieldWrapper>
    {fieldType === 'input' ? (
      <Input
        as={fieldType}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    ) : (
      <Input as={fieldType} name={name} value={value} onChange={onChange} />
    )}
    <Label>{label}</Label>
  </FormFieldWrapper>
);

export default Field;
