console.log( [ 1, 4, 3, 9, NaN].includes(NaN))

// Exercicio //

const people = [ "Adamastor", "Joana", "Mauricio", "Lalau"]

console.log(people.includes( "Joana"))

// Exercicio 2 //

const people2 = [
    { id: 3, name: "Adamastor", age: 23, group: "developer" },
    { id: 1, name: "Joana", age: 25, group: "admin" },
    { id: 2, name: "Mauricio", age: 30, group: "design"},
    { id: 4, name: "Lalau", age: 28, group: "user"}
]

console.log( people2.filter(p2 => p2.name.includes("J")))