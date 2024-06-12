let gameSeq = [];
let userSeq = [];
let number = ["one","two","three","four"];
let highScore = 0;

let started = false;
let level = 0;

let startBtn = document.querySelector("button");
startBtn.addEventListener("click",function(){
    if(started == false){
        this.style.display = "none";
        // this.classList.add("button-none");
        started = true;
        console.log("Game Started");

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

h2 = document.querySelector("h2");
function levelUp(){
    level++;
    h2.innerHTML = `Level ${level} <br><br>`;

    let randInd = Math.floor(Math.random()*4);
    let randNum = number[randInd];
    let randbtn = document.querySelector(`#${randNum}`);
    gameFlash(randbtn);
    gameSeq.push(randNum)
    userSeq = [];
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
    startBtn.style.display = "";
    // startBtn.classList.remove("button-none");
    startBtn.innerText = "Start Again";
}

let high = document.querySelector(".high-score");
function checkAns(i) {
    if(userSeq[i] === gameSeq[i]){
        if(userSeq.length == gameSeq.length){
            // levelUp();
            setTimeout(levelUp,800);
        }
    }else{
        h2.innerHTML = `Game Over <br> Your Score is <b>${level - 1}</b>`;
        highScore = Math.max(highScore,level-1);
        high.innerHTML = `Highest Score : ${highScore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "";
        },200);
        reset();
    }
}

function btnPress(){
    let btn = this;
    // console.log(btn);
    userFlash(btn);

    let userNum = btn.getAttribute("id");
    userSeq.push(userNum);
    // console.log(userNum);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click" , ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load" , () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})