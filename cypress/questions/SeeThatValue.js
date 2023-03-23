import CalculatorPage from "../ui/CalculatorPage"

class SeeThatValue {

    equals(value) {
        CalculatorPage.elements.result()
         .invoke('val')
         .should('contain', value)            
    }
}

module.exports = new SeeThatValue()