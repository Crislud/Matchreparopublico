let DadosCl = []
function cadastrarLogin() {
  const username = document.getElementById('username').value;
  const data = document.getElementById('data').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const endereço = document.getElementById('endereço').value;
  const cpf = document.getElementById('cpf').value;
  const password = document.getElementById('password').value;
  const ConPassword = document.getElementById('ConPassword').value;



  DadosCl.push(username, data, email, telefone, endereço, cpf, telefone, password).value;
  localStorage.meuArr = JSON.stringify(DadosCl);

  const user = { password };
  localStorage.setItem("user", JSON.stringify(user));
  if (ConPassword == password && username && data && email && endereço && cpf) {
    // Simulação de armazenamento dos dados de login
    console.log("Usuário cadastrado com sucesso!");
    console.log("Nome de usuário:", username);
    console.log("Senha:", password);
    console.log("endereço:", endereço);
    console.log("Cadastro de pessoa fisica:", cpf);
    console.log("Email:", email);
    console.log("Telefone:", telefone);
    console.log("Aniversario:", data);

    const form = document.getElementById('myForm');

    form.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Realizar validação do formulario
        // Enviar o formulario se estiver válido
      }
    });

    alert("Cadastro realizado com sucesso!");

    // Limpa os campos do formulário após o cadastro
    //document.getElementById('form_login').reset();
    /*localStorage.info = document.getElementById("username").value;
    localStorage.info = document.getElementById("data").value;
    localStorage.info = document.getElementById("email").value;
    localStorage.info = document.getElementById("telefone").value;
    localStorage.info = document.getElementById("endereço").value;
    localStorage.info = document.getElementById("cpf").value;
    localStorage.info = document.getElementById("password").value;*/
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}
function redirecionar(link) {
  window.location.href = link;
}
