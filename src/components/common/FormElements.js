import React from 'react';

export const renderInput = ({ input, label, type, meta: { touched, invalid, error } }) => (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <input className="form-control form-control-lg" {...input} type={type} />
        <div className="text-help" style={{ color: 'red' }}>
            {touched ? error : ''}
        </div>
    </div>
);
export const renderInputRegister = ({ input, label, type, placeholder, value, meta: { touched, invalid, error } }) => (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
      { label &&  <label>{label}</label>} 
        <input className="form-control" {...input} type={type} placeholder = {placeholder} />
        <div className="text-help" style={{ color: 'red' }}>
            {touched ? error : ''}
        </div>
    </div>
);