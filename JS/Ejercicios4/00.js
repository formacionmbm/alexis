// 1.-
console.log("Hola Mundo");

// 2.-
let num1 = 5;
let num2 = 10;
let resultado = num1 + num2;
console.log(resultado);

// 3.-
function suma(num1, num2){
    return num1 + num2;
}

console.log(suma(5, 10));

// 4.-
while (num1 <= 10){
    console.log(num1);
    num1++;
}

// 5.-
let arrayNams = ["Juan", "Pedro", "Luis", "Carlos", "Ana"];
for (let i = 0; i < arrayNams.length; i++){
    console.log(arrayNams[i]);
}

// 6.-
function mayorEdad(edad){
    if (edad >= 18){
        return true;
    } else {
        return false;
    }
}

console.log(mayorEdad(20));

// 7.- cuadrado de un numero
function cuadrado(num){
    return num * num;
}   

console.log(cuadrado(5));

// 8.- 8. Utiliza un bucle para imprimir los números pares del 1 al 10.

for (let i = 1; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

// 9.- Crea un objeto persona con propiedades nombre y edad, e imprímelo.

let persona = {
    nombre: "Juan",
    edad: 20
}

console.log(persona);

// 10.-Escribe una función que determine si un número es par o impar.

function parImpar(num){
    if (num % 2 == 0){
        return "Par";
    } else {
        return "Impar";
    }
}

console.log(parImpar(5));

// 11.- Declara un arreglo con números y calcula su suma utilizando el método reduce.

let arrayNums = [1, 2, 3, 4, 5];

let suma2 = arrayNums.reduce((a, b) => a + b, 0);
console.log(suma2);


// 12.-Crea una función que concatene dos cadenas de texto.

function concatenar(cadena1, cadena2){
    return cadena1 + " " + cadena2;
}

console.log(concatenar("Hola", "Mundo"));


// 13.- . Utiliza un bucle para imprimir los números del 10 al 1 en orden descendente.

for (let i = 10; i >= 1; i--){

    console.log(i);
}

// 14.- . Declara un objeto coche con propiedades marca, modelo y año, e imprímelo

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

console.log(coche);

// 15 .- Escribe una función que determine si una palabra es palíndroma.

function palindroma(palabra){
    let palabraInvertida = palabra.split("").reverse().join("");
    if (palabra == palabraInvertida){
        return "Es palindroma";
    } else {
        return "No es palindroma";
    }
}

console.log(palindroma("reconocer"));

// 16.- . Declara una variable y asigna un número. Luego, imprime "Negativo" si el número es menor que 0.

let numero = -5;
if (numero < 0){
    console.log("Negativo");
}

// 17.-  Crea una función que calcule el área de un triángulo con base y altura.

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.log(areaTriangulo(5, 10));

// 18- Utiliza un bucle para imprimir los números impares del 1 al 15.

for (let i = 1; i <= 15; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}

// 19 .- Declara un arreglo de objetos (cada objeto representa una persona con nombre y edad) e imprímelo

let personas = [
    {
        nombre: "Juan",
        edad: 20
    },
    {
        nombre: "Pedro",
        edad: 25
    },
    {
        nombre: "Ana",
        edad: 30
    }
]

console.log(personas);

// 20.- Escribe una función que devuelva el máximo de tres números.

function maximo(num1, num2, num3){

    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > num1){
            num1 = arguments[i];
        }
    }
    return num1;
}

console.log(maximo(5, 10, 15));