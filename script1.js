let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

const st = document.getElementById('start')

let h2 = document.querySelector("h2")
// let start = document.addEventListener("start")
// st.addEventListener("click", function(){
//     if (started == false){
//         console.log("game is started");
//         started = true;

//         levelup();
//     }
// }); 

st.addEventListener('click',()=>{
    if (started == false){
        console.log("game is started");
        started = true;
        levelup();
    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function reset(){
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `You are on Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor)
    btnflash(randbtn);
}

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    match(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function match(idx){
    if(userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    } else{
        h2.innerText = `Oops!!! Game Over. You reached at Level ${level}
        Now press Start button to restart the Game...`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "rgb(46, 46, 46)";
        },1000);
        reset();
    }
}