class Animal {
    constructor(nome) {
        if (this.constructor === Animal) {
            throw new Error("Classe abstrata não pode ser instanciada.");
        }
        this.nome = nome;
    }

    falar() {
        throw new Error("Método falar() deve ser implementado.");
    }
}

class Cachorro extends Animal {
    falar() {
        return `${this.nome} diz: Au au!`;
    }
}

class Gato extends Animal {
    falar() {
        return `${this.nome} diz: Miau!`;
    }
}

const cachorro1 = new Cachorro("Rex");
const cachorro2 = new Cachorro("Bolt");
const gato1 = new Gato("Mingau");

console.log(cachorro1.falar());
console.log(cachorro2.falar());
console.log(gato1.falar());