import React from 'react'
import './styles.css'
import CreditCalculatorForm from '../CreditCalculatorForm'

function CreditCalculator() {
    return <div className="cc-container">
        <div className="cc-title">
            Realize uma simulação de crédito utilizando seu bem como garantia.
        </div>
        <div className="cc-body">
            <CreditCalculatorForm />
        </div>
    </div>
}

export default CreditCalculator