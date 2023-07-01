/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayContainer = [];
   for (const property in objeto) {
      arrayContainer.push([property, objeto[property]]);
   }
   return arrayContainer;

   // var arreglo = [];
   // for (var [clave,valor] of Object.entries(objeto)){
   //    arreglo.push([clave,valor]);
   // }
   // return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   var stringPiecesInOrder = string.split("").sort();
   var cantidad = 0;
   // for(var i=0; i<stringPiecesInOrder.length; i++) {
   //    for (var j=0; j<stringPiecesInOrder.length; j++) {
   //       if (stringPiecesInOrder[i] === stringPiecesInOrder[j]) {
   //          if(i === 0 || !objeto.hasOwnProperty(stringPiecesInOrder[j])) {
   //             suma += 1;
   //          }
   //       }
   //    }
   //    if(suma > 0) {
   //       objeto[stringPiecesInOrder[i]] = suma;
   //       suma = 0;
   //    }
   // }
   // return objeto;
   for (let element of stringPiecesInOrder) {
      cantidad = objeto[element] || 0;
      objeto[element] = cantidad + 1;
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayWord = "";
   var minWord = "";
   for (let i = 0; i < string.length; i++) {
      if(string[i] === string[i].toUpperCase()) {
         mayWord += string[i];
      }
      if(string[i] === string[i].toLowerCase()) {
         minWord += string[i];
      }
   }
   return mayWord + minWord;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayWords = frase.split(" ");
   var wordsReverse = [];
   for( let i = 0; i < arrayWords.length; i++) {
      wordsReverse.push(arrayWords[i].split("").reverse().join(""));
   }
   return wordsReverse.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroArray = numero.toString().split("");
   var numeroReverso = numeroArray .reverse().join("");
   if(numero === Number(numeroReverso)) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringFinal = "";
   for (let i = 0;  i < string.length; i++) {
      if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c") {
         stringFinal += string[i];
      }
   } 
   return stringFinal;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var newArray = [];
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if(array1[i] === array2[j]) {
            newArray.push(array1[i]);
         }
      }
   }
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
