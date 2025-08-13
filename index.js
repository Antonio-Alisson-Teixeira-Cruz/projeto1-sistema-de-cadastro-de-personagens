const Personagem = require("./class/Personagem");

const raven = new Personagem("Raven", "Ladina", 60);
const beatryz = new Personagem("Beatryz", "Arqueira", 50);
const everson = new Personagem("Everson", "Tanque", 150);

console.log(`=============================================`)
raven.ataque();
raven.mostrarInfo();

console.log(`=============================================`)
beatryz.ataque();
beatryz.mostrarInfo();

console.log(`=============================================`)
everson.ataque();
everson.mostrarInfo();

console.log(`=============================================`)
