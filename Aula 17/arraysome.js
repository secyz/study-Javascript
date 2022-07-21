// Exercicio //


function isprime ( value ) {
    for ( let i; i < value; i++) {
        if ( value % i == 0 ) {
            return false
        }
    }

    return value > 1
}

const array = [ 6, 8, 11, 14, 42 ]

console.log(array.some( isprime) )


const team = [
    { id: 12, name: "Topper Harley", pilot: true },
    { id: 15, name: "Ramada Thompsom", pilot: false },
    { id: 15, name: "Pete Thompsom", pilot: true },
    { id: 38, name: "Santos Dumont", pilot: true }

]

console.log(team.some( person => person.pilot ) )