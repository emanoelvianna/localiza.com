class Carro {
    constructor(placa, ano, cor, modelo, quilometragem, vDiaria, observacao) {
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
        this.modelo = modelo;
        this.quilometragem = quilometragem;
        this.vDiaria = vDiaria;
        this.observacao = observacao;
    }

    getPlaca() {
        return this.placa;
    }

    getModelo() {
        return this.modelo;
    }

    getAno() {
        return this.ano;
    }

}