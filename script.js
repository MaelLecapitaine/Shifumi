/**
 * 0 : Pierre
 * 1 : Feuille
 * 2 : Ciseau
 * @returns integer between 0 and 2
 */

function bot(){
    let play = (Math.random() * 3).toFixed(0);
    let playText;

    if(play == 0)
        playText = "Pierre";
    else if(play == 1){
        playText = "Feuille";
    }
    else{
        playText = "Ciseaux"
    }

    document.getElementById("labelBot").textContent = playText;
    
    return play ;
}

var wins = 0;
var losses = 0;
var equalities = 0;



let handleBoutonKayou = document.getElementById("boutonKayou")
handleBoutonKayou.addEventListener(
    'click', function() {
        let botJoue = bot();
        if (botJoue == 0){
            equalities += 1;
            document.getElementById("labelEqualities").textContent = equalities;
        }
        else if(botJoue == 1){
            losses += 1;
            document.getElementById("labelLosses").textContent = losses;
        }
        else{
            wins += 1;
            document.getElementById("labelWins").textContent = wins;
        }
    }
)

let handleBoutonFeuille = document.getElementById("boutonFeuille")
handleBoutonFeuille.addEventListener(
    'click', function() {
        let botJoue = bot();
        if (botJoue == 1){
            equalities += 1;
            document.getElementById("labelEqualities").textContent = equalities;
        }
        else if(botJoue == 2){
            losses += 1;
            document.getElementById("labelLosses").textContent = losses;
        }
        else{
            wins += 1;
            document.getElementById("labelWins").textContent = wins;
        }
    }
)

let handleBoutonCiseau = document.getElementById("boutonCiseau")
handleBoutonCiseau.addEventListener(
    'click', function() {
        let botJoue = bot();
        if (botJoue == 2){
            equalities += 1;
            document.getElementById("labelEqualities").textContent = equalities;
        }
        else if(botJoue == 0){
            losses += 1;
            document.getElementById("labelLosses").textContent = losses;
        }
        else{
            wins += 1;
            document.getElementById("labelWins").textContent = wins;
        }
    }
)

document.getElementById("restart").addEventListener('click', function(){
    location.reload();
})
