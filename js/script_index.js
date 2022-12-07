const criptoYa = "https://criptoya.com/api/dolar";

const dolar = document.getElementById("section");

setInterval(() => {
    fetch(criptoYa)
        .then(response => response.json())
        .then(({
            blue,
            ccb,
            ccl,
            mep,
            oficial,
            solidario
        }) => {
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

div.append(dolar);

