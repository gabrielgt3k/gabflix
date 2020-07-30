/* eslint-disable react/prop-types */
import React, { ChangeEvent } from 'react';

interface FieldProps {
  fieldType: 'input' | 'textarea';
  label: string;
  name: string;
  value: string | number;
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
}) =>
  fieldType === 'input' ? (
    <div>
      <label htmlFor={name}>
        {label}
        <input name={name} type={type} value={value} onChange={onChange} />
      </label>
    </div>
  ) : (
    <div>
      <label htmlFor={name}>
        {label}
        <textarea name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );

export default Field;
