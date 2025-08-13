class Personagem{
    #pontosDeVida
    constructor(nome, classe, pontosDeVida){
        this.nome = nome;
        this.classe = classe;
        this.#pontosDeVida = pontosDeVida;
    }

    ataque(){
        console.log(`
            O personagem ${this.nome} atacou!
        `)
    }

    mostrarInfo(){
        console.log(`
            Nome: ${this.nome}
            Classe: ${this.classe}
            Pontos de vida: ${this.#pontosDeVida}
        `)
    }
}


module.exports = Personagem;
