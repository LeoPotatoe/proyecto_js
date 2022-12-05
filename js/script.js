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

class prestamo {
    constructor(monto, tna, plazo) {
        this.monto = parseFloat(monto);
        this.tna = parseFloat(tna / 100);
        this.plazo = parseInt(plazo);

    }
    caidaCuota() {

        while (llenarTabla.firstChild) {
            llenarTabla.removeChild(llenarTabla.firstChild);
        }

        let fechas = [];
        let fechaActual = Date.now();
        let mes_actual = moment(fechaActual);
        mes_actual.add(1, "month");

        let pagoInteres = 0,
            pagoCapital = 0,
            cuota = 0;

        cuota = this.monto * (Math.pow(1 + (this.tna / 100), this.plazo) * (this.tna / 100)) / (Math.pow(1 + (this.tna / 100), this.plazo) - 1);

        for (let i = 1; i <= this.plazo; i++) {

            pagoInteres = parseFloat(this.monto * (this.tna / 100));
            pagoCapital = cuota - pagoInteres;
            this.monto = parseFloat(this.monto - pagoCapital);

            fechas[i] = mes_actual.format('DD-MM-YYYY');
            mes_actual.add(1, "month");

            const fila = document.createElement('tr');
            fila.innerHTML = `
<td>${fechas[i]}</td>
<td>${cuota.toFixed(2)}</td>
<td>${pagoCapital.toFixed(2)}</td>
<td>${pagoInteres.toFixed(2)}</td>
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

calcular.addEventListener('click', () => {
    const monto = document.getElementById("monto").value;
    const plazo = document.getElementById("plazo").value;
    const tna = document.getElementById("tna").value;

    const calcularCuota = new prestamo(monto, tna, plazo);

    console.log(calcularCuota)
    calcularCuota.caidaCuota()
    datosForm.reset();

    localStorage.setItem("pp", JSON.stringify(calcularCuota));
    console.log(datosForm)
    
})

reset.addEventListener('click', () => {
    document.getElementById("lista_tabla").innerHTML = '';
})

ultima.addEventListener('click', () => {
    let datosGuardados = JSON.parse(localStorage.getItem("pp"));
    const calcularCuota = new prestamo(datosGuardados.monto, datosGuardados.tna, datosGuardados.plazo)
    console.log(calcularCuota);

    if (!datosGuardados) {
        alert("No se encontraron simulaciones previas");
    } else {
        calcularCuota.caidaCuota(datosGuardados);
        datosForm.reset();
    }
})


//backup

/* const monto = document.getElementById('monto');
const plazo = document.getElementById('plazo');
const tna = document.getElementById('tna');
const calcular = document.getElementById('calcular');
const llenarTabla = document.querySelector('#lista_tabla tbody');

calcular.addEventListener('click', () => {
    calcularCuota(monto.value, tna.value, plazo.value);
})

function calcularCuota(monto, tna, plazo)  {

    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual.add(1, 'month');    

    let pagoInteres=0, pagoCapital = 0, cuota = 0;

    cuota = monto * (Math.pow(1+tna/100, plazo)*tna/100)/(Math.pow(1+tna/100, plazo)-1);

    for(let i = 1; i <= plazo; i++) {

        pagoInteres = parseFloat(monto*(tna/100));
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat(monto-pagoCapital);

        //Formato fechas
        fechas[i] = mes_actual.format('DD-MM-YYYY');
        mes_actual.add(1, 'month');

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${fechas[i]}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${pagoCapital.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(fila)
    }
} */