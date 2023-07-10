var score_1 = 0;
var current1 = 0;
var score_2 = 0;
var current2 = 0;
var currentPlayer = 1; // Joueur 1 commence
var roundScore = 0;
var jeuActif = true;
var lancerDe = document.getElementById('lancerde');
var des = document.getElementById('des');
var nouvellePartie = document.querySelector('.btn_newgame')


lancerDe.addEventListener('click', function(){
  if (jeuActif) {
    //génère un nombre aléatoire entre 1 et 6
  var nombreAleatoire = Math.floor(Math.random()*6) + 1;
 // modifie la source de l'image "des" en fonction du nombre aléatoire généré
  des.src = '../images/dice-'+ nombreAleatoire +'.svg';
  //permet de rendre visble les "des"
  des.style.display = 'block';
  console.log('click'); 

  if (nombreAleatoire === 1) { // si le nombre aléatoire est strictement égale à 0
    roundScore = 0; // le score reviens à zéro

    //met à jour les éléments avec l'id 'current' + le nouveau score actuel qui est zero 
    document.getElementById('current' + currentPlayer).textContent = "Score actuel :  " + roundScore;
    //appelle la fonction changementJoueur qui permet de passer au joueur suivant 
    changementJoueur();
  } else {
    // ajoute le nombre aléatoire généré à la variable "roundScore", ce qui permet d'incrémenter le score actuel du joueur en fonction du nombre obtenu sur le dé.
    roundScore += nombreAleatoire;
    //permet d'afficher textuellement le score actuel
    document.getElementById('current' + currentPlayer).textContent = "Score actuel :  " + roundScore;
  }
}
function changementJoueur() {
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


//sélectionne l'élément avec l'id "boutonHold" et le stocke dans la variable "holdButton"
var holdButton = document.getElementById('boutonHold');
//lorsqu'on clique sur le holdButton
holdButton.addEventListener('click', function() {
  if (jeuActif) {
    if (currentPlayer === 1) {
      score_1 += roundScore; //ajoute le score actuel (roundScore) au score global du joueur 1 (score_1)
      document.querySelector('.score_1').textContent = "Score global : " + score_1; // permet d'afficher textuellement le nouveau score gobal du joueur 1
    } else {
      score_2 += roundScore;  //ajoute le score actuel (roundScore) au score global du joueur 2 (score_2).
      document.querySelector('.score_2').textContent = "Score global : " + score_2;
    }
//si un desdeux jouers obient un score globale de 100 ou plus 
    if (score_1 >= 100 || score_2 >= 100) {
      jeuActif = false; // le jeu obient la valeur false( donc s'arrete )
      document.querySelector('.joueur_' + currentPlayer + ' h2').textContent = "Joueur " + currentPlayer + " a gagné !"; //affichele joueur gagnant 
    } else {
      changementJoueur();
    }
  }
});

function  changementJoueur() {
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
jeuActif = true;

document.querySelector('.joueur_1 h2').textContent = "Joueur 1";
document.querySelector('.joueur_2 h2').textContent = "Joueur 2";
document.querySelector('.joueur_1').classList.remove('grise'); // Supprimer la classe grise de la div du joueur 1
  document.querySelector('.joueur_2').classList.add('grise'); // Ajouter la classe grise à la div du joueur 2


});
// Exécuter la fonction une fois au chargement de la page pour appliquer les conditions par défaut
nouvellePartie.click();


 
 

