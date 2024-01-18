console.log("hello")
const getBtns = document.querySelectorAll(".eachbtn");
const getRestart = document.getElementById("restart");
const getNewbtn = document.querySelector(".pop-up");
const getmsg = document.getElementById("msg");
const getnewgame = document.getElementById("getbtn");
let winningPat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let xTurn = true;
let cnt = 0;
const disableButtons = (()=>{
    getBtns.forEach((e)=>{
        e.disabled = true
});
    getNewbtn.classList.remove("hide");
});

const enableButtons = ()=>{
    getBtns.forEach((e)=>{
        e.innerText = "";
        e.disabled = false;
    });
    getNewbtn.classList.add("hide");
};

const win = (letter)=>{
    disableButtons();
    if(letter == "X"){
        getmsg.innerHTML = " 'X' Wins";
    }
    else {
        getmsg.innerHTML = " '0' Wins";
    }
};

const drawFun = (()=>{
    disableButtons();
    getmsg.innerHTML="It is a draw";
});

getnewgame.addEventListener("click", ()=>{
    cnt = 0;
    enableButtons();
});
getRestart.addEventListener("click", ()=>{
    cnt = 0;
    enableButtons();
});

const winlogic =()=>{
    winningPat.forEach((e)=>{
        if((getBtns[e[0]].textContent === "X" && getBtns[e[1]].textContent === "X" && getBtns[e[2]].textContent === "X") || (getBtns[e[0]].textContent === "0" && getBtns[e[1]].textContent === "0" && getBtns[e[2]].textContent === "0")){
            win(getBtns[e[0]].textContent);
        }
    });
    if(cnt === 9){
        drawFun();
    }
};

 getBtns.forEach((e) => {
    e.addEventListener("click", ()=>{
        if(xTurn){
            e.innerText = "X";
            e.disabled = true;
            xTurn = false;
           } 
           else{
            e.innerText = "0";
            e.disabled = true;
            xTurn = true;
           }
           cnt = cnt+1;
           if(cnt === 9){
               drawFun();
            }
            winlogic();    
    });  
    });
window.onload = enableButtons;
