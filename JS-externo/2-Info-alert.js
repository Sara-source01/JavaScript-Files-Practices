const nome = "sara" // ou var nome = "sara"
const ano = 1992
const cidade = "Rio de Janeiro"

console.warn(nome) //console.log(nome) a mwesma coisa mas com warn mostrará no console de inspecionar símbolo de aviso "warning"
console.log(ano)
console.error(cidade) //no console de inspecionar mostrará no console de inspecionar símbolo de um erro "X"
//alert("Meu nome é " + nome + ", moro em " + cidade + "e nasci em " + ano)
alert(`Meu nome é  ${nome}, moro em ${cidade} e nasci em ${ano}.`)
