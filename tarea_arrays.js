// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const nombreCliente = pedido.shift(); // Saca el primer elemento
    pedido.unshift("bebida"); // Añade "bebida" al inicio
    pedido.push(nombreCliente); // Añade el nombre del cliente al final
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
    for (let num of numeros) { // Iterar sobre el array
        if (num % 2 === 0) { // Verificar si es par
            suma += num; // Sumar el número par
        }
    }
    return suma;
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    for (let palabra of palabras) { // Iterar sobre las palabras
        if (!palabra.endsWith("a")) { // Verificar si no termina con "a"
            return false; // Si alguna no termina con "a", devolver false
        }
    }
    return true; // Si todas terminan con "a", devolver true
}

const palabras = ['casa', 'silla', 'mesa'];
console.log(palabrasTerminanConA(palabras)); // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array.
function buscaPalabras(words, word) {
    const indice = words.indexOf(word); // Obtener el índice de la palabra
    if (indice === -1) return []; // Si no se encuentra, devolver un array vacío
    return words.slice(indice + 1); // Devolver las palabras después del índice
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')); // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === "JavaScript") {
                return [i, j]; // Devolver la posición si se encuentra
            }
        }
    }
    return [-1, -1]; // Devolver [-1, -1] si no se encuentra
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    let minIndex = 0; // Índice del libro con menos páginas
    let maxIndex = 0; // Índice del libro con más páginas

    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i; // Actualizar el índice del libro con menos páginas
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; // Actualizar el índice del libro con más páginas
        }
    }
    return [minIndex, maxIndex]; // Devolver ambos índices
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
