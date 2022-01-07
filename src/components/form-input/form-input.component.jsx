import React from "react";

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...OtherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...OtherProps} />
      {label ? (
        <label
          className={`${
            OtherProps.value.lenght ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;