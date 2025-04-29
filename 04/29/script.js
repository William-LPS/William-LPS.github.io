let formulario = document.querySelector("#form_pizza");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const ingredientes = [];

  let checkboxes = document.querySelectorAll(
    "input[name='ingredientes']:checked"
  );

  for (let i = 0; i < checkboxes.length; i++) {
    ingredientes.push(checkboxes[i].value);
  }

  let nome = document.getElementById("id_nome").value;

  let tamanho = document.querySelector("input[name='tamanho']:checked");

  let massa = document.getElementById("id_massa").value;

  let endereco = document.querySelector("id_endereco").value;

  let mensagem =
    "Confirme suas informações: \n Cliente:" +
    nome +
    "Ingredientes:" +
    ingredientes +
    "\n Tamanho da Pizza:" +
    tamanho.value +
    "Tipo de massa: " +
    massa +
    "\n Endereço:" +
    endereco;

  alert(mensagem);
});
