function validar() {
   
    var nome = document.getElementById("nomefc").value;
    var email = document.getElementById("emailfc").value;
    var telefone = document.getElementById("telfc").value;
    var select = document.getElementById("select");
    var comentario = document.getElementById("comentario").value;
    telefone = telefone.replace(/\D/g, '');
    
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
    
     if (isNaN(telefone)) {
        
        window.alert("Digite somente numeros ")
        document.getElementById("telfc").focus();
        document.getElementById("telfc").style.borderColor = "#ff0000";
        return false
        
    }
    //verificar quantidade de numeros correta
    if (telefone.length <= 10 ) 
    {
        window.alert("numero a menos")
        return false;
    }

    if (telefone.length >= 12 ) 
    {
        window.alert("numero a mais")
        return false;
    }



    

    //Se tiver 11 caracteres, verificar se começa com 9 o celular
    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9 ) {
        window.alert("o numero está errado, não comeca com 9")
        return false;
    }

    if (select.options[select.selectedIndex].value == "") {
        alert("Selecione uma opção antes de prosseguir");
        document.getElementById("select").focus();
        document.getElementById("select").style.borderColor = "#ff0000";
        return false
    }
    if (comentario == "") {
        window.alert("Escreva algo");
        document.getElementById("comentario").focus();
        document.getElementById("comentario").style.borderColor = "#ff0000";
        return false
    }

    else{
        
        return true
    }



}



