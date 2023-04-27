const txtArea = document.querySelector('.text-area');
const btnContainer = document.querySelector('.btn-container');
const btnStart = document.querySelector('.btn-start')
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const p = document.createElement('p');
let playerScore = 0;
let cpuScore = 0;

p.innerHTML = "Alright, Let's Battle !Choose your Move!";
txtArea.appendChild(p);

btnStart.addEventListener('click', game());

function getPlayerChoice(){
   let playerChoice;
   btnRock.addEventListener('click', () => {
      playerChoice = btnRock.getAttribute("data-option");
    });
    btnPaper.addEventListener('click', () => {
      playerChoice = btnPaper.getAttribute("data-option");
    });
    btnScissors.addEventListener('click', () => {
      playerChoice = btnScissors.getAttribute("data-option");
    });
    return playerChoice;
}
function getComputerChoice(){
   let random = Math.floor(Math.random() * 3);
   if (random===0){ cpuChoice = 'ROCK'; }
   if (random===1){ cpuChoice = 'PAPER'; }
   if (random===2){ cpuChoice = 'SCISSORS'; }
   return cpuChoice;
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
   txtArea.removeChild('.btnStart');
   console.log('4');

   let btn = document.createElement('button');
   btn.classList.add('btn-rock');
   btn.setAttribute("data-option", "ROCK");
   btn.textContent = 'ROCK';
   btnContainer.appendChild(btn);

   btn = document.createElement('button');
   btn.classList.add('btn-rock');
   btn.setAttribute("data-option", "PAPER");
   btn.textContent = 'PAPER';
   btnContainer.appendChild(btn);

   btn = document.createElement('button');
   btn.classList.add('btn-scissors');
   btn.setAttribute("data-option", "SCISSORS");
   btn.textContent = 'SCISSORS';
   btnContainer.appendChild(btn);

   console.log('5');

   for(i=1;i<=5;i++){
      /***ROUND+i+!***/
      p.textContent = "/***Round"+i+" !***/";
      txtArea.appendChild(p);

      console.log('6');

      playRound(getPlayerChoice,getComputerChoice);

      console.log('7');

      /***SCORE POINTS***/
      /*Player:"+playerScore+"*/
      /*CPU:"+cpuScore"*/
      p.innerHTML = 
         "/***SCORE POINTS***/"
         "/*Player:"+playerScore+"*/"
         "/*CPU:"+cpuScore+"*/"
         "Choose your next move!";
      txtArea.appendChild(p);
      
      console.log('8');
   }

   console.log('9');
   
   if(playerScore==cpuScore){
      p.textContent = "IT'S A TIE! Play the Round of Fate!";
      txtArea.appendChild(p);
      /***/
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
}