function calcularimc(){
    peso =document.querySelector("#peso");
    altura = document.querySelector("#altura");
    imc = peso.value / (altura.value*altura.value);
   document.getElementById('resultado').value = imc;
}
let botao = document.querySelector("#calcular");
botao.addEventListener("click", calcularimc);

function limpar(){
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').value = '';
}
let botaolimpar = document.querySelector("#limpar");
botao.addEventListener("click", limpar);