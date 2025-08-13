class Character{
    #life
    constructor(name, archetype, life){
        this.name = name;
        this.class = archetype;
        this.#life = life;
    }

    attack(){
        console.log(`
            O personagem ${this.name} atacou!
        `)
    }

    mostrarInfo(){
        console.log(`
            Nome: ${this.name}
            Classe: ${this.class}
            Pontos de vida: ${this.#life}
        `)
    }
}

module.exports = Character;