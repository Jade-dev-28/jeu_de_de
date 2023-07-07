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
    document.getElementById('current' + currentPlayer).textContent = "Score actuel :  " + roundScore;
    switchPlayer();
  } else {
    roundScore += nombreAleatoire;
    document.getElementById('current' + currentPlayer).textContent = "Score actuel :  " + roundScore;
  }
}
function switchPlayer() {
  document.getElementById('current' + currentPlayer).textContent = "Score actuel :   0";
  if (currentPlayer === 1) {
    currentPlayer = 2;
    document.querySelector('.joueur_1').classList.add('grise'); // Ajouter la classe grise à la div du joueur 1
    document.querySelector('.joueur_2').classList.remove('grise'); // Supprimer la classe grise de la div du joueur 2
  } else {
    currentPlayer = 1;
    document.querySelector('.joueur_2').classList.add('grise'); // Ajouter la classe grise à la div du joueur 2
    document.querySelector('.joueur_1').classList.remove('grise'); // Supprimer la classe grise de la div du joueur 1
  }  
  roundScore = 0;
  document.getElementById('current' + currentPlayer).textContent = "Score actuel :  " + roundScore;
  
}

});

/*_____________________FONCTION GARDER_______________________*/
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

function switchPlayer() {
  document.getElementById('current' + currentPlayer).textContent = "Score actuel : 0";
  if (currentPlayer === 1) {
    currentPlayer = 2;
    document.querySelector('.joueur_1').classList.add('grise'); // Ajouter la classe grise à la div du joueur 1
    document.querySelector('.joueur_2').classList.remove('grise'); // Supprimer la classe grise de la div du joueur 2
  } else {
    currentPlayer = 1;
    document.querySelector('.joueur_2').classList.add('grise'); // Ajouter la classe grise à la div du joueur 2
    document.querySelector('.joueur_1').classList.remove('grise'); // Supprimer la classe grise de la div du joueur 1
  }
  roundScore = 0;
  document.getElementById('current' + currentPlayer).textContent = "Score actuel : " + roundScore;
}






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
document.querySelector('.joueur_1').classList.remove('grise'); // Supprimer la classe grise de la div du joueur 1
  document.querySelector('.joueur_2').classList.add('grise'); // Ajouter la classe grise à la div du joueur 2


});
// Exécuter la fonction une fois au chargement de la page pour appliquer les conditions par défaut
nouvellePartie.click();


 
 

