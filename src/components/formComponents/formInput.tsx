'use client';

import React from 'react';
import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type: string;
  className?: string;
  inputClassName?: string;
}

const FormInput = ({
  label,
  name,
  type,
  className = '',
  inputClassName = '',
}: Props) => {
  const [field, meta] = useField({ name });

  return (
    <div className={className}>
      <label htmlFor={name} />
      <input
        type={type}
        placeholder={label}
        className={`w-full border-2 focus:outline-neutral-600 pl-3 h-12 ${
          meta.touched && meta.error && 'border-red-500'
        } ${inputClassName} `}
        {...field}
      />
      <p className='pl-2 text-red-500 h-6'>
        {meta.touched && meta.error && meta.error}
      </p>
    </div>
  );
};

export default FormInput;
