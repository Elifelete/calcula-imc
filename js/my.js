const pacientes = $$(".paciente");

const calculaImc = (element) => {
    const peso = element.querySelector(".info-peso").textContent;
    const altura = element.querySelector(".info-altura").textContent;

    return parseInt(peso / (altura * altura));

}

pacientes.forEach( element => {
    const imc = calculaImc(element);

    element.querySelector(".info-imc").textContent = imc;

});


const botaoAdicionar = $("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(e) {
    const tabelaPacientes = $("#tabela-pacientes");

    const nome = $("#nome").value;
    const peso = $("#peso").value;
    const altura = $("#altura").value;
    const gordura = $("#gordura").value;

    const novoPaciente = document.createElement("tr");
    novoPaciente.classList.add("paciente");

    const tdPaciente = `
        <td class="info-nome">
            <span id="delete" onclick="deleta()">X</span>
            ${nome}
        </td>
        <td class="info-peso">${peso}</td>
        <td class="info-altura">${altura}</td>
        <td class="info-gordura">${gordura}</td>
        <td class="info-imc">0</td>
    `; 

    novoPaciente.innerHTML = tdPaciente;

    tabelaPacientes.appendChild(novoPaciente);
})


function deleta() {
    const elemento = event.target;
    const tdElemento = elemento.closest(".paciente");


    tdElemento.remove();

    console.log(tdElemento);
}