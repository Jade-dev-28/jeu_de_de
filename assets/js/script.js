var score_1 = 0;
var current1 = 0;
var lancerDe = document.getElementById('lancerde');
var des = document.getElementById('des');


lancerDe.addEventListener('click', function(){
  var nombreAleatoire = Math.floor(Math.random()*6) + 1;
  des.src = '../images/dice-'+ nombreAleatoire +'.svg';
  des.style.display = 'block';
  console.log('click'); 

  if (nombreAleatoire === 1) {
    current1 = 0; // Réinitialise le score actuel à 0 si le nombre aléatoire est 1
    current1Div.innerHTML = "Score actuel : " + current1;
  } else {
    current1 += nombreAleatoire; // Ajoute le nombre aléatoire au score actuel
    current1Div.innerHTML = "Score actuel : " + current1;
  }

});

garder.addEventListener('click', function(){
  score_1 += current1; // Ajoute le score actuel au score global
  current1 = 0; // Réinitialise le score actuel à 0
  current1Div.innerHTML = "Score actuel : " + current1;
  // Mettre à jour l'affichage du score global
  var score1Div = document.querySelector('.joueur_1 .score_1');
  score1Div.innerHTML = "Score global : " + score_1;
});


 /* function hold() {
    score_1 += current1;
    if (score_1 >= 100) {
      alert('Félicitations ! Vous avez atteint un score de 100 ou plus.');
      score_1 = 0;
    }
    document.querySelector('.score1').textContent = score_1;
  }*/


  
