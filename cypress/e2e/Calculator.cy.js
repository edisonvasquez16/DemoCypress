import SeeThatValue from '../questions/SeeThatvalue'
import CalculatorPage from '../ui/CalculatorPage'

describe('SIIGO CALCULATOR TEST', function () {

    beforeEach('Calculator can be open', function () {
        CalculatorPage
            .instance()
            .visit()
            .validatePage()
        cy.fixture('addExample')
            .then(numbers => {
                this.numbers = numbers;
            })
    })

    describe('Test of calculator operations', function () {

        it('User can execute add operation', function () {
            CalculatorPage
                .instance()
                .selectNumber(this.numbers.number1)
                .selectAddOption()
                .selectNumber(this.numbers.number2)
                .selectCalculateOption()

            SeeThatValue
                .equals(32)
        })

        it('User can execute substract operation', function () {
            CalculatorPage
                .instance()
                .selectNumber('900')
                .selectSubstractOption()
                .selectNumber('400')
                .selectCalculateOption()

            SeeThatValue
                .equals(500)
        })

        it('User can execute multiply operation', function () {
            CalculatorPage
                .instance()
                .selectNumber('45')
                .selectMultiplyAddOption()
                .selectNumber('4')
                .selectCalculateOption()

            SeeThatValue
                .equals(180)
        })

        it('User can execute division operation', function () {
            CalculatorPage
                .instance()
                .selectNumber('80')
                .selectDivOption()
                .selectNumber('2')
                .selectCalculateOption()

            SeeThatValue
                .equals(40)
        })

        it.skip('User can execute multiples operations', function () {
            CalculatorPage
                .instance()
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

    describe('Test of calculator operations array', function () {

        const values = ['150', '+', '260', '*', '2', '-', '420', '/', '4', '*', '2', '/', '4']

        it('User can execute multiples operations with array', function () {
            values.forEach(function callback(value, index) {
                CalculatorPage
                    .instance()
                    .selectNumber(value)
                    .selectCalculateOptionFor(index)
            })
            SeeThatValue
                .equals(50)
        })
    })

})
