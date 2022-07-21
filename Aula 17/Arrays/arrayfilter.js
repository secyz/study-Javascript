const array = [2, 6, 1, 10, 34, 50 , 200, 5, 6, 5, 2]

const filterarray= array.filter( ( elem, index, arr) => arr.indexOf( elem ) == index)

console.log(filterarray)