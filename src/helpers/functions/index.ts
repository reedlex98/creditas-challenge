import { IOF, TAXADEJUROS } from '../constants'

export function calculaValorTotalAPagar(prazo: number, valorDoEmprestimo: number): number {
    return ((IOF / 100) + (TAXADEJUROS / 100) + (prazo / 1000) + 1) * valorDoEmprestimo
}

export function calculaValorDaParcela(valorTotalAPagar: number, prazo: number): number {
    return valorTotalAPagar / prazo
}