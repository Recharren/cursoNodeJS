(() => {
    console.log("Inicio programa");

  // EJERCICIO 1: Escribe una función de flecha llamada saludar()
    console.log("----------------- EJERCICIO 1 --------------------")
    let saludar = nombre=> `Hola ${nombre}`;
    console.log(saludar("Pepe"));

  //--------------------------------------------------------------------------

  // EJERCICIO 2: Convertir una función clásica a una función flecha.
  console.log("----------------- EJERCICIO 2 --------------------")
    let contadorFunc = contador=>{
        if (contador>10) {
            contador = 0;
        } else contador++;
        return contador;
    }
    console.log("Ahora el contador vale: "+contadorFunc(7))

//----------------------------------------------------------------

// EJERCICIO 3: Escriba una función de flecha llamada sumarPares que acepte un array de 
// números y devuelva la suma de los números pares del array.
console.log("----------------- EJERCICIO 3 --------------------")
    let arr1 = [1,2,3,4,5,6,7,8,9,10]
    let sumarPares = arreglo =>{
        let suma = 0;
        arreglo.forEach(num => {
            if(num%2 == 0){
                suma += num;
            }
        });
        return suma;
    }

    console.log("La suma de los pares da como resultado: "+sumarPares(arr1));

//----------------------------------------------------------------
    console.log("Fin Programa");
    console.log("----------------");
  })();