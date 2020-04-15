import React from 'react'
import './styles.css'
import CreditCalculatorForm from '../CreditCalculatorForm'
import CreditRequestCard from '../CreditRequestCard'

function CreditCalculator() {
    return <div className="cc-container">
        <div className="cc-title">
            Realize uma simulação de crédito utilizando seu bem como garantia.
        </div>
        <div className="cc-body">
            <CreditCalculatorForm />
            <CreditRequestCard />
        </div>
    </div>
}

export default CreditCalculator