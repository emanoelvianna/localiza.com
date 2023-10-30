var carro;

function criarCarro() {
    let placa = document.getElementById("placa-carro");
    carro = new Carro(placa.value);
    console.log(carro);
}

function apresentarCarros() {
    console.log(carro);
}

