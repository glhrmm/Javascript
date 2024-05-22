function promocao(preco, desconto){

    if (desconto === 0 ) {
        return preco * 2;
    }  else if ( desconto > 10 && desconto < 30){
        return preco - (preco * (desconto / 100));
    } else {
        return preco + (preco * (desconto / 100));
      };
};

console.log(promocao(80, 20)); 