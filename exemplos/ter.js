//Sintaxe:
// condition ? expressionIfTrue : expressionIfFalse
let numero = Number(prompt("Digite seu numero:"));

function verificarParouImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Impar";
}
console.log(verificarParouImpar());
