const rocekts = [
    {country: 'Russia', launches: 32},
    {country: 'EUA', launches: 36},
    {country: 'China', launches: 15},
    {country: 'Japan', launches: 10}
]

const totallaunches = rocekts.reduce( (prevVal, elem) => prevVal + elem.launches, 0 )

console.log(totallaunches)