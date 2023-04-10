function getComputerChoice(){
   let nb = Math.floor(Math.random() * 3);
   if (nb===0){ return 'ROCK'; }
   if (nb===1){ return 'PAPER'; }
   if (nb===2){ return 'SCISSORS'; }
}
function getPlayerChoice(){
   var choice = prompt("Rock, Paper, Scissors ?");
   return choice;
}
function playRound(playerSelect,compSelect){
   var roundMsg;
   playerSelect = getPlayerChoice();
   compSelect = getComputerChoice();
   console.log("Player: "+playerSelect+" CPU: "+compSelect);

   /*DRAW*/
   if (playerSelect == compSelect){
      roundMsg = playerSelect+" Vs "+compSelect+" : It's a Draw !";
   }
   else{
      /*ROCK*/
      if (playerSelect == 'ROCK'){
         if(compSelect == 'PAPER'){
            roundMsg="You Lose! Paper beats Rock";
         }
         else{ 
            roundMsg = "You win! Rock beats Scissors";
         }
      }
      /*PAPER*/
      if (playerSelect=='PAPER'){
         if(compSelect=='SCISSORS'){
            roundMsg = "You Lose! Scissors beats Paper";
            cpuToken=+1;
         }
         else{
            roundMsg = "You win! Paper beats Rock";
         }
      }
      /*SCISSORS*/
      if (playerSelect=='SCISSORS'){
         if(compSelect=='ROCK'){
            roundMsg ="You Lose! Rock beats Scissors";
         }
         else{
            roundMsg = "You win! Scissors beats Paper";
         }
      }
   }
   return roundMsg;
}
function game(){
   /*var playerScore = 0;
   var cpuScore = 0;*/
   for(i=0;i<=5;i++){
      console.log("Round"+i+" !")
      console.log(playRound(getPlayerChoice,getComputerChoice));
      /*
      console.log("//SCORE// player:"+playerScore+" cpu:"+cpuScore);
      */
   }
   /*
   if(playerScore>cpuScore){
      console.log("YOU WON");
   }   
   else{ console.log("YOU LOSE"); }   
   */
}