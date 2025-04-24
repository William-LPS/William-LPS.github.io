document.getElementById("calc").addEventListener("click", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome");
  let resultado = document.getElementById("resultado");

  let altura = document.getElementById("altura").value;
  altura = parseFloat(altura.replace(",", "."));

  let peso = document.getElementById("peso").value;
  peso = parseFloat(peso.replace(",", "."));
  console.log(altura);

  let imc = peso / (altura * altura);

  resultado.innerHTML = `<br>
    " Ola! " + nome
    <br> seu Imc é <strong>${imc.toFixed(1)}</strong>
    e <br> sua classificação é: `;

  if (imc < 18.5) {
    resultado.innerHTML = "Abaixo do peso normal";
  } else if (imc < 25) {
    resultado.innerHTML = "Peso normal";
  } else if (imc < 30) {
    resultado.innerHTML = "Excesso de peso";
  } else if (imc < 35) {
    resultado.innerHTML = "Obesidade classe 1";
  } else if (imc < 40) {
    resultado.innerHTML = "Obesidade classe 2";
  } else if (imc >= 40) {
    resultado.innerHTML = "Obesidade classe 3";
  } else {
    resultado.innerHTML = "ERROR";
  }
});
