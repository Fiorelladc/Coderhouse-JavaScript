const nombrehtml = document.querySelector('#inputname');
const fechahtml = document.querySelector('#start');
const estadiahtml = document.querySelector('#estadia');
const cuotashtml = document.querySelector('#cuotas');
const divValor = document.querySelector('#valordiv');
const habitacionhtml = document.querySelector('#inputBedroom');
const confirmar_Reserva = document.querySelector('#boton');
const valorHtml = document.querySelector('#reservas tbody');
EventListeners();
function EventListeners(){
    confirmar_Reserva.addEventListener('click', AgregarObjeto);
    document.addEventListener('DOMContentLoaded', ()=>{
        reservaciones =  JSON.parse(localStorage.getItem('reservas')) || [];
        mostrarReservacion();
    })
    estadiahtml.addEventListener("input", simuladorDeEstadia);
    cuotashtml.addEventListener("input", simuladorDeEstadia);
}
function simuladorDeEstadia(){
    const estadia = estadiahtml.value;
    const cuotas = cuotashtml.value;
    
    if (estadia && cuotas) {
        let valor = DiasPrecio(estadia,cuotas);
        divValor.innerHTML = ``;
        const valor_html = document.createElement('div');
        valor_html.classList = "form-control";
        valor_html.innerHTML = `${valor}`;
        divValor.appendChild(valor_html);
    }
}
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
let reservaciones = [];
function mostrarReservacion(){
    valorHtml.innerHTML = ``;
    reservaciones.forEach(reservacion => { 
        const fila = document.createElement('tr');
        fila.innerHTML= `
            <td>${reservacion.nombre}</td>
            <td>${reservacion.estadia}</td>
            <td>${reservacion.cuotas}</td>
            <td>${reservacion.habitacion}</td>
            <td>${reservacion.fecha}</td>
            <td>${reservacion.EndDate}</td>
            <td>$${reservacion.valor}</td>
        `
        valorHtml.appendChild(fila);
    })
    localStorage.setItem('reservas', JSON.stringify(reservaciones));
}
function fechaFinal(fecha, estadia){
    let fecha1 = new Date(fecha);
    let estadia1 = parseInt(estadia);
    fecha1.setDate(fecha1.getDate() + estadia1);
    let fechaActualFormateada = fecha1.toISOString().split('T')[0];
    return fechaActualFormateada;
}
function DiasPrecio(estadia,cuotas){
    let precioEstadia7dias = 50000;
    let precioEstadia14dias = 60000;
    let precioEstadia21dias = 70000;
    let precioEstadia24dias = 80000;
    let valor = 0;
    if(estadia <= 7){
        valor = precioEstadia7dias + precioEstadia7dias*CuotaInteres(cuotas);
    }
    else if(estadia <= 14){
        valor = precioEstadia14dias + precioEstadia14dias*CuotaInteres(cuotas);
    }
    else if(estadia <= 21){
        valor = precioEstadia21dias + precioEstadia21dias*CuotaInteres(cuotas);
    }
    else if(estadia <= 24){
        valor = precioEstadia24dias + precioEstadia24dias*CuotaInteres(cuotas);
    }
    return valor;
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

document.getElementById('boton').onclick=function ( ) {
    console.log ("capturamos el evento click");
    document.getElementById("boton").innerHTML="Su reserva se realizo con exito!";
}

document.getElementById('boton.borrar').onclick=function ( ) {
    console.log ("capturamos el evento click");
    document.getElementById("boton.borrar").innerHTML="Su reserva fue eliminada";
    localStorage.removeItem(reservas);
}

document.getElementById('contacto').onclick=function ( ) {
    console.log ("capturamos el evento click");
    document.getElementById("boton").innerHTML="Su mensaje fue enviado con exito!";
}
