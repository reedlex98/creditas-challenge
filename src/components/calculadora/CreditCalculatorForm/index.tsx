import React, { Component } from 'react';
import NumberInput from '../NumberInput'
import SelectField from '../SelectField'
import SliderInput from '../SliderInput'
import { Garantia } from '../../../helpers/enum'
import { connect } from 'react-redux'
import { IState, ICreditCalculatorForm } from '../../../redux/initialState'
import { updateGarantia, updateParcelas, updateValorEmprestimo, updateValorGarantia } from '../../../redux/actions/actionCreators'

interface ICreditCalculatorFormProps extends ICreditCalculatorForm {
    updateGarantia: (garantia: Garantia) => void,
    updateParcelas: (parcela: number) => void,
    updateValorEmprestimo: (valorEmprestimo: number) => void,
    updateValorGarantia: (valorGarantia: number) => void,
}

class CreditCalculatorForm extends Component<ICreditCalculatorFormProps> {

    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target
        switch (name) {
            case "parcelas":
                this.props.updateParcelas(parseInt(value))
                break;
            case "garantia":
                this.props.updateGarantia(value as Garantia)
                break;
            case "valorGarantia":
                this.props.updateValorGarantia(value ? parseInt(value) : 0)
                break;
            case "valorEmprestimo":
                this.props.updateValorEmprestimo(value ? parseInt(value) : 0)
                break;
        }
    }

    render() {
        return <form className="cc-form">
            <SelectField
                name="parcelas"
                onChange={this.handleChange}
                title="Número de parcelas"
                options={this.props.opcoesDeParcela}
                value={this.props.parcelas}
            />
            <SelectField
                name="garantia"
                onChange={this.handleChange}
                title="Garantia"
                options={[Garantia.IMOVEL, Garantia.VEICULO]}
                value={this.props.garantia}
            />
            <NumberInput
                name="valorGarantia"
                onChange={this.handleChange}
                title="Valor da Garantia"
                value={this.props.valorGarantia}
                max={this.props.maxGarantia}
                min={this.props.minGarantia}
            />
            <SliderInput
                name="valorGarantia"
                onChange={this.handleChange}
                value={this.props.valorGarantia}
                max={this.props.maxGarantia}
                min={this.props.minGarantia}
            />
            <NumberInput
                name="valorEmprestimo"
                onChange={this.handleChange}
                title="Valor do Emprestimo"
                value={this.props.valorEmprestimo}
                max={this.props.maxEmprestimo}
                min={this.props.minEmprestimo}
            />
            <SliderInput
                name="valorEmprestimo"
                onChange={this.handleChange}
                value={this.props.valorEmprestimo}
                max={this.props.maxEmprestimo}
                min={this.props.minEmprestimo}
            />
        </form>
    }
}

const mapStateToProps = ({ creditCalculatorForm }: IState) => ({ ...creditCalculatorForm })
const mapDispatchToProps = {
    updateGarantia,
    updateParcelas,
    updateValorEmprestimo,
    updateValorGarantia
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCalculatorForm)