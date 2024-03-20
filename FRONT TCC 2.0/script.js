function validar() {

    var nome = document.getElementById("nomefc").value;
    var email = document.getElementById("emailfc").value;
    var telefone = document.getElementById("telfc").value;

    if (nome ==""){
        window.alert("informe o nome");
        document.getElementById("nomefc").focus();
        document.getElementById("nomefc").style.borderColor="#ff0000";
        return false
    }


    if (email ==""){
        window.alert("informe o email");
        document.getElementById("emailfc").focus();
        document.getElementById("emailfc").style.borderColor="#ff0000";
        return false
    }
    
    if ( telefone ==""){
        window.alert("informe o Telefone");
        document.getElementById("telfc").focus();
        document.getElementById("telfc").style.borderColor="#ff0000";
        return false

    }

}