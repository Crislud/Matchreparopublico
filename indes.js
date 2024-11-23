let DadosCl = []

function cadastrarLogin() {
    const username = document.getElementById('username').value;
    const subname = document.getElementById('subname').value;
    const cidade = document.getElementById('Cidade').value;
    const cpf = document.getElementById('cpf').value;
    const uf = document.getElementById('uf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;
    const password = document.getElementById('password').value;
    const ConPassword = document.getElementById('ConPassword').value;

    DadosCl.push(username, subname, cidade, cpf, uf, email, telefone, data, password).value;
    localStorage.meuArr = JSON.stringify(DadosCl);

    const user = {email, password};
    localStorage.setItem("user", JSON.stringify(user));

    if (ConPassword === password && username && subname && cidade && cpf && uf && email && telefone && data) {
        // Simulação de armazenamento dos dados de login
        console.log("Usuário cadastrado com sucesso!");
        console.log("Nome de usuário:", username);
        console.log("Senha:", password);
        console.log("Sobrenome:", subname);
        console.log("Cidade:", cidade);
        console.log("Cadastro de pessoa fisica:", cpf);
        console.log("UF:", uf);
        console.log("Email:", email);
        console.log("Telefone:", telefone);
        console.log("Aniversario:", data);

        alert("Cadastro realizado com sucesso!");

        // Redireciona para a Home Page após o cadastro
        window.location.href = "PerfilPessoaJuridica.html";  // Substitua com o caminho correto da sua página inicial
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function redirecionar(link) {
    window.location.href = link;
}