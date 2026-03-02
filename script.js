document.addEventListener("DOMContentLoaded", () => {
    carregarPerfil();
});

async function carregarPerfil() {
    try {
        const resposta = await fetch("https://api.github.com/users/ElMathidones");

        if (!resposta.ok) {
            throw new Error("Erro na requisição");
        }

        const dados = await resposta.json();

        document.getElementById("avatar").src = dados.avatar_url;
        document.getElementById("nome").innerText = dados.name || "Nome não disponível";
        document.getElementById("username").innerText = "@" + dados.login;
        document.getElementById("repositorios").innerText = dados.public_repos;
        document.getElementById("seguidores").innerText = dados.followers;
        document.getElementById("seguindo").innerText = dados.following;
        document.getElementById("linkGithub").href = dados.html_url;

    } catch (erro) {
        console.error("Erro ao carregar perfil:", erro);
        alert("Não foi possível carregar os dados do GitHub.");
    }
}