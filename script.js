let reservaciones = [];
Ingreso();

function calcular_estadia() {
    let nombre = prompt("INDICAR NOMBRE");
    let fecha = prompt("INDICAR FECHA DE INICIO CON EL FORMATO DD/MM/AAAA ( / obligatoria para separar)");
    let estadia = parseInt(prompt("INDICAR CUANTOS DIAS QUIERE QUEDARSE? 7 ,14 o 21 o 24"));
    let cuotas = parseInt(prompt("INGRESAR LA CANTIDAD DE CUOTAS: 1 , 3 ,6 o 12 o 24"));
    let resultado = DiasPrecio(estadia,cuotas);
    // numero aleatorio entre 10 y 100
    // Math.random() * (max - min) + min;
    // floor = piso menor
    // round = redondear
    // ceil = top al mayor
    let habitacion = Math.floor(Math.random() * (100 - 10)) + 10;
    let EndDate = fechaFinal(fecha,estadia);
    const reservacion = {
        nombre,
        fecha,
        estadia,
        cuotas,
        resultado,
        habitacion,
        EndDate
    }
    reservaciones.push(reservacion);
    mostrarReservacion();
}
function mostrarReservacion(){
    reservaciones.forEach(reservacion => { 
        alert(`${reservacion.nombre} tu reservacion con fecha ${reservacion.fecha} por ${reservacion.estadia} dias en ${reservacion.cuotas} cuotas con un precio final de ${reservacion.resultado} en la habitacion ${reservacion.habitacion} hasta la fecha ${reservacion.EndDate}`);
    })
}
function fechaFinal(fecha, estadia){
    const lista_fecha = fecha.split('/')
    
    let lista_fecha_int = [];
    lista_fecha.forEach(element => {
        lista_fecha_int.push(parseInt(element))
    });
    if(lista_fecha_int[0]+estadia > 30){
        console.log("entre");
        lista_fecha_int[1] = lista_fecha_int[1] + 1;
        let diaSuma = lista_fecha_int[0]+estadia;
        DiaFinal = diaSuma - 30; 
        lista_fecha_int[0] = DiaFinal;
    }else{
        let diaSuma = lista_fecha_int[0]+estadia; 
        lista_fecha_int[0] = diaSuma;
    }
    let fechafinal1 = `${lista_fecha_int[0]}/${lista_fecha_int[1]}/${lista_fecha_int[2]}`;
    return fechafinal1;
}
function DiasPrecio(estadia,cuotas){
    let precioEstadia7dias = 50000;
    let precioEstadia14dias = 60000;
    let precioEstadia21dias = 70000;
    let precioEstadia24dias = 80000;
    let resultado = 0;
    if(estadia <= 7){
        resultado = precioEstadia7dias + precioEstadia7dias*CuotaInteres(cuotas);
    }
    else if(estadia <= 14){
        resultado = precioEstadia14dias + precioEstadia14dias*CuotaInteres(cuotas);
    }
    else if(estadia <= 21){
        resultado = precioEstadia21dias + precioEstadia21dias*CuotaInteres(cuotas);
    }
    else if(estadia <= 24){
        resultado = precioEstadia24dias + precioEstadia24dias*CuotaInteres(cuotas);
    }
    else{
        alert(`Faltan datos, complete la reserva nuevamente por favor, gracias!`);
    }
    // alert(`El precio de los ${estadia} dias y en ${cuotas} cuotas es de ${resultado}`);
    return resultado;
}
function CuotaInteres(cuotas){
    const interes = {
        1 : 0,
        3 : 0.15,
        6 : 0.30,
        12 : 0.45,
        24 : 0.60
    }
    return interes[cuotas] || 0;

}
function Ingreso(){
    let edad = parseInt(prompt("Ingresar edad"))
    while( edad <= 17 ){
        alert("El usuario es menor de edad");
        edad = parseInt(prompt("Ingrese nuevamente su edad"));
    }
    alert("El usuario es mayor de edad, puede continuar a la reserva");
    calcular_estadia();
}