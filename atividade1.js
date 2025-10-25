function calcular(){
    do{
        var num = parseFloat(document.getElementById("numero").value);
        var resposta = document.getElementById("resposta");
        var invalido = ""
        var valido = ""
        if(isNaN(num) || num < 0 || num >10){
            invalido = document.writeln("Nota inválida");
            resposta.innerHTML = invalido
        }
    }while(isNaN(num) || num < 0 || num >10);
    valido = document.writeln("Nota válida");
    resposta.innerHTML = valido

}