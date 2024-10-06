// Ejercicio 1: Condicionales if-else
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

// Ejercicio 2: Condicionales anidados
function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad >= 18 && edad <= 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}

// Ejercicio 3: Bucles while
function cuentaRegresiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

// Ejercicio 4: Bucles do-while
function repetirMensaje() {
    let contador = 0;
    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++;
    } while (contador < 5);
}

// Ejercicio 5: Bucle for
function imprimirPares(numero) {
    for (let i = 0; i <= numero; i += 2) {
        console.log(i);
    }
}

// Ejercicio 6: Uso de break
function detenerEnSeis() {
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }
        console.log(i);
    }
}

// Ejercicio 7: Uso de continue
function saltarCinco() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}

// Ejercicio 8: Switch básico
function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Número de día no válido");
            break;
    }
}

// Ejercicio 9: Switch con múltiples casos
function esVocal(letra) {
    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(`${letra} es una vocal`);
            break;
        default:
            console.log(`${letra} no es una vocal`);
            break;
    }
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        console.log("Todos son positivos");
    } else if (a < 0 || b < 0 || c < 0) {
        console.log("Al menos uno es negativo");
    } else {
        console.log("Todos son negativos");
    }
}

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
