# PSEUDOCÓDIGO EJERCICIO 2 : VALIDACIÓN TARJETA DE CRÉDITO.
##Instrucciones:
###Crear una web que pida, por medio de un prompt(), el número de una tarjeta
### de crédito y confirme su validez según el algoritmo de Luhn.

###Consideraciones Específicas
###1.Tu código debe estar compuesto por 1 función: isValidCard
###2.El usuario no debe poder ingresar un campo vacío.

##Pasos
###1.Preguntar por el número de tarjeta mediante un prompt
###2.Pasar los números a un array en orden inverso
###3.Aplicar la operación a los números de las posiciones pares
###4.Sumas los dígitos y nuevos dígitos
###5.Comprobar si es una tarjeta válida (desde el paso 2 al 5 es algoritmo
###de luhn

##Mi pseudocódigo
###En primera instancia cree una variable llamada numero y que será la que contenga el prompt + la frase que se le aparecerá al usuario, para que le pregunte al usuario que "Ingrese números de la tarjeta de crédito".
###De esta manera: var numero = prompt("Ingrese números de tarjeta de crédito");

### Luego cree una variable llamada inverso, la cual contendrá o guardará, los datos entregados por el usuario en la variable numero, pero segun las instrucciones deben ser entregadas en un array inverso. Por lo cual la variable inverso para que cumpla dicha función, utilizé los metodos split("") para que sea un array. El método reverse() para que de vuelta los elementos en la variable numero. Y el método join, para qindicarle el tipo de separador que quiero qeu tenga este nueva variable, la cual será una coma (",")
###Unido se verá así: var inverso = numero.split("").reverse().join(",");
###Pero con este codigo no me da las correctas posiciones pares de los nuemeros que ingreso : var inverso = numero.split("").reverse().join(",");
### Por lo que lo modifiqué a : var inverso = numero.split("").map(Number); (split separa la cadena, map, la transforma en array)

###El siguiente paso seria multiplicar por 2 los dígitos que ocupan las posiciones pares comenzando por el final. Para ello primero debo encontrar los números que se encuentran en las posiciones pares de la var inverso.
###Para encontrar dichos dígitos debo recorrer la variable inverso, a traves de un for : for (i=0; i <= inverso.length; i++);
###Este For comenzará desde el indice cero de la variable (para que comienze desde el inicio de esta, luego le diré que quiero que sea menor o igual al largo de la variable inverso, y que vaya de uno en uno para que recorra toda la variable).

###De esta forma: for (var i=0; i < inverso.length; i++){
###                  if(i % 2 === 0){    (la condicionante if me dará solo las pocisiones pares)
###                 posicionesPares.push(i) (aqui mando el resultado a una nueva "caja". la envío a posicionesPares)
###                 }
###                 }


###Una vez encontradas y multiplicadas por 2 dichos dígitos. Sumo los dígitos que ocupan las posiciones impares con los dígitos obtenidos de las pocisiones pares.

### Luego para comprobar el resultado, y la validación de la tarjeta, según el algoritmo de Luhn, si la división del total con 10 es igual a cero, el numero será correcto. Por lo que el resultado de la suma de los dígitos de posiciones impares y pares, se divide por 10 y esta da 0, significa que es una tarjeta válida. Al contrario si no da 0, es una tarjeta inválida. A traves de un if y un alert, muestro al usuario si su tarjeta es valida o no. Dependiedo si cumple, realizo un if si es el resultado es igual a 0, que muestre un alert que diga valido. Y por el contrario, si no es valido, realizo un else que si es distinto a 0, muestre un alert que diga numero de tarjeta invalido. y finalmente poco un else para definir cualquier otro tipo de entrada, que muestre con un alert al usuario un error o que ingrese nuevamente.

###DIAGRAMA DE FLUJO: ![alt text](Flowchart(1).png "Diagrama de Flujo")
