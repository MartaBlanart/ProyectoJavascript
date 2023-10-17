'use strict';

/**
 * Utilizando un bucle mostar la media y la suma de los número introducidos por el usuario.Hasta que
 * metamos un negtivo y entonces se muestre el resultado.
 */

var suma = 0;
var contador=0;

//El bucle necesario para evaluar primero el código y luego la condicion es el do-while


do{
    var numero = parseInt(prompt("Ingrese números hasta que metas uno negativo",0));
    if(isNaN(numero)){
        numero=0;
    } else if(numero>=0){
        //Se pone así ya que en cada iteración se debe sumar la suma(números que llevamos) + nuevo numero
        suma=suma+numero;
        
        //El contados incrementa con cada iteración
        contador++;

    }

} while(numero<=0){

    alert("La suma de los números introducidos es: "+suma);
    //Media suma/contador -> la suma de los todos los nº entre el nº de nº introducidos
    alert("La media de los números introducidos es: "+ (suma/contador));

}


/*
* Si tenemos por ejemplo ciertos alumnos con ciertas notas con este programa 
podríamos sacar la media de todos los alumnos.
*/

var notas=0;
var contador=0;

//El do es el bloque de código que se ejecuta cada vez que se introduzca un número
do{
    var nota= alert("Ingrese su nota", 0);

    if(isNaN(nota)){
       nota=0;
    } else if(nota>=0){
        notas=notas+nota;
        contador++;
    } 
//El while es la condición que se va a evaluar
    } while(nota<=0){
        alert("La suma de las notas introducidas es: "+notas);
        //Media suma/contador -> la suma de los todos los nº entre el nº de nº introducidos
        alert("La media de las notas introducidas es: "+ (notas/contador));
    

}
 