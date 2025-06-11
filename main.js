const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12

const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuirTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
};

function aumentaTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
};