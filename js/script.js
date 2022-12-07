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

/* const iva = 0.21

class prestamo {
    constructor(monto, plazo, tasaAnual) {
        this.monto = parseFloat(monto);
        this.plazo = parseInt(plazo);
        this.tasaAnual = parseFloat(tasaAnual / 100);
    }
 
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
    let lista = document.querySelector("th");
    let items = [];
    for (const atributo in element) {
        let th = ` <th>${atributo}: ${element[atributo]}</th> `;
        items.push(th);
    }
    items.forEach(item => {
        lista.innerHTML += item;
    });
}

calcular.addEventListener("click", () => {
    const monto = document.querySelector(".monto").value;
    const plazo = document.querySelector(".plazo").value;
    const tasaAnual = document.querySelector(".tasaAnual").value;
    const datosPrestamo = new prestamo(monto, plazo, tasaAnual);
    console.log(monto)
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
    document.querySelector("th").innerHTML = '';
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
})  */

//ENTREGA FINAL

const iva = 0.21;
class prestamo {
    constructor(monto, tna, plazo) {
        this.monto = parseFloat(monto);
        this.tna = parseFloat(tna / 100);
        this.plazo = parseInt(plazo);
        this.interes = 0;
        this.amortizacion = 0;
        this.cuotaIva = 0;
        this.impuesto = 0;
        this.cuota = 0;
    }

        cuotaConIva(){ 
        this.cuotaIva = ((this.monto * (((this.tna / 12))+((this.tna / 12))*iva))  / (1 - (1 + ((this.tna / 12)+(this.tna / 12)*iva)) ** -this.plazo));
    }

        cuotaSinIva(){
        this.cuota = ((this.monto * ((this.tna / 12))) / (1 - ((1 + this.tna / 12)) ** -this.plazo));
    }

        intereses(){
        this.interes = (this.monto * (this.tna / 12));
    }

        impuestoIva(){
        this.impuesto = (this.interes * iva);
    }

        amortizaciones(){
        this.amortizacion = (this.cuotaIva - this.interes - this.impuesto);
    }

        saldo(){
        this.monto = (this.monto - this.amortizacion);
    }

        caidaCuota(){
            while (llenarTabla.firstChild) {
                llenarTabla.removeChild(llenarTabla.firstChild);
        }

            let fechas = [];
            let fechaActual = Date.now();
            let mes_actual = moment(fechaActual);
            mes_actual.add(1, "month");

            for (let i = 1; i <= this.plazo; i++) {

                this.intereses();
                this.impuestoIva();
                this.amortizaciones();
                this.saldo();

            fechas[i] = mes_actual.format("MM-YYYY");
            mes_actual.add(1, "month");

            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${fechas[i]}</td>
                <td>${this.cuotaIva.toFixed(2)}</td>
                <td>${this.amortizacion.toFixed(2)}</td>
                <td>${this.interes.toFixed(2)}</td>
                <td>${this.impuesto.toFixed(2)}</td>
                <td>${this.monto.toFixed(2)}</td>
                `;
            llenarTabla.appendChild(fila)  
        }
    }
}

const calcular = document.getElementById("calcular");
const llenarTabla = document.querySelector("#lista_tabla tbody");
const reset = document.getElementById("borrar");
const ultima = document.getElementById("ultima");
const confirmacion = document.querySelector(".confirmacion");
const datosForm = document.getElementById("prespersonal");

function guardarPrestamoStorage(datos) {
    localStorage.setItem('pp', JSON.stringify(datos));
}

function recuperarPrestamoStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

calcular.addEventListener('click', () => {
    const capital = document.getElementById("capital").value;
    const plazo = document.getElementById("plazo").value;
    const tna = document.getElementById("tna").value;

    const calcularCuota = new prestamo(capital, tna, plazo);
    console.log(calcularCuota)

    calcularCuota.cuotaConIva()
    calcularCuota.cuotaSinIva()
    calcularCuota.caidaCuota()

    guardarPrestamoStorage(calcularCuota);
    datosForm.reset();
    
})

reset.addEventListener('click', () => {
    document.getElementById("cuerpo").innerHTML = '';
})

ultima.addEventListener('click', () => {
    let datosGuardados = recuperarPrestamoStorage('pp');
    console.log(datosGuardados);

    if (!datosGuardados) {
        alert('No se encontraron simulaciones previas');
    } 
    else {
        calcularCuota(datosGuardados);
        datosForm.reset();
    }
})

const criptoYa = "https://criptoya.com/api/dolar";

const dolar = document.createElement("section");

setInterval( ()=> {
    fetch(criptoYa)
        .then(response => response.json())
        .then(({blue, ccb, ccl, mep, oficial, solidario}) => {
            dolar.innerHTML = `
            <h2>Tipos de Dolar: </h2>
            <p>Dolar Oficial: ${oficial} </p>
            <p>Dolar Solidario: ${solidario} </p>
            <p>Dolar MEP: ${mep} </p>
            <p>Dolar CCL: ${ccl} </p>
            <p>Dolar Ccb: ${ccb} </p>
            <p>Dolar Blue: ${blue} </p>
            `
        })
        .catch(error => console.error(error))
}, 3000)

