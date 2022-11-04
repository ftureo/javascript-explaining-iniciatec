// Escribir la palabra reservada "function"
// darle un nombre y escribirlo a continuación de la palabra reservada "function"
// escribir dos paréntesis y abrir y cerrar llaves
// Si la función recibe parámetros, debemos pasarlos entre los paréntesis
// Si la función no recibe parámetros, los paréntesis deben estar vacíos
// Dentro de las llaves, va el bloque de código que queremos que se ejecute cuando llamemos a la función
// Para llamar a la función, escribimos el nombre de la función y entre paréntesis, los parámetros que queremos pasarle a la función. Si no lleva parámetros, los paréntesis deben estar vacíos.

// Ejemplo: normal function
// function greeting() {
//     console.log("Hello World from a function");
//     alert("No te olvides saludarme");
//     console.log("Ya te saludé");
// }
// greeting();

// Ejemplo: Arrow function - Son funciones flecha.
// Declaramos una tipo de variable
// Le asignamos un nombre
// Escribimos los paréntenisis
// Dentro de los paréntesis, escribimos los parámetros que queremos pasarle a la función
// Después de los paréntesis, escribimos una flecha
// Abrimos y cerramos llaves
// Dentro de las llaves, escribimos el bloque de código que queremos que se ejecute cuando llamemos a la función
// Para llamar a la función, escribimos el nombre de la función y entre paréntesis, los parámetros que queremos pasarle a la función. Si no lleva parámetros, los paréntesis deben estar vacíos.

// const greetingArrowFunction = () => {
//     console.log("Hello World from a function");
//     alert("No te olvides saludarme");
//     console.log("Ya te saludé");
// };
// greetingArrowFunction();

// Ejemplo: function con parámetros
function sum(value1, value2) {
    // console.log(typeof value1);
    // console.log(typeof value2);
    // console.log(value1 + value2);
    // console.log(`La suma entre ${value1} y ${value2} es ${value1 + value2}`);
    const result = value1 + value2;
    console.log(result);
}
sum(5, 10);

// Ejemplo: funcion con return - Devuelve un valor. Si no se pone return, la función no devuelve nada. podemos imprimir por consola el valor que devuelve la función haciendo un console.log y pasando la funcion como parametro.

function sumWithReturn(value1, value2) {
    return value1 + value2;
}
console.log(sumWithReturn(10, 20));

// ------multiply-------------
const returnSum = sumWithReturn(10, 20);
console.log(returnSum);

function multiply(value1, value2) {
    console.log(typeof value1);
    console.log(typeof value2);

    console.log(value1 * value2);
}
multiply(sumWithReturn(1, 5), 10); // 60

multiply(returnSum, 10); // 300

// Cómo escribo la función resta pero arrow function

const rest = (value1, value2) => {
    console.log(`La resta da ${value1 - value2}`);
};
rest(2.5, 5.8);

sum(2, "perri");

// Ejemplo: function suma con validación

// function sumWithValidation(value1, value2) {
//     if (typeof value1 === "number" && typeof value2 === "number") {
//         return value1 + value2;
//     } else {
//         return "Los valores no son números";
//     }
// }

// console.log(sumWithValidation(2, "5"));

const sumWithValidation = (value1, value2) => {
    if (typeof value1 === "string" || typeof value2 === "string") {
        return "Los valores no son números";
    } else {
        return value1 + value2;
    }
};

console.log(sumWithValidation(2, "5"));
