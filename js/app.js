//Crear un algoritmo con un condicional.

const numero = parseFloat(prompt("Ingresa un número:"));

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero === 0) {
    console.log("El número es igual a cero");
} else {
    console.log("El número es negativo");
}

//Crear un algoritmo utilizando un ciclo.

let contador = 1;

while (contador <= 10) {
    console.log(contador);

    contador++;
}
