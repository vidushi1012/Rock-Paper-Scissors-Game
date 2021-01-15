const game = () => {
  let pScore = 0;
  let cScore = 0;
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  const matchStart =()=>{
    const options = document.querySelectorAll(".options button");
    const comp = document.querySelector(".computer-hand");
    const player = document.querySelector(".player-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand=>{
      hand.addEventListener("animationend",function(){
        this.style.animation = "";
      })
    })

    const compOptions = ["rock","paper", "scissors"];

    options.forEach(option =>{
      option.addEventListener("click",function(){
        const num = Math.floor(Math.random()*3);
        const compChoice = compOptions[num];

        setTimeout(()=>{
          comp.src= "images/"+ compChoice + ".png";
          player.src = `images/${this.textContent}.png`;
          compareHands(this.textContent, compChoice);
        },2000);
        player.style.animation = "shakePlayer 2s ease";
        comp.style.animation = "shakeComputer 2s ease";
      })
    })
  }
  const updateScore = () =>{
    const playerScore = document.querySelector(".player-score p");
    const compScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    compScore.textContent = cScore;
  }
  const isGameOver = ()=>{
    if (pScore === 5 || cScore === 5) {
    return true;
    }
    return false;
  }


  const compareHands = (playerChoice, compChoice) =>{
    const result = document.querySelector(".winner");
    const end = document.querySelector(".end");
    const buttons = document.querySelector(".options");
    const playAgain = document.querySelector(".playAgain");

    if(playerChoice===compChoice)
    {
      result.textContent = "It's a tie";
      return;
    }
    if(playerChoice==="rock")
    {
      if(compChoice==="paper")
      {
        cScore++;
        updateScore();
          if(cScore===5){
            buttons.classList.add("fadeOut");
            result.textContent = "Game over: Computer wins"
            end.classList.add("fadeIn");

          }
        else{
          result.textContent = "Computer wins";
          return;
        }
      }
      else{
        pScore++;
        updateScore();
          if(pScore===5)
          {
            result.textContent = "Game over: You win"
            buttons.classList.add("fadeOut");
              end.classList.add("fadeIn");

          }
        else{
          result.textContent = "You win";
          return;
        }

      }
    }
    if(playerChoice==="paper"){
      if(compChoice === "scissors")
      {
        cScore++;
        updateScore();
          if(cScore===5)
          {
            result.textContent = "Game over: Computer wins"
            buttons.classList.add("fadeOut");
              end.classList.add("fadeIn");
          }
        else{
          result.textContent = "Computer wins";
          return;
        }
      }
      else{
        pScore++;
        updateScore();
          if(pScore===5)
          {
            result.textContent = "Game over: You win"
            buttons.classList.add("fadeOut");
              end.classList.add("fadeIn");
          }
          else{
            result.textContent = "You win";
            return;
        }
      }
    }
    if(playerChoice==="scissors"){
      if(compChoice==="rock")
      {
        cScore++;
        updateScore();
          if(cScore===5)
          {
            result.textContent = "Game over: Computer wins"
            buttons.classList.add("fadeOut");
              end.classList.add("fadeIn");
          }
          else{
            result.textContent = "Computer wins";
            return;
          }
      }
      else{
        pScore++;
        updateScore();
          if(pScore===5)
          {
            result.textContent = "Game over: You win"
            buttons.classList.add("fadeOut");
              end.classList.add("fadeIn");
          }
          else{
            result.textContent = "You win";
            return;
          }
      }
    }
  }
const playAgain = document.querySelector(".end button");
playAgain.addEventListener("click",function(){
  location.reload();
})




  startGame();
  matchStart();
};


game();
