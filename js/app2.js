const nombrehtml = document.querySelector('#inputname');
const fechahtml = document.querySelector('#start');
const estadiahtml = document.querySelector('#estadia');
const cuotashtml = document.querySelector('#cuotas');
const divValor = document.querySelector('#valordiv');
const habitacionhtml = document.querySelector('#inputBedroom');
const confirmar_Reserva = document.querySelector('#boton');
const valorHtml = document.querySelector('#reservas tbody');

let monedaEl_one = document.getElementById('moneda-uno');
let monedaEl_two = document.getElementById('moneda-dos');
const cambioEl = document.getElementById('cambio');
let moneda_one = monedaEl_one.value;
let moneda_two = monedaEl_two.value;
let reservaciones = [];
let bandera = true;


function AgregarObjeto(e){
    let nombre = nombrehtml.value;
    let fecha = fechahtml.value;
    let estadia = estadiahtml.value;
    let cuotas = cuotashtml.value;
    let habitacion = habitacionhtml.value;
    let valor = DiasPrecio(estadia,cuotas);
    let EndDate = fechaFinal(fecha,estadia);
    const reservacion = {
        nombre,
        fecha,
        estadia,
        cuotas,
        habitacion,
        valor,
        EndDate
    }
    reservaciones.push(reservacion);
    console.log(reservacion);
    mostrarReservacion();
}

async function AgregarObjeto(e){
    let nombre = nombrehtml.value;
    let fecha = fechahtml.value;
    let estadia = estadiahtml.value;
    let cuotas = cuotashtml.value;
    let habitacion = habitacionhtml.value;
    let valor = 0;
    if(bandera){
        valor = DiasPrecio(estadia,cuotas);
    }else{
        valor = await calcularDivisa();
    }
    
    let EndDate = fechaFinal(fecha,estadia);
    const reservacion = {
        nombre,
        fecha,
        estadia,
        cuotas,
        habitacion,
        valor,
        EndDate
    }
    reservaciones.push(reservacion);
    console.log(reservaciones);
    localStorage.setItem('reservas', JSON.stringify(reservaciones));
    
    mostrarReservacion();
}