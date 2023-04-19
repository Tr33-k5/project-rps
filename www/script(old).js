let playerScore = 0;
let cpuScore = 0;

function getComputerChoice(){
   let nb = Math.floor(Math.random() * 3);
   if (nb===0){ return 'ROCK'; }
   if (nb===1){ return 'PAPER'; }
   if (nb===2){ return 'SCISSORS'; }
}
function getPlayerChoice(){
   let choice = prompt("Rock, Paper, Scissors ?");
   return choice.toUpperCase();
}
function playRound(playerSelect,compSelect){
   let roundMsg;
   playerSelect = getPlayerChoice();
   compSelect = getComputerChoice();
   console.log("Player:"+playerSelect+" CPU:"+compSelect);

   /*DRAW*/
   if (playerSelect == compSelect){
      roundMsg = playerSelect+" Vs "+compSelect+" : It's a Draw !";
   }
   else{
   /*ROCK*/
      if (playerSelect == 'ROCK'){
         if(compSelect == 'PAPER'){
            roundMsg="You Lose! Paper beats Rock";
            cpuScore++;
         }
         else{ 
            roundMsg = "You win! Rock beats Scissors";
            playerScore++;
         }
      }
   /*PAPER*/
      if (playerSelect=='PAPER'){
         if(compSelect=='SCISSORS'){
            roundMsg = "You Lose! Scissors beats Paper";
            cpuScore++;
         }
         else{
            roundMsg = "You win! Paper beats Rock";
            playerScore++;
         }
      }
   /*SCISSORS*/
      if (playerSelect=='SCISSORS'){
         if(compSelect=='ROCK'){
            roundMsg ="You Lose! Rock beats Scissors";
            cpuScore++;
         }
         else{
            roundMsg = "You win! Scissors beats Paper";
            playerScore++;
         }
      }
   }
   console.log(roundMsg);
}
function game(){
   console.log("BEST OF 5!")
   for(i=0;i<=5;i++){
      console.log("Round"+i+" !")
      playRound(getPlayerChoice,getComputerChoice);
      
      console.log("//SCORE// Player:"+playerScore+" Cpu:"+cpuScore);
      
   }
   
   if(playerScore==cpuScore){
      console.log("IT'S A TIE!");
   }   
   else { 
      if(playerScore>cpuScore){
         console.log("YOU WIN!");
      }
      else{
         console.log("YOU LOSE!");
      } 
   }
}