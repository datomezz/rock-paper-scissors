let rulesContainer = document.querySelector(".rules-container");
let rules = document.querySelector(".rules");
let rulesClose = document.querySelector(".rules-close");

window.onload = function () {
    rulesContainer.addEventListener("click", function() {
        rulesContainer.classList.toggle("block-on-off");
    });
    rules.addEventListener("click", function(){
        rulesContainer.classList.toggle("block-on-off");
    });
    rulesClose.addEventListener("click", function(){
        if(rulesContainer.className = "rules-container"){
            rulesContainer.className = "rules-container block-on-off";
        }
    });
}
