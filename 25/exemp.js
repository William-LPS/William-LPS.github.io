document.getElementById("calc").addEventListener("click", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let resultado = document.getElementById("resultado");

  let altura = document.getElementById("altura").value;
  altura = parseFloat(altura.replace(",", "."));

  let peso = document.getElementById("peso").value;
  peso = parseFloat(peso.replace(",", "."));

  let imc = peso / (altura * altura);

  resultado.innerHTML =
    "Olá " +
    nome +
    "! Seu IMC é: " +
    imc.toFixed(1) +
    " e sua classificaçao é :";

  if (imc < 18.5) {
    resultado.innerHTML += "Abaixo do peso normal";
  } else if (imc < 25) {
    resultado.innerHTML += "Peso normal";
  } else if (imc < 30) {
    resultado.innerHTML += "Excesso de peso";
  } else if (imc < 35) {
    resultado.innerHTML += "Obesidade classe 1";
  } else if (imc < 40) {
    resultado.innerHTML += "Obesidade classe 2";
  } else if (imc >= 40) {
    resultado.innerHTML += "Obesidade classe 3";
  } else {
    resultado.innerHTML += "ERROR";
  }
});
