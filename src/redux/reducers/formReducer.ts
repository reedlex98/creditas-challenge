import initialState, { ICreditCalculatorForm } from '../initialState'
import { FormActionTypes } from '../actions/actionTypes'
import { Garantia } from '../../helpers/enum'
import { IAction } from '../actions/actionCreators'
import {calculaValorDaParcela,calculaValorTotalAPagar} from '../../helpers/functions'

function corrigeValor(value: number, min: number, max: number): number {
    if (value >= min && value <= max) return value
    if (value < min) return min
    if (value > max) return max
    return value
}

function configuraStatePelaGarantia(garantia: Garantia, valorEmprestimo: number, valorGarantia: number): ICreditCalculatorForm {
    if (garantia === Garantia.VEICULO) {
        return {
            parcelas: 24,
            garantia: Garantia.VEICULO,
            opcoesDeParcela: [24, 36, 48],
            valorGarantia: corrigeValor(valorGarantia, 5000, 3000000),
            valorEmprestimo: corrigeValor(valorEmprestimo, 3000, 100000),
            minGarantia: 5000,
            maxGarantia: 3000000,
            minEmprestimo: 3000,
            maxEmprestimo: 100000,
            valorParcela: null,
            totalAPagar: null

        }
    }
    else {
        return {
            parcelas: 120,
            garantia: Garantia.IMOVEL,
            opcoesDeParcela: [120, 180, 240],
            valorGarantia: corrigeValor(valorGarantia, 50000, 100000000),
            valorEmprestimo: corrigeValor(valorEmprestimo, 30000, 4500000),
            minGarantia: 50000,
            maxGarantia: 100000000,
            minEmprestimo: 30000,
            maxEmprestimo: 4500000,
            valorParcela: null,
            totalAPagar: null
        }
    }
}

export default function formReducer(state: ICreditCalculatorForm = initialState.creditCalculatorForm, action: IAction) {
    switch (action.type) {
        case FormActionTypes.UPDATE_PARCELAS:
            return { ...state, parcelas: action.parcelas }
        case FormActionTypes.UPDATE_VALOR_GARANTIA:
            return { ...state, valorGarantia: action.valorGarantia }
        case FormActionTypes.UPDATE_VALOR_EMPRESTIMO:
            return { ...state, valorEmprestimo: action.valorEmprestimo }
        case FormActionTypes.UPDATE_GARANTIA:
            return configuraStatePelaGarantia(action.garantia as Garantia, state.valorEmprestimo, state.valorGarantia)
        case FormActionTypes.CALCULA_TOTAL_A_PAGAR:
            return { ...state, totalAPagar: calculaValorTotalAPagar(state.parcelas, state.valorEmprestimo)}
        case FormActionTypes.CALCULA_VALOR_DA_PARCELA:
            return { ...state, valorParcela: calculaValorDaParcela(state.totalAPagar as number, state.parcelas)}
        default:
            return state
    }
}