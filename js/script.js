let ingreseCapital = parseInt(prompt("Ingrese capital"))
let plazo = 12
let cuota = cuotaPeso(ingreseCapital,plazo)


function cuotaPeso(c,p){
    return c/p
}

function cuotaCalculo(){
    for (let i = 1; i <= plazo; i++){
        alert ("la cuota n° " +i+" es de " + cuota);
    }   
}
cuotaCalculo()