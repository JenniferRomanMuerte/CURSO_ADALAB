let lista = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < lista.length; i++) {
 console.log(`Estoy en la posición ${i} y voy a ${lista[i]}`);
}

// for-of
let canasta = ["manzana", "banana", "pera", "kiwi"];
for (const fruta of canasta) {
 console.log(`Soy una  ${fruta}`);
}

// for-in
let persona = {
 nombre: "Ada",
 edad: 30,
 profesion: "Desarrolladora"
};

for (const propiedad in persona) {
 console.log(`La propiedad ${propiedad} tiene el valor ${persona[propiedad]}`);
}