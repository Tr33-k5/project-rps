const btnStart = document.querySelector('.btn-start');
const txtArea = document.querySelector('.text-area');
const btnContainer = document.querySelector('.btn-container');
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
function playRound(playerOption,cpuOption){
   p = document.createElement('p');
   p.textContent = "Your "+playerOption+" against the CPUs "+cpuOption+"!";
   txtArea.appendChild(p);

   /*DRAW*/
   if (playerOption == cpuOption){
      p = document.createElement('p');
      p.textContent = "This round is a Tie!";
      txtArea.appendChild(p);
   }
   else{
      /*ROCK*/
      if (playerOption == 'ROCK'){
         if(cpuOption == 'PAPER'){
            cpuScore++;
            p = document.createElement('p');
            p.textContent = "You Lose this round! Paper beats Rock";
            txtArea.appendChild(p);
         }
         else{ 
            playerScore++;
            p = document.createElement('p');
            p.textContent = "You win this round!! Rock beats Scissors";
            txtArea.appendChild(p);
         }
      }
      /*PAPER*/
      if (playerOption=='PAPER'){
         if(cpuOption=='SCISSORS'){
            cpuScore++;
            p = document.createElement('p');
            p.textContent = "You Lose this round!! Scissors beats Paper";
            txtArea.appendChild(p);
         }
         else{
            playerScore++;
            p = document.createElement('p');
            p.textContent = "You win this round!! Paper beats Rock";
            txtArea.appendChild(p);
         }
      }
      /*SCISSORS*/
      if (playerOption=='SCISSORS'){
         if(cpuOption=='ROCK'){
            cpuScore++;
            p = document.createElement('p');
            p.textContent = "You Lose this round!! Rock beats Scissors";
            txtArea.appendChild(p);
         }
         else{
            playerScore++;
            p = document.createElement('p');
            p.textContent = "You win this round!! Scissors beats Paper";
            txtArea.appendChild(p);
         }
      }
   }

   p.innerHTML = "SCORE POINTS<br/>"+
               "Player:"+playerScore+"<br/>"+
               "CPU:"+cpuScore+"<br/>"+
               "Choose your next move!";
   txtArea.appendChild(p);
}

function game(){
   let cpuChoice
   let playerChoice;

   p.textContent = "Choose your Move!";
   txtArea.appendChild(p);
   btnStart.remove();

   let button = document.createElement('button');
   button.classList.add('btn-rock');
   button.setAttribute("data-option", "ROCK");
   button.textContent = 'ROCK';
   btnContainer.appendChild(button);

   button = document.createElement('button');
   button.classList.add('btn-paper');
   button.setAttribute("data-option", "PAPER");
   button.textContent = 'PAPER';
   btnContainer.appendChild(button);

   button = document.createElement('button');
   button.classList.add('btn-scissors');
   button.setAttribute("data-option", "SCISSORS");
   button.textContent = 'SCISSORS';
   btnContainer.appendChild(button);

   let btns = document.querySelectorAll('button');

   for(btn=0;btn<btns.length;btn++){  
      btns[btn].addEventListener('click',function(){

         for(i=1;i<=5;i++){
            p = document.createElement('p');
            p.innerText = "Round "+i+" !";
            txtArea.appendChild(p);
         
            cpuChoice = getComputerChoice();
            playerChoice = this.getAttribute('data-option');
            playRound(playerChoice,cpuChoice);
            if(i==5){
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
            }
         } 
      });
   }

}