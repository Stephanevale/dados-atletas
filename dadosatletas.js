class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        let categoria = [
            "Infantil",
            "Juvenil",
            "Intermediário",
            "Adulto",
            "Sem categoria",
        ];
        if (this.idade >= 9 && this.idade <= 11) {
            return `${categoria[0]}`;
        }
        if (this.idade >= 12 && this.idade <= 13) {
            return `${categoria[1]}`;
        }
        if (this.idade >= 14 && this.idade <= 15) {
            return `${categoria[2]}`;
        }
        if (this.idade >= 16 && this.idade <= 30) {
            return `${categoria[3]}`;
        } else {
            return `${categoria[4]}`;
        }
    }
    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }
    calculaMediaValida() {
        const notasOrdenadas = this.notas.sort((a, b) => a - b);
        const notasFiltradas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
        const soma = notasFiltradas.reduce((total, atual) => total + atual, 0);
        const media = soma / notasFiltradas.length;
        return media;
    }
    obtemNomeAtleta() {
        return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`;
    }
    obtemPesoAtleta() {
        return `Peso: ${this.peso}`;
    }
     obtemAlturaAtleta() {
        return `Altura: ${this.altura}`;
    }
    obtemNotasAtleta() {
        return `Notas: ${this.notas}`;
    }
    obtemCategoria() {
      return `Categoria: ${this.calculaCategoria()}`;
    }
    obtemIMC() {
        return `IMC: ${this.calculaIMC()}`;
    }
    obtemMediaValida() {
        return `${this.calculaMediaValida()}`;
    }
}

const atleta = new Atleta ("Cesar Abascal", 30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]);
console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());