// #1

const paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia'];

for (
    let i = 0; i < paises.length; i++) {
    console.log(paises[i]);  
}

// #2

function getPaisesCount() {
    return paises.length;
}

console.log(getPaisesCount());

// #3

paises.unshift("Portugal");
paises.push("Espanha");

console.log(paises);

// #4

function ultimosTres(paises){
    return paises.slice(10,13);
};

console.log(ultimosTres(paises));

console.log(paises.join("-"))
