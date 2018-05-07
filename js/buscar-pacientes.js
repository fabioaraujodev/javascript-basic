// Fábio Araujo {https://about.me/faraujo}
// 2018 

// usando XMLHttpRequest para retornar json com pacientes
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        // verifica se o status code é 200, ou sejá, se o url respondeu 
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            // loop para buscar paciente e incluir na tabela usando a função adicionaPacienteNaTabela <form.js>
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    // Enviando a requisição 
    xhr.send();
});
