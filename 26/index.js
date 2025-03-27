function imc() {
  let nome = document.querySelector("#id_nome").value;
  let altura = document.querySelector("#id_altura").value;
  let peso = document.querySelector("#id_peso").value;
  let resultado = document.querySelector("#resultado");

  peso = parseFloat(peso.replace(",", "."));
  altura = parseFloat(altura.replace(",", "."));

  let imc = peso / (altura * altura);

  resultado.innerHTML = `
  Nome: ${nome},
  Altura: ${altura},
  Peso: ${peso};`;

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
  } else {
    resultado.innerHTML = "Obesidade classe 3";
  }

  /*if (imc >= 40) {
    resultado.innerHTML = "Obesidade classe 3";
  } else if (imc > 35) {
    resultado.innerHTML = "Obesidade classe 2";
  } else if (imc > 30) {
    resultado.innerHTML = "Obesidade classe 1";
  } else if (imc > 25) {
    resultado.innerHTML = "Excesso de peso";
  } else if ((imc > 18, 5)) {
    resultado.innerHTML = "Peso normal";
  } else {
    resultado.innerHTML = "Abaixo do peso normal";
  }*/
}
imc();
