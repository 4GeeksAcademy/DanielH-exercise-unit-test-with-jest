


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;        
};

// Función flecha para convertir de euros a dólares
const fromEuroToDollar = (euros) => euros * oneEuroIs.USD;

// Función flecha para convertir de yenes a libras
const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs.JPY;    
    return euros * oneEuroIs.GBP;       
};

module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound };