const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obter os valores dos campos
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Criar um objeto com os dados do usuário
    const usuarios = {
        email,
        senha,
    };

    // Chamar a API para fazer login
    fetch("http://localhost:8080/usuarios", {
        method: "POST",
        body: JSON.stringify(usuarios),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Email ou senha incorretos");
        }
        return response.json();
    })
    .then(data => {
        // Redirecionar para outra página após o login bem-sucedido
        window.location.href = "index.html"; 
    })
    .catch(error => {
        console.error(error);
        alert("Erro ao fazer login!");
    });
});
