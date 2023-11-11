var carros = [];

function criarCarro() {
    let placa = document.getElementById("placa-carro");
    let ano = document.getElementById("ano-carro");
    let cor = document.getElementById("cor-carro");
    let modelo = document.getElementById("modelo-carro");
    let quilometragem = document.getElementById("quilometragem-carro");
    let vDiaria = document.getElementById("vDiaria-carro");
    let observacao = document.getElementById("observacao-carro");

    let carro = new Carro(placa.value, ano.value, cor.value, modelo.value, quilometragem.value, vDiaria.value, observacao.value);
    
    carros.push(carro);
    limparCampos();
    alert("Carro cadastrado!");
}

function limparCampos() {
    document.getElementById("form-cadastro-carro").reset();
}

function apresentarCarros() {
    let tabela = document.getElementById("lista-carros-cadastrados");
    var linha = tabela.insertRow(1);
    var placa = linha.insertCell(0);
    var modelo = linha.insertCell(1);
    var ano = linha.insertCell(2);

    placa.innerHTML = carros[0].getPlaca();
    modelo.innerHTML = carros[0].getModelo();
    ano.innerHTML = carros[0].getAno();
}

