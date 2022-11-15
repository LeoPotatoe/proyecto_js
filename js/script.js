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

//SEGUNDA ENTREGA MODIFICADA

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

const prestamos = [];

let go = true;

while (go){
    
    let montoIngresado = prompt("Ingresá el monto solicitado");
    let plazoIngresado = prompt("Ingresá el plazo");
    let tasaIngresada = prompt("Ingresá la tasa anual");
    let salida = prompt("Para finalizar escriba X");

    prestamos.push(new prestamo (montoIngresado, plazoIngresado, tasaIngresada, prestamo.cuota))
    console.log(prestamos)

    if(salida.toUpperCase() == "X"){
        go = false;
        break;
    }
   
}

prestamos.forEach(prestamo => {
    prestamo.cuota();
    alert('la cuota del prestamos es $ '+ prestamo.cuota)   
});

const filtro = prestamos.filter((elemento) => elemento.monto > 10000);
console.log(filtro);