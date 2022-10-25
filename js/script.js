let ingreseCapital = parseInt(prompt("Ingrese capital"))
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

cuotaCalculo()