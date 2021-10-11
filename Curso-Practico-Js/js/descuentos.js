const cupones= ["navidad","niño","afiliado"];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onClicklButtonPriceDiscount() {
    const precio = document.getElementById("precio").value;
    const cupon =document.getElementById("cupon").value;

    let descuento;
    switch(cupon){
        case cupones[0]:
            descuento=15;
            break;
        case cupones[1]:
            descuento=20;
            break;
        case cupones[2]:
            descuento =25;
            break;
    }

    const precioFinal = calcularPrecioConDescuento(precio, descuento);
    const result = document.getElementById("precioFinal");
    result.innerText = "El precio con descuento es de: $ " +precioFinal;

    return result;
}


/*console.log({
    precio,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})*/