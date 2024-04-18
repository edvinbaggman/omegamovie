'use client';

import React from 'react';
import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  options: number[];
  className?: string;
  inputClassName?: string;
}

const FormSelect = ({
  label,
  name,
  options,
  className = '',
  inputClassName = '',
}: Props) => {
  const [field, meta] = useField({ name });

  const isPlaceholder = !field.value;

  return (
    <div className={className}>
      <label htmlFor={name} />
      <select
        className={`w-full border-2 focus:outline-neutral-600 pl-3 h-12 ${
          meta.touched && meta.error && 'border-red-500'
        } ${isPlaceholder && 'text-gray-400'} ${inputClassName} `}
        {...field}
      >
        <option defaultChecked value={''}>
          {label}
        </option>
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
      <p className='pl-2 text-red-500 h-6'>
        {meta.touched && meta.error && meta.error}
      </p>
    </div>
  );
};

export default FormSelect;
