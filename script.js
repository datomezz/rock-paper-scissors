let rules_container = document.querySelector(".rules-container");
let rules = document.querySelector(".rules");
let rules_close = document.querySelector(".rules-close");

let paper = document.querySelector(".paper-circle");
let rock = document.querySelector(".rock-circle");
let scissors = document.querySelector(".scissors-circle");

let battle_ground = document.querySelector(".battle-ground");
let fight_ground = document.querySelector(".fight-ground");
let play_again = document.querySelector(".play-again");
let result = document.querySelector(".result");

let first_player = document.querySelector("#first_player");
let second_player = document.querySelector("#second_player");

let audio_click = new Audio();
let audio_play = new Audio();
audio_click.src = "/audio/bubles.mp3";
audio_play.src = "/audio/play-again.mp3";

let score = 0;
let players_score = document.querySelector(".players-score");
players_score.innerHTML = score;

let player = ['fighter-circle paper-circle', 'fighter-circle rock-circle', 'fighter-circle scissors-circle'];

function comparison(){
    if(first_player.className === player[0] && second_player.className === player[1]){
        result.innerHTML = "You Win";
        players_score.innerHTML = ++score;
    } else if (first_player.className === player[0] && second_player.className === player[2]){
        result.innerHTML = "You Lose";
        players_score.innerHTML = --score;
    } else if (first_player.className === player[0] && second_player.className === player[0]){
        result.innerHTML = "Tie";
    } else if (first_player.className === player[1] && second_player.className === player[0]){
        result.innerHTML = "You Lose";
        players_score.innerHTML = --score;
    } else if (first_player.className === player[1] && second_player.className === player[2]){
        result.innerHTML = "You Win";
        players_score.innerHTML = ++score;
    } else if (first_player.className === player[1] && second_player.className === player[1]){
        result.innerHTML = "Tie";
    }  else if (first_player.className === player[2] && second_player.className === player[0]){
        result.innerHTML = "You Win";
        players_score.innerHTML = ++score;
    }  else if (first_player.className === player[2] && second_player.className === player[1]){
        result.innerHTML = "You Lose";
        players_score.innerHTML = --score;
    }  else if (first_player.className === player[2] && second_player.className === player[2]){
        result.innerHTML = "Tie";
    } 
}

function battle(){
    let rand = Math.round(Math.random() * 2);
    second_player.className = player[rand];
}

function createFightGround(){
    battle_ground.style.display = "none";
    fight_ground.style.display = "flex";

}
function createBattleGround(){
    battle_ground.style.display = "flex";
    fight_ground.style.display = "none";
}

window.onload = function () {
    rules_container.addEventListener("click", function() {
        rules_container.classList.toggle("block-on-off");
    });
    rules.addEventListener("click", function(){
        rules_container.classList.toggle("block-on-off");
    });
    rules_close.addEventListener("click", function(){
        if(rules_container.className = "rules-container"){
            rules_container.className = "rules-container block-on-off";
        }
    });
    play_again.addEventListener("click", function(){
        createBattleGround();
        first_player.className = "fighter-circle";
        audio_play.play();
    });
    paper.addEventListener("click", function(){
        createFightGround();
        first_player.classList.add("paper-circle");
        battle();
        comparison();
        audio_click.play();
    });
    rock.addEventListener("click", function(){
        createFightGround();
        first_player.classList.add("rock-circle");
        battle();
        comparison();
        audio_click.play();
    });
    scissors.addEventListener("click", function(){
        createFightGround();
        first_player.classList.add("scissors-circle");
        battle();
        comparison();
        audio_click.play();
    });
}

