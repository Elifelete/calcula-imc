const botaoAdicionar = $("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {

    const form = $("#form-adiciona");
    // Extraindo informações do paciente do form
    const paciente = obtemDadosDoPaciente(form);

    const erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros);

        return
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    $("#mensagens-erro").innerHTML = "";

})


function adicionaPacienteNaTabela(paciente) {
    // Cria tr do paciente
    const pacienteTr = montaTr(paciente);

    // Adicionando o paciente na tabela
    const tabelaPaciente = $("#tabela-pacientes");
    tabelaPaciente.appendChild(pacienteTr);
}


function validaPaciente(paciente) {

    const erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    } 

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagemDeErro(erros) {
    const ul = $("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach( erro => { 
        const li = document.createElement("li");
        li.textContent = erro;

        ul.appendChild(li);
    });
}

function obtemDadosDoPaciente(form) {

    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

const montaTr = (paciente) => {
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    const dadosFormatado = `
        <tr class="paciente">
            <td class="info-nome">${paciente.nome}</td>
            <td class="info-peso">${paciente.peso}</td>
            <td class="info-altura">${paciente.altura}</td>
            <td class="info-gordura">${paciente.gordura}</td>
            <td class="info-imc">${paciente.imc}</td>
        </tr>
    `;

    pacienteTr.innerHTML = dadosFormatado;

    return pacienteTr;
}