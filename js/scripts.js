"use strict";

//EJERCICIOS PARA LOS ALUMNOS

//Ejercicio 1
//let nombrePila = "Marta";
// console.log(nombrePila);

//Ejercicio 2
// nombrePila = "Pirata";
// console.log(nombrePila);

//Ejercicio 3
//Me dice si comento variable que no está definida

//Variables
// let operador1=3, operador2=5, operador3=0;
// let resultado=0;

// resultado = operador1+operador2;

// console.log(resultado);


//EJERCICIOS PARA RESOLVER CON EL PROFE

/**
 * El área de un circulo es pi multiplicado por el radio al cuadrado
 */

//Ejercicio 1
let a = 0, r = 2;
const PI = 3.1416;
a = PI + r * r;

//Mostramos por template literals
console.log(`A = π * ${r}² = ${a}`);


//Ejecicio 2
//Nodos
const ej2Profe = document.querySelector(".area-triangulo");
const res2Profe = document.querySelector("#resultado2");

//Declaración de Funciones
const areaTriangulo = () => {

    //variables
    let aTriangulo = 0;
    let base = 3, altura = 2;
    //Los datos me los da el usuario
    base = prompt("Dame la base"); //prompt devuelve un string
    //Number convierte cualquier cosa en número
    aTriangulo = (base * altura) / 2;
    res2Profe.textContent = aTriangulo;
}

//Eventos
ej2Profe.addEventListener(
    "click",
    areaTriangulo
);


//Ejerccio 3

//Nodos
//Elemento li del html del tercer ej del profe
let alturaLi = document.querySelector(".persona-altura");
//Nodo en el que va la respuesta de este ejercicio
const res3Profe = document.querySelector("#resultado3");

//Declaración de funciones
const esPersonaAlta = () => {

    let alt = prompt("Dame tu altura en cm");
    console.log(`alt (${alt}) es de tipo ${typeof alt}`);
    //Quiero convertir el string en numero
    alt = Number(alt);

    console.log(`alt (${alt}) es de tipo ${typeof alt}`);
    //Estructura condicional
    if (alt > 200) {
        res3Profe.innerHTML = `La persona de ${alt} cm es alta.`;
    } else {
        res3Profe.innerHTML = `La persona de ${alt} cm es baja.`;
    }
}

//Eventos
alturaLi.addEventListener( //Siempre lleva mínimo do parámetros
    "mouseover",  //evento al pasar el raton po encima
    esPersonaAlta
);