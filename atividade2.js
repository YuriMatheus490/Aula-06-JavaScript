function entrar() {
    var nomejs = document.getElementById("nome").value;
    var senhajs = document.getElementById("senha").value;
    var resposta = document.getElementById("resposta");
    var erro = "";
    var certo = "";
        if(nomejs == senhajs){
            erro = "Cadastro inválido, nome e senha iguais ";
            resposta.innerHTML = erro
        }else{
            certo = "Cadastro feito."
            resposta.innerHTML = certo

        }
        

    }
 

