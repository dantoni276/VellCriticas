document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Senha:", senha);

  document.getElementById("resposta").textContent = "Formulário enviado com sucesso!";
  this.reset();

  window.location.href = "file:///C:/Users/suporte/Downloads/valida%C3%A7%C3%A3o-formul%C3%A1rios-01%202%20(2)/valida%C3%A7%C3%A3o-formul%C3%A1rios-01/vell.html";
});