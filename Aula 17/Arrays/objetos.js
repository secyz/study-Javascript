let pessoa = {
    nome: "André",
    idade: 22,
    feliz: true,
    pets: ["cachorro", "papagaio"],
    carros: {
        peugot: {
            placa: "66436462",
            cor: "branco"
        },
        onix: {
            placa: "47454843",
            cor: "cinza"
        }
    },

    andar: function (km) {
        console.log(pessoa.nome+" andou "+km+" km")
    }
}

pessoa.andar(2)
console.log(pessoa.carros.onix)