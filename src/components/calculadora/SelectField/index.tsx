import React from 'react';

interface SelectFieldProps {
    name: "parcelas" | "garantia"
    title: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    options: (string | number)[],
    value: string | number
}

const SelectField: React.FC<SelectFieldProps> = ({ name, title, onChange, value, options }) => {
    return <div className="cc-form-control">
        <label htmlFor={name}>{title}</label>
        <select name={name} id={name} value={value} onChange={onChange} >
            {options.map((option: string | number) => <option key={option} value={option}>{option}</option>)}
        </select>
    </div>
}

export default SelectField