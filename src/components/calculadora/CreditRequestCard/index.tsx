import React, {useEffect} from 'react';
import { IState } from '../../../redux/initialState'
import {calculaTotalAPagar, calculaValorDaParcela} from '../../../redux/actions/actionCreators'
import {connect } from 'react-redux'
import {TAXADEJUROS} from '../../../helpers/constants'


interface ICreditRequestCardProps {
    totalAPagar: number | null,
    valorParcela: number | null,
    parcelas: number,
    valorEmprestimo: number,
    valorGarantia: number,
    calculaTotalAPagar: () => void,
    calculaValorDaParcela: () => void,
}

const CreditRequestCard : React.FC<ICreditRequestCardProps> = ({
    parcelas,
    valorEmprestimo,
    valorGarantia,
    totalAPagar,
    valorParcela,
    calculaTotalAPagar,
    calculaValorDaParcela
    }) => {

    useEffect( () => {
        calculaTotalAPagar()
        calculaValorDaParcela()
    }, [parcelas, valorEmprestimo, valorGarantia, calculaTotalAPagar, calculaValorDaParcela])

    return <div className="cc-request-card">
        <div className="cc-rc-group">
            <span className="parcel-value">Valor da Parcela</span>
            <span className="value">
                R$ <span className="text-green"> {valorParcela?.toFixed(2).replace(".", ",")} </span>
            </span>
        </div>
        <div className="cc-rc-group">
            <span>Total a pagar</span>
            <span>
                R$ {totalAPagar?.toFixed(2).replace(".", ",")}
            </span>
        </div>
        <div className="cc-rc-group">
            <span>Taxa de juros (mês)</span>
            <span>
                {`${TAXADEJUROS}`.replace(".", ",")} %
            </span>
        </div>
        <button className="btn-solicitar">
            SOLICITAR
        </button>
    </div>
}

const mapStateToProps = ({ creditCalculatorForm: {totalAPagar, valorParcela, parcelas, valorEmprestimo, valorGarantia} }: IState) => ({
    totalAPagar,
    valorParcela,
    parcelas,
    valorEmprestimo,
    valorGarantia
})

const mapDispatchToProps = {
    calculaTotalAPagar,
    calculaValorDaParcela
}


export default connect(mapStateToProps, mapDispatchToProps)(CreditRequestCard)