let btnStart = document.querySelector('.btn-start');
let txtArea = document.querySelector('.text-area');
let btnContainer = document.querySelector('.btn-container');
let p = document.createElement('p');
let playerScore = 0;
let cpuScore = 0;

btnStart.addEventListener('click', game);

function getComputerChoice(){
   let random = Math.floor(Math.random() * 3);
   let option;
   if (random===0){ option = 'ROCK'; }
   if (random===1){ option = 'PAPER'; }
   if (random===2){ option = 'SCISSORS'; }
   return option;
}
function playRound(playerSelect,cpuSelect){
   playerSelect = getPlayerChoice();
   compSelect = getComputerChoice();

   p.textContent = "Your "+playerSelect+" against the CPUs "+cpuSelect+"!";
   txtArea.appendChild(p);

   /*DRAW*/
   if (playerSelect == cpuSelect){
      p.textContent = "This round is a Tie!";
      txtArea.appendChild(p);
   }
   else{
   /*ROCK*/
      if (playerSelect == 'ROCK'){
         if(cpuSelect == 'PAPER'){
            cpuScore++;
            p.textContent = "You Lose this round! Paper beats Rock";
            txtArea.appendChild(p);
         }
         else{ 
            playerScore++;
            p.textContent = "You win this round!! Rock beats Scissors";
            txtArea.appendChild(p);
         }
      }
   /*PAPER*/
      if (playerSelect=='PAPER'){
         if(cpuSelect=='SCISSORS'){
            cpuScore++;
            p.textContent = "You Lose this round!! Scissors beats Paper";
            txtArea.appendChild(p);
         }
         else{
            playerScore++;
            p.textContent = "You win this round!! Paper beats Rock";
            txtArea.appendChild(p);
         }
      }
   /*SCISSORS*/
      if (playerSelect=='SCISSORS'){
         if(cpuSelect=='ROCK'){
            cpuScore++;
            p.textContent = "You Lose this round!! Rock beats Scissors";
            txtArea.appendChild(p);
         }
         else{
            playerScore++;
            p.textContent = "You win this round!! Scissors beats Paper";
            txtArea.appendChild(p);
         }
      }
   }
}
function game(){
   p.textContent = "Choose your Move!";
   txtArea.appendChild(p);
   btnStart.remove();

   let btn = document.createElement('button');
   btn.classList.add('btn-rock');
   btn.setAttribute("data-option", "ROCK");
   btn.textContent = 'ROCK';
   btnContainer.appendChild(btn);

   btn = document.createElement('button');
   btn.classList.add('btn-paper');
   btn.setAttribute("data-option", "PAPER");
   btn.textContent = 'PAPER';
   btnContainer.appendChild(btn);

   btn = document.createElement('button');
   btn.classList.add('btn-scissors');
   btn.setAttribute("data-option", "SCISSORS");
   btn.textContent = 'SCISSORS';
   btnContainer.appendChild(btn);

   for(i=1;i<=5;i++){
      p = document.createElement('p');
      p.innerText = "Round "+i+"!";
      txtArea.appendChild(p);

      let cpuChoice = getComputerChoice();
      let playerChoice;

      /* playerChoice ??? */
      /* event listener ??? */
      /* AAAAAAAAAAAAAAAAAAH ??? */

      /*
      playRound(getPlayerChoice,getComputerChoice);

      p.innerText = 
         "SCORE POINTS"
         "Player:"+playerScore+
         "CPU:"+cpuScore+
         "Choose your next move!";
      txtArea.appendChild(p);
      */
   }
/*
   
   if(playerScore==cpuScore){
      p.textContent = "IT'S A TIE! Play the Round of Fate!";
      txtArea.appendChild(p);
   }   
   else { 
      if(playerScore>cpuScore){
         p.textContent = "YOU WIN! CONGRATULATION! THE EARTH IS SAFE NOW";
         txtArea.appendChild(p);
      }
      else{
         p.textContent = "YOU LOSE! EVERYONE IS FUCKING DEAD!!!";
         txtArea.appendChild(p);
      } 
   }
   */
}