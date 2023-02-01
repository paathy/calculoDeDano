const atacante = prompt("Qual o nome do personagem atacante?")
const poderDeAtaque = prompt("Qual seu poder de ataque?")

const defensor = prompt("Qual o nome do personagem defensor?")
let pontosDevida = prompt("Quantos pontos de vida ele possui?")
const poderDeDefesa = prompt("Qual o seu poder de defesa?")
const possuiEscudo = prompt("Ele possui escudo? (Sim/Não) ")

let danoCausado = 0

if( poderDeAtaque > poderDeDefesa && possuiEscudo === "Não" ) {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if ( poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDevida -= danoCausado

alert(
    atacante + " causou " + danoCausado + " pontos de danos em " + defensor
)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de vida: " + pontosDevida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)