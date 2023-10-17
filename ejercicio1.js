'use strict';

/**
 * Programa que pida dos números y que nos diga cual es el mayor o menor, o si son iguales.
 * PLUS: Si los numeros no son un numero o son menores o iguales que cero, nos lo debe volver a pedir.
 */
//Por defecto el valor es 0, el prompt siempre devuelve un string por lo que para hacer la lógica de comparación de dos números, se debe convertirlo en un número

var numero1= parseInt(prompt("Ingrese un número",0));
var numero2= parseInt(prompt("Ingrese otro número",0));

//Se utiliza el alert para que se vea el pantalla en resultado

//Mi ejercicio
if(numero1>numero2){
     
    alert(numero1+" es mayor que "+numero2);
} else if(numero1<numero2){
    alert(numero1+" es menor que "+numero2);
} else{
    alert("Los números son iguales");
}

//Ejercicio de clase

//Lógica del plus: isNaN es una función predefinida de JS para comprobar si un valor es un número o no.
while(numero1<=0 ||  numero2<=0 || isNaN(numero1) || isNaN(numero2)){
    //A estas variables se le quita el var de delante porque ya están predefinidas anteriormente 
     numero1= parseInt(prompt("Ingrese un número",0));
     numero2= parseInt(prompt("Ingrese otro número",0));
}


//Lógica de comparación de dos números al pedirlos y que esten correctos 
if (numero1 == numero2 ) {
    alert("Los números son iguales");
} else if(numero1 > numero2){
    alert("El número mayor es"+ numero1);
    alert("El número menor es"+ numero2);
} else if(numero1 < numero2){
    alert("El número mayor es"+ numero2);
    alert("El número menor es"+ numero1);
} else{
    alert("Introduzado en el número");
}

