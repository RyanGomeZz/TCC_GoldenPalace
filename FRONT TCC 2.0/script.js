function validarFaleConosco() {

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
    if (telefone.length <= 10) {
        window.alert("numero a menos")
        return false;
    }

    if (telefone.length >= 12) {
        window.alert("numero a mais")
        return false;
    }





    //Se tiver 11 caracteres, verificar se começa com 9 o celular
    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) {
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

    
    else {

        return true
    }




}



const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
}

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value
}

function validarCadastro(){


    var nome = document.getElementById("nomecd").value;
    var email = document.getElementById("emailcd").value;
    var telefone = document.getElementById("telcd").value;
    var senha = document.getElementById("senhacd");
    var senhaConf = document.getElementById("senhaconfcd");
    
   
    telefone = telefone.replace(/\D/g, '');

    if (nome == "") {
        window.alert("informe o nome");
        document.getElementById("nomecd").focus();
        document.getElementById("nomecd").style.borderColor = "#ff0000";
        return false
    }


    if (email == "") {
        window.alert("informe o email");
        document.getElementById("emailcd").focus();
        document.getElementById("emailcd").style.borderColor = "#ff0000";
        return false
    }

    if (telefone == "") {
        window.alert("informe o Telefone");
        document.getElementById("telcd").focus();
        document.getElementById("telcd").style.borderColor = "#ff0000";
        return false

    }

    if (isNaN(telefone)) {

        window.alert("Digite somente numeros ")
        document.getElementById("telcd").focus();
        document.getElementById("telcd").style.borderColor = "#ff0000";
        return false

    }
    //verificar quantidade de numeros correta
    if (telefone.length <= 10) {
        window.alert("numero a menos")
        return false;
    }

    if (telefone.length >= 12) {
        window.alert("numero a mais")
        return false;
    }

    //Se tiver 11 caracteres, verificar se começa com 9 o celular
    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) {
        window.alert("o numero está errado, não comeca com 9")
        return false;
    }

      
if(senha == ""){
    window.alert("digite uma senha ");
    document.getElementById("senhacd").focus();
    document.getElementById("senhacd").style.borderColor = "#ff0000";
    return false
}

if(senhaConf == ""){
    window.alert("digite uma senha ");
    document.getElementById("senhaconfcd").focus();
    document.getElementById("senhaconfcd").style.borderColor = "#ff0000";
    return false
}

    if(senha != senhaConf){
        window.alert("As senhas não são iguais")
        document.getElementById("senhaconfcd").focus();
        document.getElementById("senhaconfcd").style.borderColor = "#ff0000";
        return false

    }

    
    

    
    else {

        return true
    }


}


function validarEmail(){
   
    var email = document.getElementById("emailpg1").value;
  
   if  (email == "") {
    window.alert("informe o email");
    document.getElementById("emailpg1").focus();
    document.getElementById("emailpg1").style.borderColor = "#ff0000";
    return false
}

 
  

}


function esqueciMinhaSenha() {


var senha = document.getElementById("senhapg2").value;
var senha2 = document.getElementById("senha2pg2").value;



 if (senhapg2 != senha2pg2){
    window.alert("Senhas não coincidem");
    document.getElementById("senha2pg2").focus();
    document.getElementById("senha2pg2").style.borderColor = "#ff0000";
    return false
}

}