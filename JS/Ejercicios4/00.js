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


// 12.-

