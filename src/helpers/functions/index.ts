export function valorTotalAPagar(iof : number, taxaDeJuros : number, prazo : number, valorDoEmprestimo : number) : number {
    return ((iof / 100) + (taxaDeJuros / 100) + (prazo / 1000) + 1) * valorDoEmprestimo
}

export function valorDaParcela(valorTotalAPagar : number, prazo : number) : number {
    return valorTotalAPagar / prazo
}