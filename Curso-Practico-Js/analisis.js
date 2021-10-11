const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);
//Helpers
function mediaAritmetica(arr) {
    const sumaLista = arr.reduce(
        function (a = 0, b) {
            return a + b;
        }
    )
    const promedioLista = sumaLista / arr.length;
    return promedioLista;
}

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(n) {
    return (n % 2 === 0);
}

function medianaSalarios(arr) {
    const mitad = parseInt(arr.length / 2);

    if (esPar(arr.length)) {
        const personitaMitad1 = arr[mitad - 1];
        const personitaMitad2 = arr[mitad];

        const mediana = mediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = arr[mitad];
        return personitaMitad;
    }
}
const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana top !0%
const spliceStart = salariosColSorted.length * 90 / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTopCol10 = salariosColSorted.splice(
    spliceStart, spliceCount
);

const medianaTop10 =medianaSalarios(salariosTopCol10);

console.log({
    medianaGeneralCol,
    medianaTop10
})