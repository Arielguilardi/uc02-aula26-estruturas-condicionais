const comando = Number(prompt("1 - Ligar /  2 - Desligar: "))

const elementoImagem = document.createElement("img")

switch (comando) {
    case 1:
        elementoImagem.src = "./assents/on.png"
        break;
    case 2:
        elementoImagem.src = "./assents/off.png"
        break;

    default:
        break;
}
if (elementoImagem.scr != null) {
    document.body.appendChild(elementoImagem)
}