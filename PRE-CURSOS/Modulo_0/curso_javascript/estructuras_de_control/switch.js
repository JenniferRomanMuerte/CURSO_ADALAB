let expresion = 'papayas';

switch (expresion) {
    case 'naranjas':
        console.log('Las naranjas cuestan 20 pesos el kilo.');
        break;
    case 'manzanas':
        console.log('Las manzanas cuestan 43 pesos el kilo.');
        break;
    case 'plátanos':
        console.log('Los plátanos cuestan 30 pesos el kilo.');
        break;
    case 'mangos':
    case 'papayas':
        console.log('Las papayas y los mangos cuestan 25 pesos el kilo.');
        break;
    default:
        console.log('Lo siento, no contamos con ' + expresion);
}