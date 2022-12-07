const criptoYa = "https://criptoya.com/api/dolar";

const dolar = document.getElementById("section");

setInterval(() => {
    fetch(criptoYa)
        .then(response => response.json())
        .then(({
            blue,
            ccl,
            mep,
            oficial,
            solidario
        }) => {
            dolar.innerHTML = `
            <p class="oficial">Dolar Oficial: ${oficial} </p>
            <p class="solidario">Dolar Solidario: ${solidario} </p>
            <p class="mep">Dolar MEP: ${mep} </p>
            <p class="ccl">Dolar CCL: ${ccl} </p>
            <p class="blue">Dolar Blue: ${blue} </p>
            `
        })
        .catch(error => console.error(error))
}, 0000)

div.append(dolar);

