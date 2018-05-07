// Fábio Araujo {https://about.me/faraujo}
// 2018 

var pacientes = document.querySelectorAll(".paciente");

// Selecionando Tabela de Pacientes
var tabela = document.querySelector("#tabela-pacientes");

// Capaturando o envento DoubleClick para remover uma linha da tabela
tabela.addEventListener("dblclick", function(event) {
    
    // Adiconando uma classe .fadeOut para esconde a linha progressivamente 
    event.target.parentNode.classList.add("fadeOut");

    // usando setTimeout cria sleep em milissegundos, antes de remover a linha da tabela  
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
