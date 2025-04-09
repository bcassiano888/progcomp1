 function calcular(){
    // JS nao possui tipo de variável
    let  mascote, homenagem, doacao, kits, soma , equipe
    //terminar variaveis 

   mascote = Number(document.getElementById("mascote").value)

   homenagem = Number(document.getElementById("homenagem").value)

   doacao = Number(document.getElementById("doacao").value)

   kits = Number(document.getElementById("kits").value)

   suplemento = Number(document.getElementById("suplemento").value)

   soma = mascote + homenagem 
   equipe = document.getElementById("equipe").value


  if ( equipe == "laranja"){
      if(kits >= 97 && suplemento >=49){
         soma = soma + 5000+((kits-97)*30) + ((suplemento-49)*15)
      }
      else if (kits >= 78 && suplemento >= 39){
         soma = soma + 4000+((kits-78)*30)+((suplemento-39)*15)
      }
      else if (kits >= 49 && suplemento >=25){

         soma = soma + 2500+((kits-49)*30)+ ((suplemento-25)*15)

      }
      else if (kits >= 19  && suplemento >= 10){

         soma = soma + 1000+((kits-19)*30) + ((suplemento-10)*15)

      }
  }
  document.getElementById("soma").innerHTML = `A soma é ${soma}`
 }