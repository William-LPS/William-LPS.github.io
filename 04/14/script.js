document.querySelector("form").addEventListener("submit", (evento) => {
  evento.preventDefault();
  calcular();
});
function calcular() {
  let numero = Number(document.getElementById("id_numero").value);
  let resultado = document.getElementById("resultado");
  let opcao = document.getElementById("operacao").value;
  resultado.innerHTML = "";

  switch (opcao) {
    case "*":
      for (let i = 0; i <= 10; i++) {
        resultado.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
      }
      break;

    case "/":
      for (let i = 0; i <= 10; i++) {
        if (i === 0) {
          resultado.innerHTML += "Divisão por zero não é permitida";
        } else {
          resultado.innerHTML += `${numero} / ${i} = ${numero / i} <br>`;
        }
      }
      break;
    case "+":
      for (let i = 0; i <= 10; i++) {
        resultado.innerHTML += `${numero} + ${i} = ${numero + i} <br>`;
      }
      break;

    case "-":
      for (let i = 0; i <= 10; i++) {
        resultado.innerHTML += `${numero} - ${i} = ${numero - i} <br>`;
      }
      break;

    default:
      resultado.innerHTML += "Opção inválida";
  }
}
