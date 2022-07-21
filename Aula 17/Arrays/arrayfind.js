const pizzas = [

    "calabresa",
    "mista",
    "mussarela",
    "portuguesa",
    "4 queijos"
]

console.log(pizzas.find( p => p.startsWith ("m")))



// Exercicio //

const fruits = [
    { name: "maçã", quantiny: 10 },
    { name: "banana", quantiny: 6 },
    { name: "laranja", quantiny: 4 },
    { name: "jaca", quantiny: 8 }
]

console.log(fruits.find( fruit => fruit.name == "laranja"))