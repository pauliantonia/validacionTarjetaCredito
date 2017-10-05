/*Crea una web que pida, por medio de un prompt(), el número de una tarjeta
 de crédito y confirme su validez según el algoritmo de Luhn.

Consideraciones Específicas
1.Tu código debe estar compuesto por 1 función: isValidCard
2.El usuario no debe poder ingresar un campo vacío.

Pasos
1.Preguntar por el numero de tarjeta mediante un prompt
2.Pasar los numeros a un array en orden inverso
3.Aplicar la operación a los números de las posiciones pares
4.Sumas los dígitos y nuevos dígitos
5.Comprobar si es una tarjeta válida (desde el paso 2 al 5 es algoritmo
de luhn)*/

//Crear una variable que contenta el prompt para que le pregunte al usuario los
//números de la tarjeta.
var numero = prompt("Ingrese números de tarjeta de crédito");
// crear una variable que contendrá los números ingresados por el usuario pero al revés y separados.
//Para cambiarlo al reves se usa revere, para agregarle las comas se usa join, y split los convierte en un array.
var inverso = numero.split("").reverse().join(",");

/*Multiplicamos por 2 los dígitos que ocupan las posiciones pares empezando por el final.
Para eso primero debo encontrar los numeros que se encuentraN en las POSICIONES PARES de la var numero.
*/
var posicionesPares = [];

function isValidCard(){
for (var i=0; i <= inverso.length; i++){
  if(i % 2 === 0){
    posicionesPares.push(i)
}
}
}

/*while(i < x-1){
  i = i + 1;
}*/

 /*for(i=1; i < inverso.length; i++){
  if(inverso % 2 === ){

  }
}*/


  /* 2. Sumamos los dígitos que ocupaban las posiciones impares con los dígitos de los productos obtenidos:
   6 + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 4 = 70
   3. Si el resto de dividir el total entre 10 es igual a cero, el número es correcto:
   70 mod 10 = 0*/


//console.log(inverso);
