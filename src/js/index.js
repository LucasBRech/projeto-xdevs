//OBJETIVO 1 - Quando clicarmos na seta de avnçar temos que mostrar o próximo cartão da lista 
// passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar 
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    //passo 4 - bruscar o cartão que esta selecionado e esconder
    esconderCardsSelecionado();
    // passo 3 - fazer aparecer o proximo cartão da lista
    cartaoAtual++;
    mostrarCard();
})

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    esconderCardsSelecionado()
    // passo 3 - fazer aparecer o proximo cartão da lista
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
})



function mostrarCard() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCardsSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado"); cartaoSelecionado.classList.remove("selecionado");
}

