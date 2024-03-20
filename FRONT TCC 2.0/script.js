function validar() {

    var nome = document.getElementById("nomefc").value;
    var email = document.getElementById("emailfc").value;
    var telefone = document.getElementById("telfc").value;
    var select = document.getElementById("select");

    if (nome == "") {
        window.alert("informe o nome");
        document.getElementById("nomefc").focus();
        document.getElementById("nomefc").style.borderColor = "#ff0000";
        return false
    }


    if (email == "") {
        window.alert("informe o email");
        document.getElementById("emailfc").focus();
        document.getElementById("emailfc").style.borderColor = "#ff0000";
        return false
    }

    if (telefone == "") {
        window.alert("informe o Telefone");
        document.getElementById("telfc").focus();
        document.getElementById("telfc").style.borderColor = "#ff0000";
        return false

    }
    if (select.options[select.selectedIndex].value == "") {
        alert("Selecione uma opção antes de prosseguir");
        document.getElementById("select").focus();
        document.getElementById("select").style.borderColor = "#ff0000";
        return false
    }
    if (comentario == "") {
        window.alert("informe o Telefone");
        document.getElementById("comentario").focus();
        document.getElementById("telfc").style.borderColor = "#ff0000";
        return false
    }
}



