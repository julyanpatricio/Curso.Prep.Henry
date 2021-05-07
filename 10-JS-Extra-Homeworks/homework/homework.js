// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = []
  for(let clave in objeto){
    array.push([clave, objeto[clave]])
  }
  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let apariciones = {}
  for(let caracter of string){
    if(!apariciones[caracter]){
      apariciones[caracter] = 0;
    }
    apariciones[caracter]++
  }
  return apariciones
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas = ''
  let minusculas = ''
  for(caracter of s){
    if(caracter === caracter.toUpperCase()){
      mayusculas += caracter
    } else {
      minusculas += caracter
    }
  } return mayusculas + minusculas
}


function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(' ')
  let nuevoStr = '';
  for(let elemento of array){
    for(let i = elemento.length - 1; i >= 0 ; i--){
      nuevoStr += elemento[i];
    }
    if(elemento !== array[array.length-1]){
    nuevoStr += ' ';
    }
  }
  return nuevoStr;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str = String(numero)
  for(i = 0 ; i < Math.trunc(str.length / 2) ; i++){
    if(str[i] !== str[str.length-(1+i)]){
      return 'No es capicua';
    }
  } return 'Es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena = ''
  for(caracter of cadena){
    if(!['a','b','c'].includes(caracter)){
      nuevaCadena += caracter
    }
  } return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["Your", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let reserva = '';
  do {
    let numeroDeCambios = 0;
    var huboCambio = false;
    for(let i = 0; i <= arr.length -2; i++){
      if(arr[i].length > arr[i+1].length){
        reserva = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = reserva
        numeroDeCambios++;
      }
    }
    if(numeroDeCambios !== 0){
      huboCambio = true;
    }
  } while(huboCambio);
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let intersección = [];
  let arregloMayor
  let arregloMenor
  if(arreglo1.length >= arreglo2.length){
    arregloMayor = arreglo1;
    arregloMenor = arreglo2;
  } else {
    arregloMayor = arreglo2;
    arregloMenor = arreglo1;
  }
  for(elemento of arregloMayor){
    if(arregloMenor.includes(elemento)){
      intersección.push(elemento);
    }
  } return intersección;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
