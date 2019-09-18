//carro.js
//Carro
let xCarros = [600, 600, 600, 600, 600, 600,];
let yCarros = [40, 98, 150,210,260,315];
let velocidadesCarros = [7,2.5,3.5,5,4,6];
let comprimentoCarros =[50,50,80,50,50,80];
let altura = 40;

function mostraCarros(){
  for(let i=0; i< imagemDoCarro.length ; i++){
  image(imagemDoCarro[i], xCarros[i], yCarros[i], comprimentoCarros[i] ,altura);
    }
  }
 
  function movimentaCarro (){
   for(let i=0; i< imagemDoCarro.length ; i++){
   xCarros[i] -= velocidadesCarros[i];
      if (xCarros[i] < -50){
     xCarros[i] = 600; //Volta a posição inicial
  }
 }
}  
