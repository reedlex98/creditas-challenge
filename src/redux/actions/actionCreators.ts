import { FormActionTypes } from './actionTypes'
import { Garantia } from '../../helpers/enum'

export function updateParcelas(parcela : number) {
    return {
        type: FormActionTypes.UPDATE_PARCELAS,
        parcela
    }
}

export function updateGarantia(garantia : Garantia) {
    return {
        type: FormActionTypes.UPDATE_GARANTIA,
        garantia
    }
}

export function updateValorGarantia(valorGarantia : number) {
    return {
        type: FormActionTypes.UPDATE_VALOR_GARANTIA,
        valorGarantia
    }
}

export function updateValorEmprestimo(valorEmprestimo : number) {
    return {
        type: FormActionTypes.UPDATE_VALOR_EMPRESTIMO,
        valorEmprestimo
    }
}

export function updateMinGarantia(minGarantia : number) {
    return {
        type: FormActionTypes.UPDATE_MIN_GARANTIA,
        minGarantia
    }
}

export function updateMaxGarantia(maxGarantia : number) {
    return {
        type: FormActionTypes.UPDATE_MAX_GARANTIA,
        maxGarantia
    }
}

export function updateMinEmprestimo(minEmprestimo : number) {
    return {
        type: FormActionTypes.UPDATE_MIN_EMPRESTIMO,
        minEmprestimo
    }
}

export function updateMaxEmprestimo(maxEmprestimo : number) {
    return {
        type: FormActionTypes.UPDATE_MAX_EMPRESTIMO,
        maxEmprestimo
    }
}