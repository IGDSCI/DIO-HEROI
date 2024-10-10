var nome = "Gustavo"
var experiencia = 10001
var nivel

if (experiencia < 1000){
    nivel = "Ferro"
} else if (1001 <= experiencia && experiencia <= 2000){
    nivel = "Bronze"
} else if (2001 <= experiencia && experiencia <= 5000){
    nivel = "Prata"
} else if (5001 <= experiencia && experiencia <= 7000){
    nivel = "Ouro"
} else if (7001 <= experiencia && experiencia <= 8000){
    nivel = "Platina"
} else if (8001 <= experiencia && experiencia <= 9000){
    nivel = "Ascendente"
} else if (9001 <= experiencia && experiencia <= 10000){
    nivel = "Imortal"
} else{
    nivel = "Radiante"
}

console.log('O Herói de nome ' + nome + ' está no nível ' + nivel)