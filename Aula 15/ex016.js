let num = [5, 8 , 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log()
console.log(`Os vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1 ) {
    console.log('[ERRO] VALOR NÃO ENCONTRADO !')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}






// let familia= ['Zildo: 73 Anos, Nascido em 1949.', 'Vladia: 43 Anos, Nascida em 1979.', 'Vanessa: 41 Anos, Nascida em 1981.', 'Stefano: 34 Anos, Nascido em 1988.', 'Valeska: 33 Anos, Nascida em 1989', 'Vinicius: 15 Anos, Nascido em 2007.', 'Gabriel: 13 Anos, Nascido em 2009.']
 
//     console.log(`Membros da familia:`)

//      for (let fml in familia) {
//     console.log(familia[fml])
// }




// console.log('Horarios de apresentação');
// for (let hro in horarios) {
//     console.log(`${hro} Horario: ${horarios[hro]}`)
// }



// console.log('horarios de apresentação')
// for (let hro =1; hro<horarios.length; hro++) {
//     console.log(`${hro} Horario: ${horarios[hro]}`);
// }




// for (let pos= 0; pos< valores.length; pos++) {
//     valores.sort()
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

// let num = [2, 5, 8, 6]
// num.sort()
// num.push(1)
// console.log(num)
// console.log(`O vetor tem ${num.length} posições`);
// console.log(`O primeiro valor do vetor é ${num[0]}`)

// num[3] = 6
// num.push(5)
// num.length
// num.sort()
