// #1 //

(function (){
    console.log("isto foi demasiado rápido!");
})();

// #2 //

const categoria = "Nome: " ; 

function funcaoTeste() {
    return function () {
        const nome = "Guilherme";
        return categoria + nome;
    };
};

console.log(funcaoTeste()());

// #3 //

function produto (nome, valor){
    this.nome = nome;
    this.valor = valor;
}

const produtoNovo = new produto("Fender", 200);

console.log(produtoNovo)

// #4 //

produtoNovo.valor = 2.5;

console.log(produtoNovo);

// #5 //

console.log(Math.round(produtoNovo.valor));