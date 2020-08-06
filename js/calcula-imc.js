const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const titulo = $(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/* -------------------------------------------- */


const pacientes = $$(".paciente");
pacientes.forEach( element => {

    const tdPeso = element.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdAltura = element.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    const tdImc = element.querySelector(".info-imc");

    let pesoEhValido = validaPeso(peso);
    let alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;

        tdImc.textContent = `Peso inválido: ${peso}`;
        element.classList.add("paciente-invalido");
    }

    if (!alturaEhValido) {
        console.log("Altura inválida!");
        alturaEhValido = false;

        tdImc.textContent = `Altura inválido: ${altura}`;
        element.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValido) {
        const imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
});

function validaPeso(peso) {
    if(peso >= 0 && peso < 700) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    const imc = peso / (altura * altura);

    return imc.toFixed(2);
}