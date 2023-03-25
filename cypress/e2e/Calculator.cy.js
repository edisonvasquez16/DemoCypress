import SeeThatValue from '../questions/SeeThatValue'
import CalculatorPage from '../ui/CalculatorPage'

describe('SIIGO CALCULATOR TEST', function () {

    beforeEach('CALCULATOR CAN BE OPEN', function () {
        CalculatorPage
            .visit()
            .validatePage()
        cy.fixture('addExample')
            .then(numbers => {
                this.numbers = numbers;
            })
    })

    describe('TEST OF CALCULATOR OPERATIONS', function () {

        it('User can execute add operation', function () {
            cy.intercept('POST', '/Calculator/Add', {
                fixture: 'addCalculateResponse.json'
            }).as('modify-add-calculate')

            CalculatorPage
                .selectNumber(this.numbers.number1)
                .selectAddOption()
                .selectNumber(this.numbers.number2)
                .selectCalculateOption()

            SeeThatValue
                .equals(70)
        })

        it('User can execute substract operation', function () {
            CalculatorPage
                .selectNumber(this.numbers.number1)
                .selectSubstractOption()
                .selectNumber(this.numbers.number2)
                .selectCalculateOption()

            SeeThatValue
                .equals(30)
        })

        it('User can execute multiply operation', function () {
            CalculatorPage
                .selectNumber(this.numbers.number1)
                .selectMultiplyAddOption()
                .selectNumber(this.numbers.number2)
                .selectCalculateOption()

            SeeThatValue
                .equals(1000)
        })

        it('User can execute division operation', function () {
            CalculatorPage
                .selectNumber(this.numbers.number1)
                .selectDivOption()
                .selectNumber(this.numbers.number2)
                .selectCalculateOption()

            SeeThatValue
                .equals(2.5)
        })

        it.skip('User can execute multiples operations', function () {
            CalculatorPage
                .selectNumber('150')
                .selectAddOption()
                .selectNumber('260')
                .selectCalculateOption()
                .selectMultiplyAddOption()
                .selectNumber('2')
                .selectCalculateOption()
                .selectSubstractOption()
                .selectNumber('420')
                .selectCalculateOption()
                .selectDivOption()
                .selectNumber('4')
                .selectCalculateOption()

            SeeThatValue
                .equals(100)
        })
    })

    describe('TEST OF CALCULATOR OPERATIONS ARRAY', function () {

        const values = ['150', '+', '260', '*', '2', '-', '420', '/', '4', '*', '2', '/', '4']

        it('User can execute multiples operations with array', function () {
            values.forEach(function callback(value, index) {
                CalculatorPage
                    .selectNumber(value)
                    .selectCalculateOptionFor(index)
            })
            CalculatorPage
                .getResultValue()
                .should('contains', 50)
        })
    })

})
