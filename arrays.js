'use strict';

//Arrays, arreglos, matrices, colecciones

  /**
   * Recorrer array con un forEach, porque lo itera y lo muestra
   */

  var arrayNombres= ["Marta", "Sergio", "Rafa"];

  arrayNombres.forEach((elemento,index,arr)=>{
    //El arr imprime lo que el array tiene dentro 
    console.log(arr);
    document.write("<li>"+ index+ " " + elemento+">/li>");
});


//Arrays multidimensionales, es decir, arrays dentro de otros arrays

var categorias= ["accion", "terror", "comedia"];
var peliculas= ["1", "2", "3"];

//Un array que como elementos tiene 2 arrays, matriz

var cine=[categorias, peliculas];

console.log(cine[0], [1]);

//Operaciones con los arrays

//Añadir-> también se podría hacer un prompt para añadir eletos al array

categorias.push("risa");

//Eliminar el ultimo elemento del array

categorias.pop();//por cada pop solo se elimina UN UNICO ELEMENTO

//Eliminar un elemento IMPORTANTE

var index=categorias.indexOf("accion");
if (index>-1){
    peliculas.splice(index,1);
}

//Convertir el array en un string 

var arrayString=categorias.join();

//Convertir un string en un array

var cadenas= "texto15,texto23,texto3";
//Lo que viene despues del split (" , ") es para indicar que los elementos estan separados por comas en el string
// tecto15 elemento 1 del array y asi sucesivamente con el resto de elementos
var cadenasArray= cadenas.split(" , ");

//Método para ordenar un array
//sort()-> ordena alfabeticamente un array
// reverse()-> darle la vuelta a un array 

//Recorrer un array con el for in
for(let categoria in categorias){
    document.write(<li> + categorias[categoria]+ </li>)
}


//Buscar dentro de un array

//Funcion normal
var busqueda= categorias.find(function(categoria){
    return lenguaje=="accion";
});

//Funcion flecha

var busquedaFlecha= categorias.find(lenguaje=>lenguaje=="accion");

//Tambien exite el findIndex 




//Filtros, por ejemplo si hay algun precio mayor o igual que 20 devuelve true o false
var precios=[4,7,9,27,41];
var prueba= precios.some(precio=> precio>=20);

  