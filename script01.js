const numeroMes = Number(prompt('Informe o número do mes'))

let nomeMes = 0

// if (numeroMes === 1) {
//     nomeMes = "Janeiro"
// } else if (numeroMes === 2) {
//     nomeMes = "Fevereiro"
// } else if (numeroMes === 3) {
//     nomeMes = "Março"
// } else if (numeroMes === 4) {
//     nomeMes = "Abril"
// } else if (numeroMes === 5) {
//     nomeMes = "Maio"
// } else if (numeroMes === 6) {
//     nomeMes = "Junho"
// } else if (numeroMes === 7) {
//     nomeMes = "Julho"
// } else if (numeroMes === 8) {
//     nomeMes = "Agosto"
// } else if (numeroMes === 9) {
//     nomeMes = "Setembro"
// } else if (numeroMes === 10) {
//     nomeMes = "Outubro"
// } else if (numeroMes === 11) {
//     nomeMes = "Novembro"
// } else if (numeroMes === 12) {
//     nomeMes = "Dezembro"
// } else {
//     nomeMes = "Mes invalido"
// }


switch (nomeMes) {
    case 1: nomeMes = "Janeiro"
        break;
    case 2: nomeMes = "Fevereiro"
        break;
    case 3: nomeMes = "Março"
        break;
    case 4: nomeMes = "Abril"
        break;
    case 5: nomeMes = "Maio"
        break;
    case 6: nomeMes = "Junho"
        break;
    case 7: nomeMes = "Julho"
        break;
    case 8: nomeMes = "Agosto"
        break;
    case 9: nomeMes = "Setembro"
        break;
    case 10: nomeMes = "Outubro"
        break;
    case 11: nomeMes = "Novembro"
        break;
    case 12: nomeMes = "Dezembro"
        break;

    default: nomeMes = "Mes invalido"
        break;
}


const elementoMensagem = document.createTextNode("h1")
elementoMensagem.textContent = nomeMes
document.body.append(elementoMensagem)
