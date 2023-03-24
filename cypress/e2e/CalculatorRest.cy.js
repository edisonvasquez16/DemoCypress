import EndPoints from "../paths/EndPoints"

describe('SIIGO CALCULATOR REST', function() {

    const api = EndPoints.api
    const format = 'application/json'
        
    beforeEach('Charge values', function() {
        cy.fixture('numbersOfCalculate')
            .then(values => {
                cy.wrap(JSON.stringify(values)).as('jsonBody')
            })
    })

    describe('TEST CALCULATE OPERATIONS', function() {

        it('Add with RestCalculator ', function() {
            cy.request({
                method: 'POST',
                url: api.concat(EndPoints.paths.opetarionAdd),
                headers: {'Content-Type': format},
                body: this.jsonBody

            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.value).to.equal(70)
                expect(response.body.error).to.equal(null)
            })
        })

        it('Substract with RestCalculator ', function() {
            cy.request({
                method: 'POST',
                url: api.concat(EndPoints.paths.opetarionSubstract),
                headers: {'Content-Type': format},
                body: this.jsonBody

            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.value).to.equal(30)
                expect(response.body.error).to.equal(null)
            })
        })

        it('Multiply with RestCalculator ', function() {
            cy.request({
                method: 'POST',
                url: api.concat(EndPoints.paths.opetarionMultiply),
                headers: {'Content-Type': format},
                body: this.jsonBody

            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.value).to.equal(1000)
                expect(response.body.error).to.equal(null)
            })
        })

        it('Divide with RestCalculator ', function() {
            cy.request({
                method: 'POST',
                url: api.concat(EndPoints.paths.opetarionDivide),
                headers: {'Content-Type': format},
                body: this.jsonBody
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.value).to.equal(2.5)
                expect(response.body.error).to.equal(null)
            })
        })
    })

    describe('OTHER OPERATIONS', function() {

        it('Delete history RestCalculator ', function() {
            cy.request({
                method: 'DELETE',
                url: api.concat(EndPoints.paths.deleteHistory)
            }).then((response) => {
                expect(response.status).to.equal(200)
            })
        })

        it('Get history RestCalculator ', function() {
            cy.request({
                method: 'GET',
                url: api.concat(EndPoints.paths.getHistory)
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.history).to.contain(1000)
            })
        })

        it('Put max history RestCalculator ', function() {
            cy.request({
                method: 'PUT',
                url: api.concat(EndPoints.paths.setMaxHistory),
                headers: {'Content-Type': format},
                body: {"value": 10}
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.value).to.equal(10)
                expect(response.body.error).to.equal(null)
            })
        })
    })

})