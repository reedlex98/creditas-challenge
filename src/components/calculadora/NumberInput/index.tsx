import React from 'react';

interface NumberInputProps {
    name: "valorGarantia" | "valorEmprestimo",
    min: number,
    max: number,
    title: string,
    onChange: (event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    value: number
}

const NumberInput: React.FC<NumberInputProps> = ({ name, title, onChange, value, min, max }) => {
    return <div className="cc-form-control">
        <label htmlFor={name}>{title}</label>
        <input name={name} type="number" value={value} min={min} max={max} onChange={onChange}/>
    </div>
}

export default NumberInput