function verificar() {
  // querySelector = São formas de capturar o elemento,
  // seja via classe(.), id(#) ou tag.

  //capturando o valor do input e mandando para tipo numerica
  let numero = Number(document.querySelector("#numero").value);
  //Capturando todo a a tag p com resultado
  let resultado = document.getElementById("resultado");

  if (numero % 2 == 1) {
    resultado.innerHTML = "O número digitado é impar";
  } else {
    resultado.innerHTML = " O  número é par";
  }
}
