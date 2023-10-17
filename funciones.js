'use strict';

//Funciones adicionales para que no haya tanto código en la función principal

function porConsola(numero1,numero2){
    console.log("La suma es: "+ (numero1 + numero2) + "<br>");
    console.log("La resta es: "+ (numero1 - numero2) + "<br>");
    console.log("La multiplicación es: "+ (numero1 * numero2) + "<br>");
    console.log("La división es: "+ (numero1 / numero2) + "<br>");   
}

function porPantalla(numero1,numero2){
    document.write("La suma es: "+ (numero1 + numero2) + "<\br>");
    document.write("La resta es: "+ (numero1 - numero2) + "<\br>");
    document.write("La multiplicación es: "+ (numero1 * numero2) + "<\br>");
    document.write("La división es: "+ (numero1 / numero2) + "<\br>");

}

//Función principal

function calculadora(numero1,numero2, mostrar=false){
    if(mostrar==false){
       //Se llama a las funciones adicionales 
       porConsola(numero1, numero2);
    } else{
        porPantalla(numero1, numero2);
    }
}


//Invovamos a la función tantas veces como queramos
/**
 * La funciones se invocan todos igual
 * pelicula();
 * funcion(paranetros);
 */

calculadora(7,5); //en este caso mostrar será false y se mostrará por CONSOLA
calculadora(2,5,true); //en este caso mostrar será true y se mostrará por PANTALLA


//Funciones anónimas-> no tiene nombre y se puede guardar en una variable

var pelicula= function(nombre){ 
    return "Pelicula es: " + nombre;
}


//Funciones de callback

function sumame(numero1,numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

//esto sería la funcion anónima de callback a la que hemos invocado en la función sumame
//Estamos invocando a la función sumame con los parámetros de entradda
sumame(7,5, function(dato){
    console.log("La suma es: " + dato);
}, function (dato){
    console.log("La suma por 2 es:" + dato*2);
}


)


//Transformación de textos 

var numero=444;
var texto= "Esto es una cadena de texto";
var texto2= "hola que tal";


numero.toString();
 

//Como hacer plantillas de texto

var nombre= prompt("Ingrese su nombre");
var apellido= prompt("Ingrese su apellido");

//var texto= "Hola, mi nombre es: " + nombre + " y mi apellido es:" + apellido;

//plantilla
var texto= `
<h1> Hola que tal, </h1>
<h3> mi nombre es: ${nombre}</h3>
<h3> mi apellido es: ${apellido}</h3>
`;

document.write(texto);


