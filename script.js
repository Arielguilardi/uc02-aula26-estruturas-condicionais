const dividendo = Number(prompt("Informe o dividendo"))
const divisor = Number(prompt("Informe o divisor"))

console.log(`Dividendo  ${dividendo}`);
console.log(`Divisor  ${divisor}`);

let resultado = 0

if (dividendo != 0) {
    resultado = dividendo / divisor
} else {
    resultado = 1
}

const mensagem = `A divisão de ${dividendo} por ${divisor} é igual a ${resultado}`

const elementoMensagem = document.createTextNode("h1")
elementoMensagem.textContent = mensagem
document.body.append(elementoMensagem)
