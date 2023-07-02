const nombrehtml = document.querySelector('#inputname');
const fechahtml = document.querySelector('#start');
const estadiahtml = document.querySelector('#estadia');
const cuotashtml = document.querySelector('#cuotas');
const divValor = document.querySelector('#valordiv');
const habitacionhtml = document.querySelector('#inputBedroom');
const confirmar_Reserva = document.querySelector('#boton');
const valorHtml = document.querySelector('#reservas tbody');

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