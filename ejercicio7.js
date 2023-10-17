'use strict';

//Tabla de multiplicar de un numero introducido por el usuario (Tabla del 1 al 10)

var numero= parseInt(prompt("Ingrese un número",1));

for(var i=1; i<=10; i++){
    document.write(i + "x" + numero + " = " + i*numero + "<br>");
}


//Todas las tablas de multiplicar

for(var c=1; c<=10; i++){
    document.write("<h1>Tabla del" + c + "</h1>");
    for(var i=1; i<=10; i++){
        document.write(i + "x" + c + " = " + i*c + "<br>");
    }
}
