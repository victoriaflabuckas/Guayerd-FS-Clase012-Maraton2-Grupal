//Variables del negocio
const COSTO_STANDARD = 2500;
const COSTO_DOBLE = 3300;
const COSTO_TRIPLE = 4300;
const COSTO_SUITE= 7250;
const COSTO_DESAYUNO = 90;
const MONTO_DTO = 0.9;  
const NOMBRE_HOTEL = "Guayerd";

let listaHuespedes = [];
let montosHabitaciones = [];
let habitacionesOcupadas = [];

let nombre;
let monto;
let habitacion;
let dias;
let continuar = true;

function aplicarDescuento(precio, dto, _days){
        if(dto){
            console.log(precio+" * "+_days+" días (dto "+MONTO_DTO+" = "+dto+") = "+ (precio * _days * MONTO_DTO));
            return (precio * _days) * MONTO_DTO;
        }else { 
            console.log(precio+" * "+_days+" días = "+ (precio * _days));
            return precio * _days;
        }
}

function calcularEstadia(_hab, _dias){

       let opcionDesayuno = false;
       let descuento = false;

       if(_dias >= 5){
            descuento = true;
        }

        switch(_hab){
            case 1: 
                opcionDesayuno = confirm("¿Desea incluír el desayuno? (Costo adicional de $"+ COSTO_DESAYUNO +" por día)");
                if(opcionDesayuno){
                    console.log("Al total siguiente se le suma Extra Desayuno: "+ (COSTO_DESAYUNO *_dias));
                    return aplicarDescuento(COSTO_STANDARD, descuento, _dias) + (COSTO_DESAYUNO *_dias);
                }else{
                    return aplicarDescuento(COSTO_STANDARD, descuento, _dias);
                }
            case 2:
                return aplicarDescuento(COSTO_DOBLE, descuento, _dias);
            case 3:
                return aplicarDescuento(COSTO_TRIPLE, descuento, _dias);
            case 4:
                return aplicarDescuento(COSTO_SUITE, descuento, _dias);   
        }
}

function mostrarFacturaciónTotal(){
    let facturaciónTotal = 0;

    for (let i=0; i < montosHabitaciones.length; i++){
        facturaciónTotal += montosHabitaciones[i];
    }
    
    return "Facturación total: $"+ facturaciónTotal+".";
}

function mostrarListadoHuespedes(){
    return "Nombres de los húespedes actuales: "+ listaHuespedes.join(", ")+".";
}

function mostrarHabitacionesOcupadas(){
    return "Habitaciones actualmente ocupadas: "+ habitacionesOcupadas.join(", ")+".";
}


// Inicio programa

alert("Bienvenido a Hotel "+ NOMBRE_HOTEL +"!")

while(continuar){
   
    nombre= prompt("Ingrese nombre del huesped a registrar: ");
    listaHuespedes.push(nombre);
   
    habitacion = parseInt(prompt("Indique tipo de habitación: \n1. Standard: $"+COSTO_STANDARD+" \n2. Doble: $"+COSTO_DOBLE+" \n3. Triple: $"+COSTO_TRIPLE+" \n4. Suite: $"+COSTO_SUITE));
    dias= parseInt(prompt("Ingrese cantidad de dias de su estadia: "));

    monto = calcularEstadia(habitacion, dias);
    montosHabitaciones.push(monto);

    if (habitacionesOcupadas.length === 0){
        habitacionesOcupadas.push(1);
        console.log("Habitación 1 ocupada");
    } else {
        habitacionesOcupadas.push(habitacionesOcupadas.length+1);
        console.log("Habitación "+ (habitacionesOcupadas.length) +" ocupada");
    }

    alert("El total a abonar es de $"+monto+". Se le ha asignado la habitación Nº "+ habitacionesOcupadas[habitacionesOcupadas.length-1]);

    continuar = confirm("Desea seguir cargando huéspedes?");
}

alert(mostrarFacturaciónTotal() + "\n" + mostrarListadoHuespedes() + "\n" + mostrarHabitacionesOcupadas());