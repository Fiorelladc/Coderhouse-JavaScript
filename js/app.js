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

//api divisas

async function calcularDivisa(){
    bandera = false;
    let monedaCambio = 0 ;
    try {
        moneda_one = monedaEl_one.value;
        
        const reponse = await fetch(`https://api.exchangerate-api.com/v4/latest/ARS`);
        const data = await reponse.json();
        const taza = data.rates[moneda_one];
        const estadia = estadiahtml.value;
        const cuotas = cuotashtml.value;
        let valor = DiasPrecio(estadia,cuotas); // 7-1 : 50000
        monedaCambio = (valor * taza).toFixed(2); //194.00
        console.log(`monedaCambio1 ${monedaCambio}`);
    }catch{
        console.log('error');
    }
    try {
        moneda_two = monedaEl_two.value;
        console.log(moneda_one);
        console.log(moneda_two);
        const reponse = await fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`);
        const data = await reponse.json();
        const taza = data.rates[moneda_two]; // 257.95 * 194
        monedaCambio = (monedaCambio * taza).toFixed(2); // 5042
        cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;
        console.log(`monedaCambio2 ${monedaCambio}`);
    }catch{
        console.log('error');
    }
    const valor_html = document.createElement('div');
    valor_html.classList = "form-control";
    valor_html.innerHTML = `${monedaCambio}`;
    while (divValor.firstChild) {
        divValor.removeChild(divValor.firstChild);
    }
    divValor.appendChild(valor_html);
    moneda_two = monedaEl_two.value;
    const cambioactual = document.querySelector('#CambioActual');
    cambioactual.innerText = `El Cambio actual es ${moneda_two}`;
    return monedaCambio; // precio final en la divisa que busco
}
function cambioMoneda(){
    monedaEl_one = document.getElementById('moneda-uno');
    monedaEl_two = document.getElementById('moneda-dos');
    temp = monedaEl_one.value;
    moneda_one = monedaEl_two.value;
    moneda_two = temp;
    calcularDivisa();
}

//reservacion 

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

//Boton Confirmar reserva
document.getElementById('boton').onclick=function ( ) {
    console.log ("capturamos el evento click");
    document.getElementById("boton").innerHTML="Su reserva se realizo con exito!";
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Reserva Exitosa!',
        showConfirmButton: false,
        timer: 1500
    })
}

//Boton eliminar reserva
document.getElementById('boton.borrar').onclick=function ( ) {
    console.log ("capturamos el evento click");
    document.getElementById("boton.borrar").innerHTML="Su reserva fue eliminada";
}

window.localStorage.clear();

//Boton enviar mensaje

document.getElementById('contacto').onclick=function ( ) {
    console.log ("capturamos el evento click");
    document.getElementById("boton").innerHTML="Su mensaje fue enviado con exito!";
}
