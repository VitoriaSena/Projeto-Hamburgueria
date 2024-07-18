// Seleciona o formulário de cadastro
const formSignUp = document.querySelector(".form-container.sign-up form");

// Função para lidar com a submissão do formulário de cadastro
const handleSignUpSubmit = event => {
    event.preventDefault();

    // Obtém os valores dos campos de nome, email e senha
    const nome = formSignUp.querySelector("input[type='text']").value;
    const email = formSignUp.querySelector("input[type='email']").value;
    const senha = formSignUp.querySelector("input[type='password']").value;

    // Cria um objeto com os dados do usuário
    const usuario = { nome, email, senha };

    // Chama a API para fazer o cadastro
    fetch("http://localhost:8080/usuarios", {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: { "Content-Type": "application/json" },
    })
    .then(response => {
        if (!response.ok) throw new Error("Erro ao cadastrar usuário");
        return response.json();
    })
    .then(() => window.location.href = "login.html")
    .catch(error => {
        console.error(error);
        alert("Erro ao cadastrar usuário!");
    });
};

// Adiciona evento de submissão ao formulário de cadastro
formSignUp.addEventListener("submit", handleSignUpSubmit);