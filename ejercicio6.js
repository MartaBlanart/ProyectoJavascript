/**
 * Hacer un programa que nos diga si un número es par o impar
 * 1.Ventana prompt
 * 2. Si no es válido que nos pida de nuevo el numero
 */

var numero= parseInt(prompt("Ingrese un número",0));


//Para hacer comprobaciones antes de establecer condiciones utilizamos while(mientras que...)
while(isNaN(numero)){

    numero= parseInt(prompt("Ingrese un número",0));
}


if(numero%2===0){
    alert("El número " + numero + " es par");
} else{
    alert("El número " + numero + " es impar");
}
