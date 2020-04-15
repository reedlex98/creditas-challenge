import { FormActionTypes } from './actionTypes'
import { Garantia } from '../../helpers/enum'
export interface IAction {
    type: FormActionTypes,
    [key: string]: number | string,
}

export function updateParcelas(parcelas: number): IAction {
    return {
        type: FormActionTypes.UPDATE_PARCELAS,
        parcelas
    }
}

export function updateGarantia(garantia: Garantia): IAction {
    return {
        type: FormActionTypes.UPDATE_GARANTIA,
        garantia
    }
}

export function updateValorGarantia(valorGarantia: number): IAction {
    return {
        type: FormActionTypes.UPDATE_VALOR_GARANTIA,
        valorGarantia
    }
}

export function updateValorEmprestimo(valorEmprestimo: number): IAction {
    return {
        type: FormActionTypes.UPDATE_VALOR_EMPRESTIMO,
        valorEmprestimo
    }
}

export function calculaTotalAPagar(): IAction{
    return {
        type: FormActionTypes.CALCULA_TOTAL_A_PAGAR
    }
}

export function calculaValorDaParcela(): IAction{
    return {
        type: FormActionTypes.CALCULA_VALOR_DA_PARCELA
    }
}