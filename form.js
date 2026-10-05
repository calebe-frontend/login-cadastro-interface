const base = document.querySelector(".base");
const botao = document.querySelector(".registrar");
const tituloPainel = document.querySelector(".mensagem");
const textoPainel = document.querySelector(".mensagem1");
const formularioLogin = document.querySelector("#form-login");
const formularioCadastro = document.querySelector("#form-cadastro");
const mensagemStatus = document.querySelector("#mensagem-status");
const secaoLogin = document.querySelector(".Flogin");
const secaoCadastro = document.querySelector(".Fcadastro");

function alternarFormulario() {
    const cadastroAtivo = base.classList.toggle("ativo");

    tituloPainel.textContent = cadastroAtivo
        ? "Bem-vindo de volta!"
        : "Olá, amigo!";

    textoPainel.textContent = cadastroAtivo
        ? "Faça seu login para começar"
        : "Cadastre-se para começar";

    botao.textContent = cadastroAtivo ? "Login" : "Registrar";
    botao.setAttribute("aria-expanded", String(cadastroAtivo));

    secaoLogin.inert = cadastroAtivo;
    secaoCadastro.inert = !cadastroAtivo;
    mensagemStatus.textContent = "";
}

botao.addEventListener("click", alternarFormulario);

function mostrarAviso(event, tipo) {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) {
        return;
    }

    mensagemStatus.textContent = tipo === "login"
        ? "Demonstração: o formulário foi validado, mas não existe autenticação conectada."
        : "Demonstração: os campos foram validados, mas o cadastro ainda não salva dados.";

    // Esta interface é apenas demonstrativa: nenhum dado é enviado ou armazenado.
}

formularioLogin.addEventListener("submit", (event) => {
    mostrarAviso(event, "login");
});

formularioCadastro.addEventListener("submit", (event) => {
    mostrarAviso(event, "cadastro");
});
