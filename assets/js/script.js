var score_1 = 0;
var current1 = 0;
var score_2 = 0;
var current2 = 0;
var currentPlayer = 1; // Joueur 1 commence
var roundScore = 0;
var isGameActive = true;
var lancerDe = document.getElementById('lancerde');
var des = document.getElementById('des');
var nouvellePartie = document.querySelector('.btn_newgame')


lancerDe.addEventListener('click', function(){
  if (isGameActive) {
  var nombreAleatoire = Math.floor(Math.random()*6) + 1;
  des.src = '../images/dice-'+ nombreAleatoire +'.svg';
  des.style.display = 'block';
  console.log('click'); 

  if (nombreAleatoire === 1) {
    roundScore = 0;
    document.getElementById('current' + currentPlayer).textContent = "Score actuel : " + roundScore;
    switchPlayer();
  } else {
    roundScore += nombreAleatoire;
    document.getElementById('current' + currentPlayer).textContent = "Score actuel : " + roundScore;
  }
}
function switchPlayer() {
  document.getElementById('current' + currentPlayer).textContent = "Score actuel : 0";
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  roundScore = 0;
  document.getElementById('current' + currentPlayer).textContent = "Score actuel : " + roundScore;
  
}

});


var holdButton = document.getElementById('boutonHold');
holdButton.addEventListener('click', function() {
  if (isGameActive) {
    if (currentPlayer === 1) {
      score_1 += roundScore;
      document.querySelector('.score_1').textContent = "Score global : " + score_1;
    } else {
      score_2 += roundScore;
      document.querySelector('.score_2').textContent = "Score global : " + score_2;
    }

    if (score_1 >= 100 || score_2 >= 100) {
      isGameActive = false;
      document.querySelector('.joueur_' + currentPlayer + ' h2').textContent = "Joueur " + currentPlayer + " a gagné !";
    } else {
      switchPlayer();
    }
  }
});



nouvellePartie.addEventListener('click', function() {
  //Remettre les scores à zéro
score_1 = 0;
score_2 = 0;
roundScore = 0;

//Réinitialiser les affichages des scores
document.querySelector('.score_1').textContent = "Score gobal: " + score_1;
document.querySelector('.score_2').textContent = "Score gobal: " + score_2;
document.getElementById('current1').textContent = "Score actuel : " + roundScore;
document.getElementById('current2').textContent = "Score actuel : " + roundScore;

//Réinitialiser le joueur actuel
currentPlayer = 1 ;

//Réinitialiser l'état du jeu 
isGameActive = true;

document.querySelector('.joueur_1 h2').textContent = "Joueur 1";
document.querySelector('.joueur_2 h2').textContent = "Joueur 2";

});


 //Fonction qui permet d'afficher l'icone du joueur actif 
 function updateActivePlayerIcon() {
  var iconPlayer1 = document.getElementById('iconPlayer1');
  var iconPlayer2 = document.getElementById('iconPlayer2');

  if (currentPlayer === 1) {
      iconPlayer1.setAttribute('data-icon', 'game-icons:dice-target');
      iconPlayer1.style.color = 'white';
      iconPlayer2.removeAttribute('data-icon');
      iconPlayer2.style.color = 'transparent';
  } else {
      iconPlayer1.removeAttribute('data-icon');
      iconPlayer1.style.color = 'transparent';
      iconPlayer2.setAttribute('data-icon', 'game-icons:dice-target');
      iconPlayer2.style.color = 'white';
  }

  // Recharger les icônes pour les afficher correctement
  iconify.scan();
}



function switchPlayer() {
  document.getElementById('current' + currentPlayer).textContent = "Score actuel : 0";
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  roundScore = 0;
  document.getElementById('current' + currentPlayer).textContent = "Score actuel : " + roundScore;

  updateActivePlayerIcon();
}

