function verificar() {
  let idade = Number(document.querySelector("#idade").value);

  let resultado = document.getElementById("resultado");

  let renovacao = document.getElementById("renovacao");

  if (idade >= 18 && idade < 100) {
    resultado.innerHTML = "Apto para início";
    if (idade >= 18 && idade < 50) {
      renovacao.innerHTML = "Renovação daqui a 10 anos";
    } else if (idade >= 50 && idade < 69) {
      renovacao.innerHTML = "Renovação  daqui a 5 anos";
    } else if (idade > 70 && idade < 100) {
      renovacao.innerHTML = "Renovação daqui a 3 anos";
    }
  } else {
    resultado.innerHTML = "Você nao está apto para iniciar";
  }
}

verificar();
