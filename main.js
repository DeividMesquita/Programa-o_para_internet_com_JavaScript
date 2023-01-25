function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Clique aqui para ser redirecionado ao meu GitHub</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar.");
}
function redirecionar(){
    window.open("https://github.com/DeividMesquita");
    //window.location.href = "https://github.com/DeividMesquita";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passar o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"

}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}









/*function soma(n1, n2){
    return n1 + n2

}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

*/
