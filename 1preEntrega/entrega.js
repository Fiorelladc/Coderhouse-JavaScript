function calcular_estadia() {

    let estadia = parseInt(prompt("INDICAR CUANTOS DIAS QUIERE QUEDARSE? 7 ,14 o 21"));
    let cuotas = parseInt(prompt("INGRESAR LA CANTIDAD DE CUOTAS: 1 , 3 ,6 o 12"));

    let precioEstadia7dias = 50000;
    let precioEstadia14dias = 60000;
    let precioEstadia21dias = 70000;
    let resultado = 0;

    if(estadia === 7 && cuotas === 1 ){
        console.log ("El precio de los 7 dias y en 1 sola cuota es de $50.000");
        ("El precio de los 7 dias y en 1 sola cuota es de $50.000");
    }
    else if (estadia === 7 && cuotas === 3){
        resultado = precioEstadia7dias + (precioEstadia7dias * 0.15);
        console.log ("El precio de los 14 dias y en 3 cuota es de $" + resultado);
        alert("El precio de los 14 dias y en  3 cuota es de $" + resultado);
    }
    else if (estadia === 7 && cuotas === 6){
        resultado = precioEstadia7dias + (precioEstadia7dias * 0.30);
        console.log ("El precio de los 7 dias y en 6 cuota es de $" + resultado);
        alert("El precio de los 7 dias y en  6 cuota es de $" + resultado);
    }
    else if (estadia === 7 && cuotas === 12){
        resultado = precioEstadia7dias + (precioEstadia7dias * 0.45);
        console.log ("El precio de los 14 dias y en 3 cuota es de $" + resultado);
        alert("El precio de los 14 dias y en  3 cuota es de $" + resultado);
    }
    //comienza los precios de 14 dias 
    else if (estadia === 14 && cuotas === 1){
        console.log ("El precio de los 14 dias y en 1 sola cuota es de $60.000");
        ("El precio de los 14 dias y en 1 sola cuota es de $60.000");
    }
    
    else if (estadia === 14 && cuotas === 3){
        resultado = precioEstadia14dias + (precioEstadia14dias * 0.15);
        console.log ("El precio de los 14 dias y en 3 cuota es de $" + resultado);
        alert("El precio de los 14 dias y en  3 cuota es de $" + resultado);
    }
    else if (estadia === 14 && cuotas === 6){
        resultado = precioEstadia14dias + (precioEstadia14dias * 0.30);
        console.log ("El precio de los 14 dias y en 6 cuota es de $" + resultado);
        alert("El precio de los 14 dias y en  6 cuota es de $" + resultado);
    }
    else if (estadia === 14 && cuotas === 12){
        resultado = precioEstadia14dias + (precioEstadia14dias * 0.45);
        console.log ("El precio de los 14 dias y en 12 cuota es de $" + resultado);
        alert("El precio de los 14 dias y en  12 cuota es de $" + resultado);
    }
    //comienza los precios para 21 dias 
    else if (estadia === 21 && cuotas === 1){
        console.log ("El precio de los 21 dias y en 1 cuota es de $70000");
        alert("El precio de los 21 dias y en  1 cuota es de $70000");
    }
    else if (estadia === 21 && cuotas === 3){
        resultado = precioEstadia21dias + (precioEstadia21dias * 0.15);
        console.log ("El precio de los 21 dias y en 3 cuota es de $" + resultado);
        alert("El precio de los 21 dias y en  3 cuota es de $" + resultado);
    }
    else if (estadia === 21 && cuotas === 6){
        resultado = precioEstadia21dias + (precioEstadia21dias * 0.30);
        console.log ("El precio de los 21 dias y en 6 cuota es de $" + resultado);
        alert("El precio de los 21 dias y en  6 cuota es de $" + resultado);
    }
    else if (estadia === 21 && cuotas === 12){
        resultado = precioEstadia21dias + (precioEstadia21dias * 0.45);
        console.log ("El precio de los 21 dias y en 12 cuota es de $" + resultado);
        alert("El precio de los 21 dias y en  12 cuota es de $" + resultado);
    }
}

let edad = parseInt(prompt("Ingresar edad"))

while( edad <= 17 ){
    console.log("El usuario es menor de edad");
    alert("El usuario es menor de edad");

    let edad = parseInt(prompt("Ingrese nuevamente su edad"));

    if( edad <= 17 ){
        console.log("El usuario es menor de edad, ACCESO DENEGADO");
        alert("El Usuario es menor de edad, ACCESO DENEGADO")
        continue
    }
    else if( edad >= 18 ){
        console.log("El usuario es mayor de edad, puede continuar a la reserva");
        alert("El usuario es mayor de edad, puede continuar a la reserva");
        break
    }
}

calcular_estadia();