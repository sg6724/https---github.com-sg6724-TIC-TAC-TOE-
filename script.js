let buttons=document.querySelectorAll(".button");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

let count=0;
buttons.forEach((button)=>{

    button.addEventListener("click",()=>{
      
      
        let ask=prompt("Enter your symbol between (X/O)").toLowerCase();
        if(ask==="x" || ask==="o"){
        
        button.innerText = ask;
        count++;
        
        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            alert("It's a Tie!!");
        }
        
        }
        else {
          alert("Kindly enter a valid input!"); 
      }
    });
});

const showWinner = (winner) => {
    alert(`${winner} is the winner!!`);
  };

const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = buttons[pattern[0]].innerText;
      let pos2Val = buttons[pattern[1]].innerText;
      let pos3Val = buttons[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };


  let resetbtn=document.querySelector(".reset");
  resetbtn.addEventListener("click",()=>{
    count=0;
    buttons.forEach((button)=>{
      button.textContent=" ";
  
    });
   // window.location.reload();
  });

