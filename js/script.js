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

/* class prestamo {
    constructor(monto, plazo, tasaAnual) {
        this.monto = parseFloat(monto);
        this.plazo = parseInt(plazo);
        this.tasaAnual = parseFloat(tasaAnual/100);
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
 */
//TERCERA ENTREGA

const iva = 0.21

class prestamo {
    constructor(monto, plazo, tasaAnual) {
        this.monto = parseFloat(monto);
        this.plazo = parseInt(plazo);
        this.tasaAnual = parseFloat(tasaAnual / 100);
        /* this.fecha = new Date() */
    }
    /* mes(){
    this.mes = this.fecha
    } */
    cuota() {
        this.cuota = ((this.monto * (this.tasaAnual / 12)) / (1 - (1 + this.tasaAnual / 12) ** -this.plazo)).toFixed(2);
      
    }
    intereses() {
        this.intereses = (this.monto * (this.tasaAnual / 12)).toFixed(2);
    }
    amortizacion() {
        this.amortizacion = (this.cuota - this.intereses);
    }
    impuestoIva() {
        this.impuestoIva = (this.intereses * iva).toFixed(2);
    }
    capitalAmortizado() {
        this.capitalAmortizado = this.amortizacion;
    }
    capitalAdeudado() {
        this.capitalAdeudado = (this.monto - this.capitalAmortizado);
    }
}
const calcular = document.getElementById("calcular");
const reset = document.getElementById("reset");
const ultima = document.getElementById("ultima");
const confirmacion = document.querySelector(".confirmacion");
const datosForm = document.getElementById("prespersonal");

function guardarPrestamoStorage(datos) {
    localStorage.setItem('pp', JSON.stringify(datos));
}

function recuperarPrestamoStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function resultadoPrestamo(element) {
    let lista = document.querySelector("ul");
    let items = [];
    for (const atributo in element) {
        let li = ` <li>${atributo}: ${element[atributo]}</li> `;
        items.push(li);
    }
    items.forEach(item => {
        lista.innerHTML += item;
    });
}

calcular.addEventListener("click", () => {
    const monto = document.querySelector(".monto").value;
    const plazo = document.querySelector(".plazo").value;
    const tasaAnual = document.querySelector(".tna").value;
    const datosPrestamo = new prestamo(monto, plazo, tasaAnual);
    console.log(monto)
    // datosPrestamo.mes();
    datosPrestamo.cuota();
    datosPrestamo.intereses();
    datosPrestamo.amortizacion();
    datosPrestamo.impuestoIva();
    datosPrestamo.capitalAmortizado();
    datosPrestamo.capitalAdeudado();
    resultadoPrestamo(datosPrestamo)

    guardarPrestamoStorage(datosPrestamo);
    datosForm.reset();
})

reset.addEventListener('click', () => {
    document.querySelector("ul").innerHTML = '';
})

ultima.addEventListener('click', () => {
    let datosGuardados = recuperarPrestamoStorage('pp');
    console.log(datosGuardados);

    if (!datosGuardados) {
        alert('No se encontraron simulaciones previas');
    } else {
        resultadoPrestamo(datosGuardados);
        datosForm.reset();
    }
})