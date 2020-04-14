import React, { Component } from 'react';
import NumberInput from '../NumberInput'
import SelectField from '../SelectField'
import SliderInput from '../SliderInput'
import {Garantia} from '../../../helpers/enum'

class CreditCalculatorForm extends Component {
    state = {
        parcelas: 24,
        garantia: Garantia.VEICULO,
        opcoesDeParcela: [24, 36, 48],
        valorGarantia: 5000,
        valorEmprestimo: 3000,
        minGarantia: 5000,
        maxGarantia: 3000000,
        minEmprestimo: 3000,
        maxEmprestimo: 100000,
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target

        if (name === "garantia") {
            this.setState(this.configuraStatePelaGarantia(value))
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    render() {
        return <form className="cc-form">
            <SelectField
                name="parcelas"
                onChange={this.handleChange}
                title="Número de parcelas"
                options={this.state.opcoesDeParcela}
                value={this.state.parcelas}
            />
            <SelectField
                name="garantia"
                onChange={this.handleChange}
                title="Garantia"
                options={[Garantia.IMOVEL, Garantia.VEICULO]}
                value={this.state.garantia}
            />
            <NumberInput
                name="valorGarantia"
                onChange={this.handleChange}
                title="Valor da Garantia"
                value={this.state.valorGarantia}
                max={this.state.maxGarantia}
                min={this.state.minGarantia}
            />
            <SliderInput
                name="valorGarantia"
                onChange={this.handleChange}
                value={this.state.valorGarantia}
                max={this.state.maxGarantia}
                min={this.state.minGarantia}
            />
            <NumberInput
                name="valorEmprestimo"
                onChange={this.handleChange}
                title="Valor do Emprestimo"
                value={this.state.valorEmprestimo}
                max={this.state.maxEmprestimo}
                min={this.state.minEmprestimo}
            />
            <SliderInput
                name="valorEmprestimo"
                onChange={this.handleChange}
                value={this.state.valorEmprestimo}
                max={this.state.maxEmprestimo}
                min={this.state.minEmprestimo}
            />
        </form>
    }
}

// const CreditCalculatorForm : React.FC = () => {
//     const [parcelas, setParcelas] = useState(24)
//     const [garantia, setGarantia] = useState<string>(Garantia.IMOVEL)
//     const [valorGarantia, setValorGarantia] = useState(5000)
//     const [valorEmprestimo, setValorEmprestimo] = useState(3000)
//     const [minGarantia, setMinGarantia] = useState(5000)
//     const [maxGarantia, setMaxGarantia] = useState(3000000)
//     const [minEmprestimo, setMinEmprestimo] = useState(3000)
//     const [maxEmprestimo, setMaxEmprestimo] = useState(100000)

//     return <form className="cc-form">
//         <SelectField name="parcelas" title="Número de parcelas" options={} />
//     </form>
// }

export default CreditCalculatorForm