const inputFilter = $("#filtrar-tabela");

inputFilter.addEventListener("input", function() {
    const pacientes = $$(".paciente");
    
    if(this.value.length > 0) {
        pacientes.forEach( paciente => {
            const nome = paciente.querySelector(".info-nome").textContent;

            const expressao = new RegExp(this.value, "i");
    
            if( !expressao.test(nome) ) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        pacientes.forEach( paciente => {
            paciente.classList.remove("invisivel");
        });
    }


})