import React from 'react';

interface SliderInputProps {
    name: "valorGarantia" | "valorEmprestimo"
    onChange: (event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    value: number
    min: number,
    max: number,
}

const SliderInput : React.FC<SliderInputProps> = ({name, value, min, max, onChange}) => {
    return <div className="cc-form-control">
        <input name={name} type="range" value={value} min={min} max={max} onChange={onChange}/>
        <label htmlFor={name} style={{alignSelf: "center"}}>{`${min} - ${max}`}</label>
    </div>
}

export default SliderInput