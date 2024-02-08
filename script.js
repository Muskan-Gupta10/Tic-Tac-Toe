console.log("welcome");
let gameOver = false;
let turn = "X";

const ChangeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const Checkwin = () => {
  
  let boxtext = document.getElementsByClassName("boxtext");
  let info = document.querySelector(".turn");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let count =0
  let flag =true
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      
      info.innerText = boxtext[e[0]].innerText + " WON";
      gameOver = true;
      flag=false
    }
    if(boxtext[e[0]].innerText !== "" && boxtext[e[1]].innerText !== "" && boxtext[e[2]].innerText !== ""){
      count++
    }
      
      if(count==8 && flag==true){
        info.innerText = "Game Over, Start Again" ;
        gameOver= true
      }
      
    
   
  });

};


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((item) => {
  //getting each box

  let boxtext = item.querySelector(".boxtext");
  //console.log(item.querySelector(".boxtext"));
  item.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = ChangeTurn();

      Checkwin();
      if (!gameOver) {
        let info = document.getElementsByClassName("turn")[0];
        //console.log(info);
        info.innerText = "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((e) => {
    e.innerText = "";
  });
  turn = "X";
  document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
});
