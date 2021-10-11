//Código del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//Código dle triángulo
console.group("triangulo")

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
};

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//Triangulo Isoceles

function alturaIsoceles(lado1, lado2, base) {
    if (lado1 == lado2 && lado1!=base) {
        h = Math.sqrt((lado1 * lado1) - (base * base / 4));
    } else {
        alert("no es un triangulo isoceles");
    }    
    return h;
}
console.groupEnd();

//Código del círculo
console.group("Círculos");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    let diametro = diametroCirculo(radio);
    return diametro * (Math.PI);
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//Interactuar con HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado").value;

    const perimetro = perimetroCuadrado(input);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado').value;

    const area = areaCuadrado(input);
    alert(area);
}
//Triangulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById('ladoTriangulo1').value;
    const lado2 = document.getElementById('ladoTriangulo2').value;
    const base = document.getElementById('baseTriangulo').value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const altura = document.getElementById('alturaTriangulo').value;
    const base = document.getElementById('baseTriangulo').value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularAltura() {
    let lado1 = document.getElementById('lado1').value;
    let lado2 = document.getElementById('lado2').value;
    let base = document.getElementById('base').value;

    const h = alturaIsoceles(lado1,lado2,base);
    alert(h)
}
//Circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById('radioCirculo').value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById('radioCirculo').value;

    const area = areaCirculo(radio)
    alert(area);
}