import React, { useContext, ChangeEvent } from 'react';
/** @jsx jsx */
import { FormContext } from './Form';
import { jsx } from '@emotion/core';

interface Props {
  name: string;
  label?: string;
  type?: 'Text' | 'TextArea' | 'Password';
}

export const Field: React.FC<Props> = ({ name, label, type = 'Text' }) => {
  const { setValue, touched, validate, setTouched } = useContext(FormContext);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (setValue) {
      setValue(name, e.currentTarget.value);
    }
    if (touched[name]) {
      if (validate) {
        validate(name);
      }
    }
  };

  const handleBlur = () => {
    if (setTouched) {
      setTouched(name);
    }
    if (validate) {
      validate(name);
    }
  };

  return (
    <FormContext.Consumer>
      {({ values, errors }) => (
        <div>
          {label && <label htmlFor={name}>{label}</label>}
          {(type === 'Text' || type === 'Password') && (
            <input
              type={type}
              id={name}
              value={values[name] === undefined ? '' : values[name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          {type === 'TextArea' && (
            <textarea
              id={name}
              value={values[name] === undefined ? '' : values[name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          {errors[name] &&
            errors[name].length > 0 &&
            errors[name].map((error: any) => <div key={error}>{error}</div>)}
        </div>
      )}
    </FormContext.Consumer>
  );
};
