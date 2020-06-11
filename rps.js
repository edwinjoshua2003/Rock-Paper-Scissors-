let userscore=0;
let compscore=0;

const userscore_span=document.getElementById("userscore");
const compscore_span=document.getElementById("compscore");

const scoreboard_div=document.querySelector(".scoreboard");
let result_p=document.querySelector(".result > p");

const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");


function getComputerChoice(){
    const choices=['r','p','s']
    const x=Math.floor((Math.random()*3))
    return choices[x];

}


function converttoWord(letter){
    if(letter=='r') return "Rock";
    if(letter=='p') return "Paper";
    if(letter=='s') return "Scissors";
}



function win(userChoice,compChoice){
    const smallUser="user".fontsize(4).sub();
    const smallComp="comp".fontsize(4).sub();
    const userChoice_div=document.getElementById(userChoice);
    
    userscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    result_p.innerHTML= `${converttoWord(userChoice)}${smallUser} beats ${converttoWord(compChoice)}${smallComp}.You Win!`;
    userChoice_div.classList.add("greenglow");
    setTimeout(() => userChoice_div.classList.remove("greenglow"),600);
    
}


function lose(userChoice,compChoice){
    const smallUser="user".fontsize(4).sub();
    const smallComp="comp".fontsize(4).sub();
    const userChoice_div=document.getElementById(userChoice);

    compscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;    
    result_p.innerHTML= `${converttoWord(userChoice)}${smallUser} loses to ${converttoWord(compChoice)}${smallComp}.You Lost!`;
    userChoice_div.classList.add("redglow");
    setTimeout(() => userChoice_div.classList.remove("redglow"),600);
}
function draw(userChoice,compChoice){
    const smallUser="user".fontsize(4).sub();
    const smallComp="comp".fontsize(4).sub();
    const userChoice_div=document.getElementById(userChoice);
    result_p.innerHTML= `${converttoWord(userChoice)}${smallUser} equals ${converttoWord(compChoice)}${smallComp}. It's a Draw!`;
    userChoice_div.classList.add("grayglow");
    setTimeout(() => userChoice_div.classList.remove("grayglow"),600);
}


function game(userChoice){
    const compChoice=getComputerChoice();

    switch(userChoice+compChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice,compChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice,compChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice,compChoice);
            break;
    }
}



function main(){
rock_div.addEventListener("click",() => game("r"))

paper_div.addEventListener("click",() => game("p"))

scissors_div.addEventListener("click",() => game("s"))
}


main();