

// Importar la función sum del archivo app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     // Dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // Esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });
//     let total = sum(14, 9);
//     let total = sum(14, 9);

test("One euro should be 1.07 dollars", function () {

    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(expected);
})

test("One yen should be 0.006 pound", function () {
    
    const { fromYenToPound } = require('./app.js');


    const yen = fromYenToPound(500);


    const expected = 500 * 0.006;

    expect(fromYenToPound(500)).toBe(expected);
})
test("One dollar should be 127.9 yen", function () {

    const { fromDollarToYen } = require('./app.js');


    const yen = fromDollarToYen(4);


    const expected = 4 * 127.9;


    expect(fromDollarToYen(4)).toBe(expected);
})