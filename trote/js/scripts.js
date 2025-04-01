 function calcular(){
    // JS nao possui tipo de variável
    let  mascote, homenagem, doacao, kits

   mascote = document.getElementById("mascote").value;

   homenagem = document.getElementById("homenagem").value;

   doacao = document.getElementById("doacao").value;

   kits = document.getElementById("kits").value;

  let soma = Number(mascote) + Number(homenagem) + Number(doacao)
  alert(soma)
 }