//PRIMERA ENTREGA
/* let ingreseCapital = parseInt(prompt("Ingrese capital"))
let plazo = 12
let cuota = cuotaPeso(ingreseCapital,plazo)


function cuotaPeso(c,p){
    return c/p
}

function cuotaCalculo(){
    if(ingreseCapital>0){
        for (let i = 1; i <= plazo; i++){
         alert ("la cuota n° " +i+" es de " + cuota);
        }   
    }
    else{
        alert("numero no valido")
    }
}

cuotaCalculo() */

//SEGUNDA ENTREGA

class prestamo {
    constructor(monto, plazo, tasaAnual) {
        this.monto = parseFloat(monto);
        this.plazo = parseInt(plazo);
        this.tasaAnual = parseFloat(tasaAnual);
        this.año = 365;
    }
    cuota(){
        this.cuota = (this.monto*(this.tasaAnual/12))/(1-(1+this.tasaAnual/12)**-this.plazo) 
    }

}

let montoIngresado = prompt('Ingresa el monto solicitado');
let plazoIngresado = prompt('Ingresa el plazo');
let tasaIngresada = prompt('Ingresa la tasa anual');


const prestamos = [];

   prestamos.push(new prestamo (montoIngresado, plazoIngresado, tasaIngresada))

prestamos.forEach(prestamo => {
    prestamo.cuota();
    alert('la cuota del prestamos es $ '+ prestamo.cuota)   
});