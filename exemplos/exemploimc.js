document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault(); // Negar o carregador automático;
  console.log("funcionando...");

  let nome = document.querySelector("#id_nome").value;
  let altura = document.querySelector("#id_altura").value;
  let peso = document.querySelector("#id_peso").value;
  let resultado = document.querySelector("#resultado");

  resultado.innerHTML = `
            Nome: ${nome},
            Altura: ${altura},
            Peso: ${peso}
        `;

  console.log(`
            Nome: ${nome},
            Altura: ${altura},
            Peso: ${peso}
        `);
});
