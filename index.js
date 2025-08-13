const Character = require("./class/Character");

const character1 = new Character("Raven", "Ladina", 60);
const character2 = new Character("Beatryz", "Arqueira", 50);
const character3 = new Character("Everson", "Tanque", 150);

console.log(`=============================================`)
character1.attack();
character1.mostrarInfo();

console.log(`=============================================`)
character2.attack();
character2.mostrarInfo();

console.log(`=============================================`)
character3.attack();
character3.mostrarInfo();

console.log(`=============================================`)