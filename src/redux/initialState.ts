import { Garantia } from '../helpers/enum'

export interface ICreditCalculatorForm {
    parcelas: number,
    garantia: Garantia,
    opcoesDeParcela: number[],
    valorGarantia: number,
    valorEmprestimo: number,
    minGarantia: number,
    maxGarantia: number,
    minEmprestimo: number,
    maxEmprestimo: number,
}

export interface IState {
    creditCalculatorForm: ICreditCalculatorForm
}

const state: IState = {
    creditCalculatorForm: {
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
}

export default state