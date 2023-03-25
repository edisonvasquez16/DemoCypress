class EndPoints {

    api = 'http://localhost:5000'
    paths = {
        opetarionAdd: "/Calculator/Add",
        opetarionSubstract: "/Calculator/Substract",
        opetarionMultiply: "/Calculator/Multiply",
        opetarionDivide: "/Calculator/Divide",
        deleteHistory: "/Calculator/DeleteHistory",
        getHistory: "/Calculator/GetHistory",
        setMaxHistory: "/Calculator/SetMaxHistory"
    }
}

module.exports = new EndPoints()