const notes = [{
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


function calcularPromedioAponderado(arr) {
    let dividendo = 0;
    let divisor = 0;

    for (let i = 0; i < arr.length; i++) {
        divisor += arr[i].credit;
    }
    for (let i = 0; i < arr.length; i++) {
        dividendo = dividendo + arr[i].note * arr[i].credit;
    }
    let resultado = dividendo / divisor;
    return resultado
}