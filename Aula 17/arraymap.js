// map()

// const numbers = [3,2,7,1,8,9,10,22];
// numbers.sort()

// const doubledNumbers = numbers.map( (elem ) => elem *2 )

// console.log(doubledNumbers)


// conversor de medidas //
const fahrenheit = [ 0, 2, 20, 120, 50, 32, 75 ]

const celsius = fahrenheit.map( (elem) => Math.round( elem - 32 * 5/9 ))

console.log(celsius)