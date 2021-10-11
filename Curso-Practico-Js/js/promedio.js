//Lista para el ejemplo
let lista1 = [
    1, 2, 3, 2, 1, 2, 1, 1, 5, 3, 2, 1, 2, 2, 3,
];

function calcularPromedio(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista+ lista[i];
    // }
    const sumaLista = lista.reduce(
        //Suma todos los elementos, funciona como un for
        function (valorAcumulado = 0, nuevoelemento) {
            return valorAcumulado + nuevoelemento;
        }
    );

    //Saca el promedio usando la suma de los elementos dividiendo entre la cantidad
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMediana(lista) {
    //La funcion sort ordena la lista. a-b: de menor a mayor
    lista.sort(function (a, b) {
        return a - b
    });
    //Buscamos la posicion del medio del array
    const mitadLista1 = parseInt(lista.length / 2);
    //Verificamos si la cantidad de números en el array es par o impar
    //La variable numerito es pasada como parametro en la funcion sgte lista.lenght
    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    //Si es par cogemos los dos numeros centrales y sacamos el promedio
    //reutilizando la funcion
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];

        const promedio = calcularPromedio([
            elemento1,
            elemento2,
        ]);

        mediana = promedio;
    } else {
        //El caso simple es cuando son impares solo se coge el valor del medio
        mediana = lista[mitadLista1];
    }
    return mediana;
}
//Creamos un objeto donde guardaremos la cantidad de cada numero
function calcularModa(lista) {
    const listaCount = {};
    lista.map(
        function (e) {
            if (listaCount[e]) {
                //Si el numero existe aumenta uno
                listaCount[e] += 1;
            } else {
                //De no existir crea el número
                listaCount[e] = 1;
            }
        }
    )
    console.log(listaCount)
    //La funcion Object.entries cambia el objeto a un array para poder ordenarlos despues con el metodo sort
    const lista1Array = Object.entries(listaCount).sort(
        function (a, b) {
            return a[1] - b[1];
        });
        console.log(lista1Array)
    const moda = lista1Array[lista1Array.length-1];
    return moda;
}