const getPatients = $("#buscar-pacientes");

getPatients.addEventListener("click", function() {
    console.log("conectando...");

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        const erroajax = $("#erro-ajax");

        if(xhr.status == 200) {
            const response = xhr.responseText;
            const pacientes = JSON.parse(response);

            erroajax.classList.add("invisivel");

            pacientes.forEach( paciente => {
                console.log(paciente);
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(`Status code: ${xhr.status}`);
            console.log(`Response: ${xhr.responseText}`);
            erroajax.classList.remove("invisivel");
        }

        
        
    })
 
    xhr.send();
})